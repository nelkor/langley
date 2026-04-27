import { SupportedLang, SupportedSets } from '@/types'

import { sets } from './model'

export const calculateSetsForLangs = (
  nativeLang: SupportedLang,
  targetLang: SupportedLang,
) => {
  const result: SupportedSets = []

  sets.forEach(wordSet => {
    if (wordSet.words.some(word => word[nativeLang] && word[targetLang])) {
      result.push({ id: wordSet.id, name: wordSet.name[nativeLang] })
    }
  })

  return result
}
