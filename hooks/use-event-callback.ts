import * as React from "react"

export function useEventCallback<Args extends unknown[], R>(fn: (...args: Args) => R): (...args: Args) => R {
  const ref = React.useRef<typeof fn>(() => {
    throw new Error("Cannot call an event handler while rendering.")
  })

  React.useInsertionEffect(() => {
    ref.current = fn
  }, [fn])

  return React.useCallback((...args: Args) => ref.current(...args), [])
}
