import { useState, useEffect } from 'react'
import { TrainingWord, getTrainingSet } from '@langley/words'

import { SwipeMode, TrainingProps } from './types'

const ANIMATION_DELAY = 300

export const useTraining = ({
  nativeLang,
  targetLang,
  exitTraining,
  selectedSets,
}: TrainingProps) => {
  const [trainingWords, setTrainingWords] = useState<TrainingWord[]>([])
  const [swiping, setSwiping] = useState<SwipeMode>(null)
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

  const startSwiping = (mode: SwipeMode) => {
    setSwiping(mode)

    setTimeout(() => {
      setSwiping(null)

      if (mode === 'check') {
        const lastIndex = trainingWords.length - 1

        moveCard(lastIndex - Math.floor(peripheryCount), lastIndex)
      } else {
        moveCard(1, Math.ceil(peripheryCount))
      }
    }, ANIMATION_DELAY)
  }

  const handleCheck = () => {
    if (swiping) {
      return
    }

    startSwiping('check')
  }

  const handleCross = () => {
    if (swiping) {
      return
    }

    startSwiping('cross')
  }

  useEffect(() => {
    getTrainingSet(nativeLang, targetLang, selectedSets).then(result =>
      setTrainingWords(result),
    )
  }, [nativeLang, targetLang, selectedSets])

  return {
    swiping,
    nextCard,
    currentCard,
    handleCheck,
    handleCross,
    exitTraining,
  }
}
