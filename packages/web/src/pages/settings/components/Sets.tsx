import { FC, useState, useEffect } from 'react'
import { getSetsForLangs } from '@langley/words'

import { SetsProps, SelectOption } from '../types'

export const Sets: FC<SetsProps> = ({
  nativeLang,
  targetLang,
  selectedSets,
  setSelectedSets,
}) => {
  const [sets, setSets] = useState<SelectOption[]>([])

  useEffect(() => {
    if (!nativeLang || !targetLang) {
      return
    }

    getSetsForLangs(nativeLang, targetLang).then(result => {
      setSets(result.map(({ id, name }) => ({ value: id, text: name })))
    })
  }, [nativeLang, targetLang])

  return (
    <>
      <label className="lang-select">
        <span>Available word sets</span>

        <select
          multiple
          name="sets"
          value={selectedSets}
          disabled={!sets.length}
          onChange={e =>
            setSelectedSets(
              Array.from(e.target.selectedOptions).map(({ value }) => value),
            )
          }
        >
          {sets.map(set => (
            <option value={set.value} key={set.value}>
              {set.text}
            </option>
          ))}
        </select>
      </label>
    </>
  )
}
