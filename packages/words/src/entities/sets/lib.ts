import { TrainingWord, SupportedSet, SupportedLang } from '@/types'

import { sets } from './model'

export const calculateSetsForLangs = (
  nativeLang: SupportedLang,
  targetLang: SupportedLang,
) => {
  const result: SupportedSet[] = []

  sets.forEach(wordSet => {
    if (wordSet.words.some(word => word[nativeLang] && word[targetLang])) {
      result.push({ id: wordSet.id, name: wordSet.name[nativeLang] })
    }
  })

  return result
}

export const calculateFinalSet = (
  nativeLang: SupportedLang,
  targetLang: SupportedLang,
  ids: string[],
) => {
  const result: TrainingWord[] = []

  sets.forEach(wordSet => {
    if (!ids.includes(wordSet.id)) {
      return
    }

    const words = wordSet.words
      .map<TrainingWord | null>(word =>
        word[nativeLang] && word[targetLang]
          ? {
              nativeLang: word[nativeLang],
              targetLang: word[targetLang],
            }
          : null,
      )
      .filter(Boolean) as TrainingWord[]

    result.concat(words)
  })

  return result
}
