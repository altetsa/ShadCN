import * as React from "react"

export interface UseCounterReturn {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
  setCount: React.Dispatch<React.SetStateAction<number>>
}

export function useCounter(initialValue: number = 0): UseCounterReturn {
  const [count, setCount] = React.useState(initialValue)

  const increment = React.useCallback(() => setCount((x) => x + 1), [])
  const decrement = React.useCallback(() => setCount((x) => x - 1), [])
  const reset = React.useCallback(() => setCount(initialValue), [initialValue])

  return { count, increment, decrement, reset, setCount }
}
