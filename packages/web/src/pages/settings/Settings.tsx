import { FC } from 'react'

import { SettingsProps } from './types'
import { Sets } from './components/Sets'
import { Langs } from './components/Langs'

export const Settings: FC<SettingsProps> = ({
  nativeLang,
  targetLang,
  selectedSets,
  setNativeLang,
  setTargetLang,
  setSelectedSets,
  onTrainingStarted,
}) => (
  <div className="settings-page">
    <Langs
      nativeLang={nativeLang}
      targetLang={targetLang}
      setNativeLang={setNativeLang}
      setTargetLang={setTargetLang}
    />

    <Sets
      nativeLang={nativeLang}
      targetLang={targetLang}
      selectedSets={selectedSets}
      setSelectedSets={setSelectedSets}
    />

    <button
      className="start"
      disabled={!selectedSets.length}
      onClick={onTrainingStarted}
    >
      Start training
    </button>
  </div>
)
