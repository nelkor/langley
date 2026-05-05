import { SupportedLang } from '@langley/words'

export type TrainingProps = {
  selectedSets: string[]
  exitTraining: () => void
  nativeLang: SupportedLang
  targetLang: SupportedLang
}

export type CardProps = {
  faceUpText: string
  faceDownText: string
}

export type ControlsProps = {
  handleCheck: () => void
  handleCross: () => void
}

export type FontSize = 16 | 18 | 20 | 22 | 24 | 26 | 28 | 32 | 36 | 48 | 60 | 72
