import * as React from "react"
import { cn } from "@/lib/utils"

export interface WritingTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
}

export function WritingText({ text, className, ...props }: WritingTextProps) {
  const words = text.split(" ")

  return (
    <span className={cn("inline-flex flex-wrap gap-x-1.5", className)} {...props}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ animationDelay: `${i * 120}ms` }}
          className="inline-block animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both"
        >
          {word}
        </span>
      ))}
    </span>
  )
}
