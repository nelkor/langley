import { arrayToShuffled } from 'array-shuffle'

import { SupportedSet, TrainingWord, SupportedLang } from '@/types'

import { sets } from './model'

export const calculateSetsForLangs = (
  nativeLang: SupportedLang,
  targetLang: SupportedLang,
) => {
  if (nativeLang === targetLang) {
    throw new Error('nativeLang is targetLang')
  }

  const result: SupportedSet[] = []

  sets.forEach(wordSet => {
    if (wordSet.words.some(word => word[nativeLang] && word[targetLang])) {
      result.push({ id: wordSet.id, name: wordSet.name[nativeLang] })
    }
  })

  return result
}

export const calculateTrainingSet = (
  nativeLang: SupportedLang,
  targetLang: SupportedLang,
  ids: string[],
) => {
  if (nativeLang === targetLang) {
    throw new Error('nativeLang is targetLang')
  }

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

    result.push(...words)
  })

  // В будущем можно будет поискать и вырезать одинаковые слова.

  return arrayToShuffled(result)
}
