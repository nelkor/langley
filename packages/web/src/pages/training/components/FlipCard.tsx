import { FC, useState } from 'react'
import { motion } from 'framer-motion'

import { CardSide } from './CardSide'
import { FlipCardProps } from '../types'

export const FlipCard: FC<FlipCardProps> = ({
  swiping,
  nativeLang,
  targetLang,
  backsideText,
  frontsideText,
}) => (
  <FlipCardInner
    key={`${frontsideText}-${backsideText}`}
    swiping={swiping}
    nativeLang={nativeLang}
    targetLang={targetLang}
    frontsideText={frontsideText}
    backsideText={backsideText}
  />
)

const FlipCardInner: FC<FlipCardProps> = ({
  swiping,
  nativeLang,
  targetLang,
  backsideText,
  frontsideText,
}) => {
  const [flipped, setFlipped] = useState(false)
  const toggleFlipped = () => setFlipped(!flipped)

  return (
    <motion.div
      className="flip-card-wrapper"
      animate={{
        scale: swiping ? 1.2 : 1,
        opacity: swiping ? 0 : 1,
        translateY: swiping ? 40 : 0,
        rotateZ: swiping === 'cross' ? 20 : swiping === 'check' ? -14 : 0,
        translateX: swiping === 'cross' ? 600 : swiping === 'check' ? -600 : 0,
      }}
      transition={{ ease: 'easeIn' }}
    >
      <motion.div
        className="flip-card"
        animate={{ scale: flipped ? 1.02 : 1, rotateY: flipped ? 180 : 0 }}
      >
        <CardSide
          flipped={flipped}
          text={frontsideText}
          toggleFlipped={toggleFlipped}
          lang={nativeLang}
        />

        <CardSide
          isBackside
          flipped={flipped}
          text={backsideText}
          toggleFlipped={toggleFlipped}
          lang={targetLang}
        />
      </motion.div>
    </motion.div>
  )
}
