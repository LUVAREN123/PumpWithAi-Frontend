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
            img.onload = img.onerror = () => {
                loaded++;
                checkDone()
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
        observer.observe(document.body, {
            childList: true,
            subtree: true
        })

        const timeout = setTimeout(() => {
            if (!ready) setReady(true)
        }, 5000);

        return () => {
            observer.disconnect()
            clearTimeout(timeout)
        }
    }, [ready])

    if (!ready) return <Loader />

    return (
        <>
            {children}
        </>
    )
}
