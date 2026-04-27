import { getAsync } from '@/shared'
import { SupportedLang } from '@/types'

import { calculateFinalSet, calculateSetsForLangs } from './lib'

export const getSetsForLangs = (
  nativeLang: SupportedLang,
  targetLang: SupportedLang,
) => getAsync(() => calculateSetsForLangs(nativeLang, targetLang))

export const getFinalSet = (
  nativeLang: SupportedLang,
  targetLang: SupportedLang,
  ids: string[],
) => getAsync(() => calculateFinalSet(nativeLang, targetLang, ids))
