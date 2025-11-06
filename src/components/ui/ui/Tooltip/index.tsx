import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import './styles.css'
import getBestPosition from '../../../lib/getBestPosition'

type TooltipProps = {
  children: React.ReactNode
  text: string
  delay?: number
}

export default function Tooltip({ children, text, delay = 800 }: TooltipProps) {
  const [visible, setVisible] = useState(false)
  const [measuring, setMeasuring] = useState(false)
  const [coords, setCoords] = useState({ top: 0, left: 0 })

  const wrapper = useRef<HTMLDivElement>(null)
  const tooltip = useRef<HTMLDivElement>(null)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current)
        timeout.current = null
      }
    }
  }, [])

  const showTooltip = () => {
    timeout.current = setTimeout(() => {
      setMeasuring(true)
    }, delay)
  }

  useEffect(() => {
    if (measuring && wrapper.current && tooltip.current) {
      const rect = wrapper.current.getBoundingClientRect()
      const { width, height } = tooltip.current.getBoundingClientRect()
      const { top, left } = getBestPosition(rect, width, height)
      
      setCoords({ top, left })
      setVisible(true)
      setMeasuring(false)
    }
  }, [measuring])

  const hideTooltip = () => {
    if (timeout.current) {
      clearTimeout(timeout.current)
      timeout.current = null
    }
    setVisible(false)
    setMeasuring(false)
  }

  return (
    <div
      className="tooltip-wrapper"
      ref={wrapper}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      aria-label={text}
    >
      {children}
      {(visible || measuring) &&
        createPortal(
          <div
            ref={tooltip}
            className="tooltip-bubble"
            style={{
              top: coords.top,
              left: coords.left,
              position: 'fixed',
              visibility: visible ? 'visible' : 'hidden',
              pointerEvents: 'none'
            }}
            role="tooltip"
          >
            {text}
          </div>,
          document.body
        )}
    </div>
  )
}