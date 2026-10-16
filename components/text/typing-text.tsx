import * as React from "react"
import { cn } from "@/lib/utils"

export interface TypingTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  speedMs?: number
}

export function TypingText({ text, speedMs = 50, className, ...props }: TypingTextProps) {
  const [displayed, setDisplayed] = React.useState("")

  React.useEffect(() => {
    let index = 0
    setDisplayed("")
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(index))
      index++
      if (index >= text.length) {
        clearInterval(interval)
      }
    }, speedMs)

    return () => clearInterval(interval)
  }, [text, speedMs])

  return (
    <span className={cn("font-medium tracking-tight", className)} {...props}>
      {displayed}
      <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-primary align-middle" />
    </span>
  )
}
