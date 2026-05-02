import { SupportedLang } from '@langley/words'

export type SettingsProps = {
  selectedSets: string[]
  onTrainingStarted: () => void
  nativeLang: SupportedLang | ''
  targetLang: SupportedLang | ''
  setSelectedSets: (sets: string[]) => void
  setNativeLang: (lang: SupportedLang | '') => void
  setTargetLang: (lang: SupportedLang | '') => void
}

export type LangsProps = {
  nativeLang: SupportedLang | ''
  targetLang: SupportedLang | ''
  setNativeLang: (lang: SupportedLang | '') => void
  setTargetLang: (lang: SupportedLang | '') => void
}

export type SetsProps = {
  nativeLang: SupportedLang | ''
  targetLang: SupportedLang | ''
  selectedSets: string[]
  setSelectedSets: (sets: string[]) => void
}

export type SelectOption = {
  value: string
  text: string
}
