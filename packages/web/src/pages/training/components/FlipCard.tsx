import { FC, useState } from 'react'
import { motion } from 'framer-motion'

import { CardSide } from './CardSide'
import { FlipCardProps } from '../types'

export const FlipCard: FC<FlipCardProps> = ({
  backsideText,
  frontsideText,
}) => (
  <FlipCardInner
    key={`${frontsideText}-${backsideText}`}
    frontsideText={frontsideText}
    backsideText={backsideText}
  />
)

const FlipCardInner: FC<FlipCardProps> = ({ backsideText, frontsideText }) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="flip-card-wrapper">
      <motion.div
        className="flip-card"
        animate={{ scale: flipped ? 1.02 : 1, rotateY: flipped ? 180 : 0 }}
      >
        <CardSide text={frontsideText} />
        <CardSide text={backsideText} isBackside />
      </motion.div>

      <button
        className="flip-button"
        onClick={() => setFlipped(value => !value)}
      />
    </div>
  )
}
