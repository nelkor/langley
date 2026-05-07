import { FC } from 'react'

import { TrainingProps } from './types'
import { useTraining } from './use-training'
import { NextCard } from './components/NextCard'
import { FlipCard } from './components/FlipCard'
import { Controls } from './components/Controls'

export const Training: FC<TrainingProps> = props => {
  const {
    swiping,
    nextCard,
    currentCard,
    handleCheck,
    handleCross,
    exitTraining,
  } = useTraining(props)

  return (
    <div className="training-page">
      <button className="exit" onClick={exitTraining}>
        Back to Settings
      </button>

      {currentCard && nextCard && (
        <>
          <div className="deck">
            <NextCard text={nextCard.nativeLang} isSwiping={Boolean(swiping)} />

            <FlipCard
              swiping={swiping}
              frontsideText={currentCard.nativeLang}
              backsideText={currentCard.targetLang}
              nativeLang={props.nativeLang}
              targetLang={props.targetLang}
            />
          </div>

          <Controls handleCheck={handleCheck} handleCross={handleCross} />
        </>
      )}
    </div>
  )
}
