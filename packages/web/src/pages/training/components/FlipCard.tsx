import { FC, useState } from 'react'
import { motion } from 'framer-motion'

import { CardSide } from './CardSide'
import { FlipCardProps } from '../types'

export const FlipCard: FC<FlipCardProps> = ({
  swiping,
  backsideText,
  backsideLang,
  frontsideText,
  frontsideLang,
}) => (
  <FlipCardInner
    key={`${frontsideText}-${backsideText}`}
    swiping={swiping}
    frontsideText={frontsideText}
    backsideText={backsideText}
    backsideLang={backsideLang}
    frontsideLang={frontsideLang}
  />
)

const FlipCardInner: FC<FlipCardProps> = ({
  swiping,
  backsideText,
  backsideLang,
  frontsideText,
  frontsideLang,
}) => {
  const [flipped, setFlipped] = useState(false)

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
        <CardSide text={frontsideText} lang={frontsideLang} />
        <CardSide text={backsideText} isBackside lang={backsideLang} />
      </motion.div>

      <button
        className="flip-button"
        onClick={() => setFlipped(value => !value)}
      />
    </motion.div>
  )
}
