import * as React from "react"

export function useHover<T extends HTMLElement = HTMLElement>(): [React.RefObject<T | null>, boolean] {
  const [value, setValue] = React.useState<boolean>(false)
  const ref = React.useRef<T | null>(null)

  const handleMouseEnter = () => setValue(true)
  const handleMouseLeave = () => setValue(false)

  React.useEffect(() => {
    const node = ref.current
    if (node) {
      node.addEventListener("mouseenter", handleMouseEnter)
      node.addEventListener("mouseleave", handleMouseLeave)
      return () => {
        node.removeEventListener("mouseenter", handleMouseEnter)
        node.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [ref.current])

  return [ref, value]
}
