import * as React from "react"
import { cn } from "@/lib/utils"

export interface HighlightTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  color?: string
}

export function HighlightText({
  children,
  color = "bg-primary/20 text-primary",
  className,
  ...props
}: HighlightTextProps) {
  return (
    <span
      className={cn(
        "relative inline-block rounded-md px-1.5 py-0.5 font-semibold",
        color,
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
