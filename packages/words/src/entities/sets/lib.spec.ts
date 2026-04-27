import { it, expect, describe } from 'vitest'

import { calculateSetsForLangs } from './lib'

describe('calculateSetsForLangs', () => {
  it('shoult be defined', () => {
    expect(calculateSetsForLangs).toBeDefined()
  })

  it('should calculate correclty', () => {
    expect(calculateSetsForLangs('en', 'ru')).toEqual([
      { id: 'nouns', name: 'Nouns' },
      { id: 'verbs', name: 'Verbs' },
    ])
  })
})
