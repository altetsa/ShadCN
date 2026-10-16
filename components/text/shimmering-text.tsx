import * as React from "react"
import { cn } from "@/lib/utils"

export interface ShimmeringTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
}

export function ShimmeringText({ text, className, ...props }: ShimmeringTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-[linear-gradient(110deg,#939393,45%,#1e2631,55%,#939393)] dark:bg-[linear-gradient(110deg,#666,45%,#fff,55%,#666)] bg-[length:200%_100%] bg-clip-text font-bold text-transparent animate-shimmer",
        className
      )}
      {...props}
    >
      {text}
    </span>
  )
}
