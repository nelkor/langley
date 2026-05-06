import { FC } from 'react'

import { TrainingProps } from './types'
import { useTraining } from './use-training'
import { FlipCard } from './components/FlipCard'
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
          <FlipCard
            frontsideText={current.nativeLang}
            backsideText={current.targetLang}
          />

          <Controls handleCheck={handleCheck} handleCross={handleCross} />
        </>
      )}
    </div>
  )
}
