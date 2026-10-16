import * as React from "react"
import { cn } from "@/lib/utils"

export interface SlidingNumberProps extends React.HTMLAttributes<HTMLSpanElement> {
  number: number
}

export function SlidingNumber({ number, className, ...props }: SlidingNumberProps) {
  return (
    <span className={cn("inline-flex font-mono text-2xl font-bold tabular-nums", className)} {...props}>
      {String(number)
        .split("")
        .map((digit, i) => (
          <span key={i} className="inline-block transition-transform duration-300">
            {digit}
          </span>
        ))}
    </span>
  )
}
