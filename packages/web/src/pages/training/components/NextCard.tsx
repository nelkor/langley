import { FC } from 'react'
import { motion } from 'framer-motion'

import { CardSide } from './CardSide'
import { NextCardProps } from '../types'

export const NextCard: FC<NextCardProps> = ({ text, isSwiping }) => (
  <NextCardInner key={String(isSwiping)} text={text} isSwiping={isSwiping} />
)

const NextCardInner: FC<NextCardProps> = ({ text, isSwiping }) => (
  <motion.div
    className="next-card"
    initial={{
      scale: 0.8,
      opacity: 0.4,
    }}
    animate={{
      scale: isSwiping ? 1 : 0.8,
      opacity: isSwiping ? 1 : 0.4,
    }}
  >
    <CardSide text={text} />
  </motion.div>
)
