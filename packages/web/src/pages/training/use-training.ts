import { useState, useEffect } from 'react'
import { TrainingWord, getTrainingSet } from '@langley/words'

import { TrainingProps } from './types'

export const useTraining = ({
  nativeLang,
  targetLang,
  exitTraining,
  selectedSets,
}: TrainingProps) => {
  const [trainingWords, setTrainingWords] = useState<TrainingWord[]>([])
  const currentCard = trainingWords[0] || null
  const nextCard = trainingWords[1] || null
  const peripheryCount = trainingWords.length * 0.2

  const moveCard = (firstIndex: number, lastIndex: number) => {
    const edge =
      Math.floor(Math.random() * (lastIndex - firstIndex + 1) + firstIndex) + 1

    setTrainingWords([
      ...trainingWords.slice(1, edge),
      trainingWords[0],
      ...trainingWords.slice(edge),
    ])
  }

  // При нажатии ✓/× включаем анимацию и запускаем таймер.
  // На исход таймера выключаем анимацию и обновляем колоду.
  // Пока включена анимация, игнорируем нажатия ✓/×.
  const handleCheck = () => {
    const lastIndex = trainingWords.length - 1

    moveCard(lastIndex - Math.floor(peripheryCount), lastIndex)
  }

  const handleCross = () => {
    moveCard(1, Math.ceil(peripheryCount))
  }

  useEffect(() => {
    getTrainingSet(nativeLang, targetLang, selectedSets).then(result =>
      setTrainingWords(result),
    )
  }, [nativeLang, targetLang, selectedSets])

  return {
    nextCard,
    currentCard,
    handleCheck,
    handleCross,
    exitTraining,
  }
}
