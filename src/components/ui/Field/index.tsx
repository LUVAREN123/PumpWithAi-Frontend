import type React from 'react'
import './styles.css'

export default function Field({
  placeholder,
  unit,
  type,
  value,
  onChange,
  disabled = false,
}: {
    placeholder: string,
    unit?: string,
    type: React.HTMLInputTypeAttribute,
    value?: string | number,
    onChange?: (value: string | number) => void
    disabled?: boolean
}) {
  return (
    <div className="field">
        {unit && <span className='field-unit' no-select="true">{unit}</span>}
        <input
          type={type}
          placeholder={placeholder}
          className="field-input"
          disabled={disabled}
          value={value ?? ""}
          onChange={(e) => onChange?.(e.target.value)}
        />
    </div>
  )
}