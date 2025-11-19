import React, { useEffect, useState } from 'react'
import Loader from '../Loader'

export default function GlobalImagePreloader({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState<boolean>(false)

  useEffect(() => {
    const seen = new Set<string>()
    let total = 0
    let loaded = 0

    const checkDone = () => {
      if (total > 0 && loaded >= total) {
        setReady(true)
      }
    }

    const preloadImage = (src: string) => {
      if (!src || seen.has(src)) return
      seen.add(src)
      total++

      const img = new Image()
      img.src = src

      if (img.complete) {
        loaded++
        checkDone()
      } else {
        img.onload = img.onerror = () => {
          loaded++
          checkDone()
        }
      }
    }

    const preloadExisting = () => {
      document.querySelectorAll<HTMLImageElement>('img').forEach(img => preloadImage(img.src))
    }

    const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach(node => {
          if (node instanceof HTMLImageElement) {
            preloadImage(node.src)
          } else if (node instanceof HTMLElement) {
            node.querySelectorAll<HTMLImageElement>('img').forEach(img => preloadImage(img.src))
          }
        })
      }
    })

    preloadExisting()
    observer.observe(document.body, { childList: true, subtree: true })

    const timeout = setTimeout(() => {
      if (!ready) setReady(true)
    }, 5000)

    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      {
        !ready
          &&
        <div
          className="loader-overlay"
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "var(--bg-clr-1)",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999
          }}
        >
          <Loader />
        </div>
      }
      {ready && children}
    </>
  )
}
