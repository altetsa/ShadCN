import * as React from "react"

export function useClickAnyWhere(handler: (event: MouseEvent) => void) {
  React.useEffect(() => {
    const listener = (event: MouseEvent) => {
      handler(event)
    }
    document.addEventListener("mousedown", listener)
    return () => {
      document.removeEventListener("mousedown", listener)
    }
  }, [handler])
}
