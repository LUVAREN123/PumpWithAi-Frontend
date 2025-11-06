import { useState, type HTMLInputTypeAttribute } from 'react'

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
  const [passVisible, setPassVisible] = useState<number>(0)

  return (
    <div className="field">
      <label className="field-label" htmlFor={name}>{label}</label>
      <div
        className="field-input"
        style={{
          backgroundColor: background,
          borderColor: border
        }}
      >
        {
          type == "long"
            ?
          <textarea
            placeholder={placeholder}
            disabled={disabled}
            id={name}
            {...rest}
          />
            :
          type == "password"
            ?
          <>
            <input
              type={passVisible ? type : 'text'}
              placeholder={placeholder}
              disabled={disabled}
              id={name}
              {...rest}
            />
            <button
              onClick={(e) => {
                setPassVisible(prev => prev ^ 1)
                e.currentTarget.blur()
              }}
              style={{
                height: "1rem",
                aspectRatio: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <span className="material-symbols-rounded" style={{ fontSize: "1.25rem" }}>{passVisible ? "visibility" : "visibility_off"}</span>
            </button>
          </>
            :
          <input
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            id={name}
            {...rest}
          />
        }
      </div>
      {error && <div className='field-error'>{error.message}</div>}
    </div>
  )
}
