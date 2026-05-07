import { SupportedLang } from '@langley/words'

export type SwipeMode = null | 'check' | 'cross'
export type FontSize = 16 | 18 | 20 | 22 | 24 | 26 | 28 | 32 | 36 | 48 | 60 | 72

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

export type CardSideProps = {
  text: string
  flipped?: boolean
  lang?: SupportedLang
  isBackside?: boolean
  toggleFlipped?: () => void
}

export type FlipCardProps = {
  frontsideText: string
  backsideText: string
  swiping: SwipeMode
  nativeLang: SupportedLang
  targetLang: SupportedLang
}

export type NextCardProps = {
  text: string
  isSwiping: boolean
}

export type ControlsProps = {
  handleCheck: () => void
  handleCross: () => void
}
