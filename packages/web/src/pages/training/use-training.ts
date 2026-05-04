import { useState, useEffect } from 'react'
import { TrainingWord, getTrainingSet } from '@langley/words'

import { TrainingProps } from './types'

export const useTraining = ({
  nativeLang,
  targetLang,
  exitTraining,
  selectedSets,
}: TrainingProps) => {
  const [flipped, setFlipped] = useState(false)
  const toggleFlipped = () => setFlipped(value => !value)
  const [trainingWords, setTrainingWords] = useState<TrainingWord[]>([])
  const current = trainingWords[0] || null
  const peripheryCount = trainingWords.length * 0.2

  const currentText = current
    ? flipped
      ? current.targetLang
      : current.nativeLang
    : null

  const moveCard = (firstIndex: number, lastIndex: number) => {
    const edge =
      Math.floor(Math.random() * (lastIndex - firstIndex + 1) + firstIndex) + 1

    setFlipped(false)

    setTrainingWords([
      ...trainingWords.slice(1, edge),
      trainingWords[0],
      ...trainingWords.slice(edge),
    ])
  }

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
    flipped,
    currentText,
    handleCheck,
    handleCross,
    exitTraining,
    toggleFlipped,
  }
}
