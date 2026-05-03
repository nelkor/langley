import { it, expect, describe } from 'vitest'

import { calculateTrainingSet, calculateSetsForLangs } from './lib'

describe('calculateSetsForLangs', () => {
  it('should be defined', () => {
    expect(calculateSetsForLangs).toBeDefined()
  })

  it('should calculate correctly', () => {
    expect(calculateSetsForLangs('en', 'ru')).toEqual([
      { id: 'nouns', name: 'Nouns' },
      { id: 'verbs', name: 'Verbs' },
    ])
  })
})

describe('calculateTrainingSet', () => {
  it('should be defined', () => {
    expect(calculateTrainingSet).toBeDefined()
  })

  it('should calculate correctly', () => {
    expect(calculateTrainingSet('ru', 'es', ['verbs', 'nouns']).length).toBe(4)
  })
})
