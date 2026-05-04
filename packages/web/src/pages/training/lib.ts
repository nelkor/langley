import { FontSize } from './types'

export const calculateFontSize = (wordLength: number): FontSize => {
  if (wordLength < 4) {
    return 72
  }

  if (wordLength > 13) {
    return 16
  }

  switch (wordLength) {
    case 4:
      return 60
    case 5:
      return 48
    case 6:
      return 36
    case 7:
      return 32
    case 8:
      return 28
    case 9:
      return 26
    case 10:
      return 24
    case 11:
      return 22
    case 12:
      return 20
    case 13:
      return 18
    default:
      throw new Error('wordLength must be a natural number')
  }
}
