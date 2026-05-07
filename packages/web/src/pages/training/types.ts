import { SupportedLang } from '@langley/words'

export type SwipeMode = null | 'check' | 'cross'
export type FontSize = 16 | 18 | 20 | 22 | 24 | 26 | 28 | 32 | 36 | 48 | 60 | 72

export type TrainingProps = {
  selectedSets: string[]
  exitTraining: () => void
  nativeLang: SupportedLang
  targetLang: SupportedLang
}

export type CardSideProps = {
  text: string
  lang: SupportedLang
  isBackside?: boolean
}

export type FlipCardProps = {
  swiping: SwipeMode
  backsideText: string
  frontsideText: string
  backsideLang: SupportedLang
  frontsideLang: SupportedLang
}

export type NextCardProps = {
  text: string
  isSwiping: boolean
  lang: SupportedLang
}

export type ControlsProps = {
  handleCheck: () => void
  handleCross: () => void
}
