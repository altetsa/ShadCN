import * as React from "react"
import { cn } from "@/lib/utils"

export interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function LiquidButton({ children, className, ...props }: LiquidButtonProps) {
  return (
    <button
      className={cn(
        "group relative overflow-hidden rounded-full border border-primary px-6 py-2.5 text-xs font-semibold text-primary transition-colors hover:text-primary-foreground",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 z-0 h-full w-full translate-y-full rounded-full bg-primary transition-transform duration-300 ease-out group-hover:translate-y-0" />
    </button>
  )
}
