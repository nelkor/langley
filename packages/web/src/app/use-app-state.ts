import { useState } from 'react'
import { SupportedLang } from '@langley/words'

export const useAppState = () => {
  const [selectedSets, setSelectedSets] = useState<string[]>([])
  const [isTrainingStarted, setIsTrainingStarted] = useState(false)
  const [nativeLang, setNativeLang] = useState<SupportedLang | ''>('')
  const [targetLang, setTargetLang] = useState<SupportedLang | ''>('')

  const startTraining = () => {
    if (!nativeLang || !targetLang || !selectedSets.length) {
      return
    }

    setIsTrainingStarted(true)
  }

  const exitTraining = () => {
    setIsTrainingStarted(false)
  }

  return {
    nativeLang,
    targetLang,
    exitTraining,
    selectedSets,
    startTraining,
    setNativeLang,
    setTargetLang,
    setSelectedSets,
    isTrainingStarted,
  }
}
