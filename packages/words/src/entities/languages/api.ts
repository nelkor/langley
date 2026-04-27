import { getAsync } from '@/shared'

import { languages } from './model'

export const getLanguages = () => getAsync(() => structuredClone(languages))
