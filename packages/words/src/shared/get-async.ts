const BASE_DELAY = 50
const BONUS_DELAY = 500

export const getAsync = <T>(fn: () => T): Promise<T> =>
  new Promise(resolve => {
    setTimeout(() => resolve(fn()), BASE_DELAY + Math.random() * BONUS_DELAY)
  })
