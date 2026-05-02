import { FC, useEffect } from 'react'
import { getFinalSet } from '@langley/words'

import { TrainingProps } from './types'

export const Training: FC<TrainingProps> = ({
  nativeLang,
  targetLang,
  exitTraining,
  selectedSets,
}) => {
  useEffect(() => {
    getFinalSet(nativeLang, targetLang, selectedSets).then(result =>
      console.log(result),
    )
  }, [nativeLang, targetLang, selectedSets])

  return (
    <>
      <div>Training</div>
      <button onClick={exitTraining}>Exit</button>
    </>
  )
}
