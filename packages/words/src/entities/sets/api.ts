import { getAsync } from '@/shared'
import { SupportedLang } from '@/types'

import { calculateSetsForLangs } from './lib'

export const getSetsForLangs = (
  nativeLang: SupportedLang,
  targetLang: SupportedLang,
) => getAsync(() => calculateSetsForLangs(nativeLang, targetLang))
