import { FC, useState } from 'react'

import { CardProps } from '../types'
import { calculateFontSize } from '../lib'

export const Card: FC<CardProps> = ({ faceUpText, faceDownText }) => (
  <CardInner
    key={`${faceUpText}-${faceDownText}`}
    faceUpText={faceUpText}
    faceDownText={faceDownText}
  />
)

const CardInner: FC<CardProps> = ({ faceUpText, faceDownText }) => {
  const [flipped, setFlipped] = useState(false)
  const toggleFlipped = () => setFlipped(value => !value)
  const currentText = flipped ? faceDownText : faceUpText

  return (
    <div className={`card ${flipped ? 'face-down' : 'face-up'}`}>
      <div
        className="text"
        style={{ fontSize: calculateFontSize(currentText.length) }}
      >
        {currentText}
      </div>

      <button className="flip" onClick={toggleFlipped} />
    </div>
  )
}
