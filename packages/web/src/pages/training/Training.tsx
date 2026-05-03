import { v4 as createId } from 'uuid'
import { FC, useState, useEffect } from 'react'
import { getTrainingSet } from '@langley/words'

import { TrainingProps, TrainingWordWithId } from './types'

export const Training: FC<TrainingProps> = ({
  nativeLang,
  targetLang,
  exitTraining,
  selectedSets,
}) => {
  const [trainingWords, setTrainingWords] = useState<TrainingWordWithId[]>([])

  useEffect(() => {
    getTrainingSet(nativeLang, targetLang, selectedSets).then(result =>
      setTrainingWords(result.map(item => ({ ...item, id: createId() }))),
    )
  }, [nativeLang, targetLang, selectedSets])

  return (
    <>
      <div>Training</div>

      <ul>
        {trainingWords.map(word => (
          <li key={word.id}>
            {word.nativeLang}: {word.targetLang}
          </li>
        ))}
      </ul>

      <button onClick={exitTraining}>Exit</button>
    </>
  )
}
