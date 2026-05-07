import { FC } from 'react'
import { motion } from 'framer-motion'

import { CardSide } from './CardSide'
import { FlipCardProps } from '../types'

export const FlipCard: FC<FlipCardProps> = ({
  flipped,
  swiping,
  setFlipped,
  backsideText,
  frontsideText,
}) => (
  <FlipCardInner
    key={`${frontsideText}-${backsideText}`}
    swiping={swiping}
    flipped={flipped}
    setFlipped={setFlipped}
    frontsideText={frontsideText}
    backsideText={backsideText}
  />
)

const FlipCardInner: FC<FlipCardProps> = ({
  swiping,
  flipped,
  setFlipped,
  backsideText,
  frontsideText,
}) => (
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
      <CardSide text={frontsideText} />
      <CardSide text={backsideText} isBackside />
    </motion.div>

    <button className="flip-button" onClick={() => setFlipped(!flipped)} />
  </motion.div>
)
