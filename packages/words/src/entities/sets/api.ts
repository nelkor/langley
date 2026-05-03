import { getAsync } from '@/shared'
import { SupportedLang } from '@/types'

import { calculateTrainingSet, calculateSetsForLangs } from './lib'

export const getSetsForLangs = (
  nativeLang: SupportedLang,
  targetLang: SupportedLang,
) => getAsync(() => calculateSetsForLangs(nativeLang, targetLang))

export const getTrainingSet = (
  nativeLang: SupportedLang,
  targetLang: SupportedLang,
  ids: string[],
) => getAsync(() => calculateTrainingSet(nativeLang, targetLang, ids))
