import { FC } from 'react'
import { motion } from 'framer-motion'

import { CardSide } from './CardSide'
import { NextCardProps } from '../types'

export const NextCard: FC<NextCardProps> = ({ text, lang, isSwiping }) => (
  <NextCardInner
    key={String(isSwiping)}
    lang={lang}
    text={text}
    isSwiping={isSwiping}
  />
)

const NextCardInner: FC<NextCardProps> = ({ text, lang, isSwiping }) => (
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
    <CardSide lang={lang} text={text} />
  </motion.div>
)
