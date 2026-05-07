import { FC } from 'react'

import { CardSideProps } from '../types'
import { calculateFontSize } from '../lib'

export const CardSide: FC<CardSideProps> = ({ text, lang, isBackside }) => {
  const speak = () => {
    console.log(lang, text)
  }

  return (
    <div
      className={`card-side ${isBackside ? 'back' : 'front'}`}
      style={{ fontSize: calculateFontSize(text.length) }}
    >
      <span>{text}</span>
      <button onClick={speak}>🔊</button>
    </div>
  )
}
