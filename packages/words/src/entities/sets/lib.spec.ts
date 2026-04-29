import { it, expect, describe } from 'vitest'

import { calculateFinalSet, calculateSetsForLangs } from './lib'

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

describe('calculateFinalSet', () => {
  it('shoult be defined', () => {
    expect(calculateFinalSet).toBeDefined()
  })

  it('should calculate correclty', () => {
    expect(calculateFinalSet('ru', 'es', ['verbs', 'nouns']).length).toBe(4)
  })
})
