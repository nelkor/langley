import { FC } from 'react'

import { TrainingProps } from './types'
import { useTraining } from './use-training'
import { CardSide } from './components/CardSide'
import { FlipCard } from './components/FlipCard'
import { Controls } from './components/Controls'

export const Training: FC<TrainingProps> = props => {
  const { nextCard, currentCard, handleCheck, handleCross, exitTraining } =
    useTraining(props)

  return (
    <div className="training-page">
      <button className="exit" onClick={exitTraining}>
        Back to Settings
      </button>

      {currentCard && nextCard && (
        <>
          <div className="deck">
            <div className="next-card">
              <CardSide text={nextCard.nativeLang} />
            </div>

            <FlipCard
              frontsideText={currentCard.nativeLang}
              backsideText={currentCard.targetLang}
            />
          </div>

          <Controls handleCheck={handleCheck} handleCross={handleCross} />
        </>
      )}
    </div>
  )
}
