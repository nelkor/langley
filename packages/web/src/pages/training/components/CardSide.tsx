import { FC } from 'react'

import { CardSideProps } from '../types'
import { calculateFontSize } from '../lib'

export const CardSide: FC<CardSideProps> = ({
  text,
  lang,
  flipped,
  isBackside,
  toggleFlipped,
}) => {
  const disabled = !toggleFlipped || Boolean(isBackside) !== Boolean(flipped)

  const speak = () => {
    if (!text.trim() || !lang) {
      return
    }

    const textToSpeak = new SpeechSynthesisUtterance(text)

    textToSpeak.lang = lang

    speechSynthesis.speak(textToSpeak)
  }

  return (
    <div
      className={`card-side ${isBackside ? 'back' : 'front'}`}
      style={{ fontSize: calculateFontSize(text.length) }}
    >
      <span>{text}</span>

      <button
        className="flip-button"
        onClick={toggleFlipped}
        disabled={disabled}
      />

      <button className="speaker-button" disabled={disabled} onClick={speak}>
        🔊
      </button>
    </div>
  )
}
