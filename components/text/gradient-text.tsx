import * as React from "react"
import { cn } from "@/lib/utils"

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  from?: string
  to?: string
}

export function GradientText({
  children,
  from = "from-primary",
  to = "to-indigo-500",
  className,
  ...props
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent font-extrabold tracking-tight",
        from,
        to,
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
