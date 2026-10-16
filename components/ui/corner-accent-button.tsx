import * as React from "react"
import { cn } from "@/lib/utils"

export interface CornerAccentButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function CornerAccentButton({ children, className, ...props }: CornerAccentButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium transition-colors border border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
        className
      )}
      {...props}
    >
      <span className="absolute -top-1 -left-1 h-2 w-2 border-t-2 border-l-2 border-primary transition-all duration-300 group-hover:-top-1.5 group-hover:-left-1.5" />
      <span className="absolute -top-1 -right-1 h-2 w-2 border-t-2 border-r-2 border-primary transition-all duration-300 group-hover:-top-1.5 group-hover:-right-1.5" />
      <span className="absolute -bottom-1 -left-1 h-2 w-2 border-b-2 border-l-2 border-primary transition-all duration-300 group-hover:-bottom-1.5 group-hover:-left-1.5" />
      <span className="absolute -bottom-1 -right-1 h-2 w-2 border-b-2 border-r-2 border-primary transition-all duration-300 group-hover:-bottom-1.5 group-hover:-right-1.5" />
      {children}
    </button>
  )
}
