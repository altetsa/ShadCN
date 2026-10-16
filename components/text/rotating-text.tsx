import * as React from "react"
import { cn } from "@/lib/utils"

export interface RotatingTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  words: string[]
  intervalMs?: number
}

export function RotatingText({ words, intervalMs = 2500, className, ...props }: RotatingTextProps) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, intervalMs)
    return () => clearInterval(timer)
  }, [words, intervalMs])

  return (
    <span className={cn("relative inline-block font-extrabold text-primary transition-all duration-300", className)} {...props}>
      {words[index]}
    </span>
  )
}
