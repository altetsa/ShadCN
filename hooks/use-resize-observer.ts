import * as React from "react"

export interface Size {
  width: number | undefined
  height: number | undefined
}

export function useResizeObserver<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>
): Size {
  const [size, setSize] = React.useState<Size>({ width: undefined, height: undefined })

  React.useEffect(() => {
    const el = ref.current
    if (!el || typeof ResizeObserver === "undefined") return

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (entry) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        })
      }
    })

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])

  return size
}
