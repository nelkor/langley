import { motion } from 'framer-motion'
import React, { useState } from 'react'

import { TrainingWordWithId } from './types'

interface FlashcardTrainerProps {
  initialWords: TrainingWordWithId[]
}

type SwipeDir = 'left' | 'right' | null

/**
 * Визуальные параметры для логических позиций в стопке:
 *   0 — верхняя, активная карточка;
 *   1 — "следующая" (меньше, темнее, блюр, полупрозрачная);
 *   2 — "глубокая" (невидимая), нужна, чтобы новая следующая карточка
 *       могла плавно появиться из-под стопки, а не возникать из ниоткуда.
 */
const STACK_POSITIONS = [
  { y: 0, zIndex: 3, scale: 1.0, opacity: 1, filter: 'blur(0px)' },
  { y: 16, zIndex: 2, scale: 0.92, opacity: 0.6, filter: 'blur(1px)' },
  { y: 32, zIndex: 1, opacity: 0, scale: 0.84, filter: 'blur(2px)' },
] as const

// Сколько карточек держим отрендеренными одновременно.
const VISIBLE_COUNT = 3
const SWIPE_DURATION = 0.4

export const Example: React.FC<FlashcardTrainerProps> = ({ initialWords }) => {
  // ================= СОСТОЯНИЕ =================

  // Порядок слов. Меняем его только после окончания анимации ухода.
  const [words, setWords] = useState<TrainingWordWithId[]>(initialWords)
  // Перевёрнута ли текущая верхняя карточка.
  const [isFlipped, setIsFlipped] = useState(false)
  // Направление ухода верхней карточки. null — никакая анимация не идёт.
  const [swipeDir, setSwipeDir] = useState<SwipeDir>(null)

  const isAnimating = swipeDir !== null

  // ================= ОБРАБОТЧИКИ =================

  /** Пользователь нажал одну из кнопок ответа — запускаем анимацию. */
  const handleAnswer = (known: boolean) => {
    if (isAnimating) {
      return
    }
    setSwipeDir(known ? 'left' : 'right')
  }

  /** Клик по верхней карточке — переворачиваем её. */
  const handleFlip = () => {
    if (isAnimating) {
      return
    }
    setIsFlipped(prev => !prev)
  }

  /**
   * Вызывается, когда УХОДЯЩАЯ карточка завершила свою анимацию.
   * Принимает `dir` аргументом (а не через замыкание) — это гарантирует,
   * что направление не "протухнет".
   */
  const finishSwipe = (dir: Exclude<SwipeDir, null>) => {
    setWords(prev => {
      if (prev.length <= 1) {
        return prev
      }
      const [first, ...rest] = prev
      if (dir === 'left') {
        // "Знаю" → слово в конец массива
        return [...rest, first]
      } else {
        // "Не знаю" → слово в середину массива
        const mid = Math.floor(rest.length / 2)
        return [...rest.slice(0, mid), first, ...rest.slice(mid)]
      }
    })
    setIsFlipped(false)
    setSwipeDir(null)
  }

  // ================= РЕНДЕР =================

  if (words.length === 0) {
    return <div className="trainer trainer--empty">Список слов пуст</div>
  }

  const visibleWords = words.slice(0, VISIBLE_COUNT)

  return (
    <div className="trainer">
      <div className="trainer__stack">
        {visibleWords.map((word, idx) => {
          // Карточка по индексу 0 — текущая верхняя
          // (или уходящая, если уже началась анимация).
          const isExiting = isAnimating && idx === 0

          // Пока уходит верхняя, все карточки "поднимаются" на позицию выше:
          // idx=1 становится top-позицией, idx=2 — next-позицией.
          const stackPos = isAnimating ? idx - 1 : idx

          // Целевое состояние, к которому анимируется motion.div.
          // Всё (положение, прозрачность, блюр) вычисляется из текущего state,
          // поэтому stale-замыканий быть не может.
          const animateTo = isExiting
            ? {
                y: 0,
                scale: 1,
                zIndex: 4,
                opacity: 0,
                filter: 'blur(0px)',
                x: swipeDir === 'left' ? -500 : 500,
                rotate: swipeDir === 'left' ? -15 : 15,
              }
            : {
                x: 0,
                rotate: 0,
                ...STACK_POSITIONS[stackPos],
              }

          // Интерактивна только "настоящая" верхняя карточка.
          const isInteractiveTop = !isAnimating && idx === 0

          return (
            <motion.div
              key={word.id}
              className={`card${isInteractiveTop ? ' card--top' : ''}`}
              // initial={false} — при первом монтировании карточка
              // просто появляется на своём месте без анимации "въезда".
              initial={false}
              animate={animateTo}
              transition={{
                duration: SWIPE_DURATION,
                ease: isExiting ? 'easeIn' : 'easeOut',
              }}
              onClick={isInteractiveTop ? handleFlip : undefined}
              onAnimationComplete={() => {
                // Колбэк срабатывает на всех карточках, но реагируем
                // только на ту, которая уезжает (idx=0 во время анимации).
                if (isExiting && swipeDir) {
                  finishSwipe(swipeDir)
                }
              }}
            >
              {/*
                Внутренний motion отвечает за 3D-переворот, не конфликтуя
                с трансформами внешнего motion (x/scale/rotate и т.д.).
                Условие idx === 0: переворачиваем ТОЛЬКО карточку на верхней
                позиции — даже если она сейчас уходит, она всё ещё хранит
                своё "перевёрнутое" состояние до конца анимации.
              */}
              <motion.div
                className="card__inner"
                animate={{ rotateY: idx === 0 && isFlipped ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card__face card__face--front">
                  {word.nativeLang}
                </div>
                <div className="card__face card__face--back">
                  {word.targetLang}
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Кнопки ответа — блокируются на время анимации. */}
      <div className="trainer__actions">
        <button
          className="btn btn--know"
          onClick={() => handleAnswer(true)}
          disabled={isAnimating}
        >
          Знаю
        </button>
        <button
          className="btn btn--dont-know"
          onClick={() => handleAnswer(false)}
          disabled={isAnimating}
        >
          Не знаю
        </button>
      </div>
    </div>
  )
}
