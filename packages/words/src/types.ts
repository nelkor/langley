export type SupportedLang = 'en' | 'ru' | 'es'

export type WordSet = {
  id: string
  name: Record<SupportedLang, string>
  words: Record<SupportedLang, string>[]
}

export type SupportedSet = {
  id: string
  name: string
}

export type TrainingWord = {
  nativeLang: string
  targetLang: string
}
