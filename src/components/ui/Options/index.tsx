import React from 'react'

import './styles.css'

export default function Options({
    options,
    labels,
    value,
    onChange
}: {
    options: string[]
    labels: Record<string, string>,
    value: string[]
    onChange: (next: string[]) => void
}) {

    function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, option: string) {
        e.currentTarget.blur()
        
        const isActive = value.includes(option)

        if (isActive) {
            onChange(value.filter(o => o !== option))
        } else {
            onChange([...value, option])
        }
    }

  return (
    <div className="options" style={{ "--n": options.length } as React.CSSProperties}>
        {options.map((option, idx) => (
            <button
                key={idx}
                className="option"
                data-active={value.includes(option)}
                onClick={(e) => handleClick(e, option)}
            >
                {labels[option]}
            </button>
        ))}
    </div>
  )
}
