import * as React from "react"
import { cn } from "@/lib/utils"

export interface CountingNumberProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number
  duration?: number
}

export function CountingNumber({ value, duration = 1000, className, ...props }: CountingNumberProps) {
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    let startTimestamp: number | null = null
    const startValue = current

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCurrent(Math.floor(progress * (value - startValue) + startValue))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }, [value, duration])

  return (
    <span className={cn("tabular-nums font-bold tracking-tight", className)} {...props}>
      {current.toLocaleString()}
    </span>
  )
}
