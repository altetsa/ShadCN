import * as React from "react"
import { cn } from "@/lib/utils"

export interface SplittingTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
}

export function SplittingText({ text, className, ...props }: SplittingTextProps) {
  return (
    <span className={cn("inline-flex flex-wrap gap-x-1", className)} {...props}>
      {text.split(" ").map((word, wIdx) => (
        <span key={wIdx} className="inline-block">
          {word.split("").map((char, cIdx) => (
            <span
              key={cIdx}
              style={{ transitionDelay: `${(wIdx * 5 + cIdx) * 30}ms` }}
              className="inline-block transition-transform hover:-translate-y-1"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  )
}
