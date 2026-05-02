import { Settings } from '@/pages/settings'
import { Training } from '@/pages/training'

import { useAppState } from './use-app-state'

export const App = () => {
  const {
    nativeLang,
    targetLang,
    exitTraining,
    selectedSets,
    startTraining,
    setNativeLang,
    setTargetLang,
    setSelectedSets,
    isTrainingStarted,
  } = useAppState()

  return (
    <>
      {isTrainingStarted && nativeLang && targetLang && selectedSets.length ? (
        <Training
          exitTraining={exitTraining}
          nativeLang={nativeLang}
          targetLang={targetLang}
          selectedSets={selectedSets}
        />
      ) : (
        <Settings
          nativeLang={nativeLang}
          targetLang={targetLang}
          selectedSets={selectedSets}
          setNativeLang={setNativeLang}
          setTargetLang={setTargetLang}
          onTrainingStarted={startTraining}
          setSelectedSets={setSelectedSets}
        />
      )}
    </>
  )
}
