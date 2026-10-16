import * as React from "react"

export function useIntersectionObserver(
  elementRef: React.RefObject<Element | null>,
  { threshold = 0, root = null, rootMargin = "0%" }: IntersectionObserverInit = {}
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = React.useState<IntersectionObserverEntry>()

  React.useEffect(() => {
    const node = elementRef?.current
    if (!node || typeof IntersectionObserver !== "function") return

    const observer = new IntersectionObserver(([entry]) => setEntry(entry), {
      threshold,
      root,
      rootMargin,
    })

    observer.observe(node)
    return () => observer.disconnect()
  }, [elementRef, threshold, root, rootMargin])

  return entry
}
