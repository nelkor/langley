import { FC } from 'react'

import { TrainingProps } from './types'
import { Card } from './components/Card'
import { useTraining } from './use-training'
import { Controls } from './components/Controls'

export const Training: FC<TrainingProps> = props => {
  const { current, handleCheck, handleCross, exitTraining } = useTraining(props)

  return (
    <div className="training-page">
      <button className="exit" onClick={exitTraining}>
        Back to Settings
      </button>

      {current && (
        <>
          <Card
            faceUpText={current.nativeLang}
            faceDownText={current.targetLang}
          />

          <Controls handleCheck={handleCheck} handleCross={handleCross} />
        </>
      )}
    </div>
  )
}
