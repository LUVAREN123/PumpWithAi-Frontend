import { useRef, useState } from 'react'

import './styles.css'

export default function Checkbox({
    name,
    label,
    ...rest
}: {
    name: string,
    label: string
}) {
    const checkbox = useRef<HTMLInputElement>(null)
    const [checked, setChecked] = useState<boolean>(false)

    return (
        <div className="checkbox-container">
            <div className="checkbox" data-checked={checkbox.current?.checked}>
                <input
                    type="checkbox"
                    ref={checkbox}
                    id={name}
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    {...rest}
                />
                <div className="checkbox-marker"></div>
            </div>
            <label htmlFor={name} className='checkbox-label'>{label}</label>
        </div>
    )
}
