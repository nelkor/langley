import { TrainingWord, SupportedLang } from '@langley/words'

export type TrainingProps = {
  selectedSets: string[]
  exitTraining: () => void
  nativeLang: SupportedLang
  targetLang: SupportedLang
}

export type TrainingWordWithId = TrainingWord & { id: string }
