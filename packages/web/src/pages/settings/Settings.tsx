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
  <>
    <div>Settings</div>

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

    <button disabled={!selectedSets.length} onClick={onTrainingStarted}>
      Start
    </button>
  </>
)
