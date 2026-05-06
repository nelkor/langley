import { FC } from 'react'

import { CardSideProps } from '../types'
import { calculateFontSize } from '../lib'

export const CardSide: FC<CardSideProps> = ({ text, isBackside }) => (
  <div
    className={`card-side ${isBackside ? 'back' : 'front'}`}
    style={{ fontSize: calculateFontSize(text.length) }}
  >
    {text}
  </div>
)
