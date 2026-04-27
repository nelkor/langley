export type SupportedLang = 'en' | 'ru' | 'es'

export type WordSet = {
  id: string
  name: Record<SupportedLang, string>
  words: Record<SupportedLang, string>[]
}

export type SupportedSets = {
  id: string
  name: string
}[]
