import { useEffect, useRef, useState } from 'react'
import './styles.css'
import { motion } from 'motion/react'

export default function Dropdown({
    width = 'full',
    options,
    labels,
    value,
    onChange
}: {
    width?: 'full' | 'short',
    options: readonly string[],
    labels: Record<string, string>,
    value: string,
    onChange: (value: string) => void
}) {
    const [open, setOpen] = useState<boolean>(false)
    const [direction, setDirection] = useState<'up' | 'down'>('down')
    const ref = useRef<HTMLDivElement>(null)

    const handleClick = (option: string) => {
        onChange(option)
        setOpen(false)
    }

    useEffect(() => {
        if (!open) return
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }
        window.addEventListener('mousedown', handleClickOutside)
        
        return () => window.removeEventListener('mousedown', handleClickOutside)
    }, [open])

    useEffect(() => {
        if (!open || !ref.current) return

        const rect = ref.current.getBoundingClientRect()
        const spaceBelow = window.innerHeight - rect.bottom
        const spaceAbove = rect.top

        const estimatedHeight = Math.min(options.length * 40, 250)

        setDirection(spaceBelow < estimatedHeight && spaceAbove > spaceBelow ? 'up' : 'down')
    }, [open, options.length])

  return (
    <div ref={ref} className="dropdown" data-width={width}>
        <button className="dropdown-box" onClick={() => setOpen(b => !b)}>
            <span className="dropdown-content">{labels[value]}</span>
            <span className="material-symbols-rounded">keyboard_arrow_down</span>
        </button>
        {open &&
            <motion.div
                className="dropdown-options"
                data-direction={direction}
                style={{ transformOrigin: `${direction == 'down' ? 'top' : 'bottom'} center` }}
                initial={{ opacity: 0, scaleY: 0.8 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0.8 }}
            >
                {options.map((option, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleClick(option)}
                        className='dropdown-option'
                    >
                        {labels[option]}
                    </button>
                ))}
            </motion.div>}
    </div>
  )
}
