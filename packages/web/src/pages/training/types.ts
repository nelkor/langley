import { SupportedLang } from '@langley/words'

export type TrainingProps = {
  selectedSets: string[]
  exitTraining: () => void
  nativeLang: SupportedLang
  targetLang: SupportedLang
}
