import { type HTMLInputTypeAttribute } from 'react'

import './styles.css'

type WritableFieldProperties = Extract<HTMLInputTypeAttribute, 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'> | 'long'

export default function Field({
    name,
    label,
    placeholder,
    type,
    error,
    disabled = false,
    background = "#131313",
    border = "#222222",
    ...rest
}: {
    name?: string,
    label: string,
    placeholder: string,
    type: WritableFieldProperties,
    error?: { message?: string },
    disabled?: boolean,
    background?: string,
    border?: string
}) {
  return (
    <div className="field">
      <label className="field-label" htmlFor={name}>{label}</label>
      {
        type == "long"
          ?
        <textarea
          placeholder={placeholder}
          className="field-input"
          disabled={disabled}
          id={name}
          style={{
            backgroundColor: background,
            borderColor: border
          }}
          {...rest}
        />
          :
        <input
          type={type}
          placeholder={placeholder}
          className="field-input"
          disabled={disabled}
          id={name}
          style={{
            backgroundColor: background,
            borderColor: border
          }}
          {...rest}
        />
      }
      {error && <div className='field-error'>{error.message}</div>}
    </div>
  )
}
