import * as React from "react"

export interface CountdownOptions {
  countStart: number
  intervalMs?: number
  isIncrement?: boolean
  countStop?: number
}

export function useCountdown({
  countStart,
  intervalMs = 1000,
  isIncrement = false,
  countStop = 0,
}: CountdownOptions) {
  const [count, setCount] = React.useState(countStart)
  const [isCounting, setIsCounting] = React.useState(false)

  const startCountdown = React.useCallback(() => setIsCounting(true), [])
  const stopCountdown = React.useCallback(() => setIsCounting(false), [])
  const resetCountdown = React.useCallback(() => {
    setIsCounting(false)
    setCount(countStart)
  }, [countStart])

  React.useEffect(() => {
    if (!isCounting) return

    const interval = setInterval(() => {
      setCount((prev) => {
        if (isIncrement) {
          if (countStop !== undefined && prev >= countStop) {
            setIsCounting(false)
            return prev
          }
          return prev + 1
        } else {
          if (countStop !== undefined && prev <= countStop) {
            setIsCounting(false)
            return prev
          }
          return prev - 1
        }
      })
    }, intervalMs)

    return () => clearInterval(interval)
  }, [isCounting, intervalMs, isIncrement, countStop])

  return [count, { startCountdown, stopCountdown, resetCountdown }] as const
}
