import { FC, useState, useEffect } from 'react'
import { getLanguages, SupportedLang } from '@langley/words'

import { LangsProps, SelectOption } from '../types'

export const Langs: FC<LangsProps> = ({
  nativeLang,
  targetLang,
  setNativeLang,
  setTargetLang,
}) => {
  const [supportedLanguages, setSupportedLanguages] = useState<SelectOption[]>(
    [],
  )

  useEffect(() => {
    getLanguages().then(result => {
      setSupportedLanguages(
        Object.entries(result).map(([value, text]) => ({
          text,
          value,
        })),
      )
    })
  }, [])

  return (
    <>
      <label>
        <span>Your language</span>

        <select
          name="your-language"
          value={nativeLang}
          disabled={!supportedLanguages.length}
          onChange={e => setNativeLang(e.target.value as SupportedLang)}
        >
          <option value="" disabled hidden>
            Select language
          </option>

          {supportedLanguages.map(lang => (
            <option
              key={lang.value}
              value={lang.value}
              disabled={lang.value === targetLang}
            >
              {lang.text}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>Target language</span>

        <select
          name="target-language"
          value={targetLang}
          disabled={!supportedLanguages.length}
          onChange={e => setTargetLang(e.target.value as SupportedLang)}
        >
          <option value="" disabled hidden>
            Select language
          </option>

          {supportedLanguages.map(lang => (
            <option
              key={lang.value}
              value={lang.value}
              disabled={lang.value === nativeLang}
            >
              {lang.text}
            </option>
          ))}
        </select>
      </label>
    </>
  )
}
