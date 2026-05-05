import { FC } from 'react'

import { ControlsProps } from '../types'

export const Controls: FC<ControlsProps> = ({ handleCheck, handleCross }) => (
  <>
    <div className="controls">
      <button className="check" onClick={handleCheck}>
        ✓
      </button>

      <button className="cross" onClick={handleCross}>
        ×
      </button>
    </div>
  </>
)
