import { FC } from 'react'

import { TrainingProps } from './types'
import { calculateFontSize } from './lib'
import { useTraining } from './use-training'

export const Training: FC<TrainingProps> = props => {
  const {
    flipped,
    currentText,
    handleCheck,
    handleCross,
    exitTraining,
    toggleFlipped,
  } = useTraining(props)

  return (
    <div className="training-page">
      <button className="exit" onClick={exitTraining}>
        Back to Settings
      </button>

      {currentText && (
        <>
          <div className={`card ${flipped ? 'face-down' : 'face-up'}`}>
            <div
              className="text"
              style={{ fontSize: calculateFontSize(currentText.length) }}
            >
              {currentText}
            </div>

            <button className="flip" onClick={toggleFlipped} />
          </div>

          <div className="controls">
            <button className="check" onClick={handleCheck}>
              ✓
            </button>

            <button className="cross" onClick={handleCross}>
              ×
            </button>
          </div>
        </>
      )}
    </div>
  )
}
