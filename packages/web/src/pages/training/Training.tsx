import { v4 as createId } from 'uuid'
import { FC, useState, useEffect } from 'react'
import { getTrainingSet } from '@langley/words'

import { Example } from './Example'
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
    <div className="training-page">
      <button onClick={exitTraining}>Exit</button>
      {trainingWords.length && <Example initialWords={trainingWords} />}
    </div>
  )
}
