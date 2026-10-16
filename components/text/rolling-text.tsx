import * as React from "react"
import { cn } from "@/lib/utils"

export interface RollingTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
}

export function RollingText({ text, className, ...props }: RollingTextProps) {
  return (
    <span className={cn("inline-flex overflow-hidden font-bold leading-none", className)} {...props}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block transition-transform duration-300 hover:-translate-y-full"
        >
          <span className="block">{char === " " ? "\u00A0" : char}</span>
          <span className="block text-primary">{char === " " ? "\u00A0" : char}</span>
        </span>
      ))}
    </span>
  )
}
