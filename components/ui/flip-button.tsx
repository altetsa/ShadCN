import * as React from "react"
import { cn } from "@/lib/utils"

export interface FlipButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  frontText: string
  backText: string
}

export function FlipButton({ frontText, backText, className, ...props }: FlipButtonProps) {
  return (
    <button
      className={cn(
        "group relative h-10 w-36 overflow-hidden rounded-lg font-medium [perspective:1000px]",
        className
      )}
      {...props}
    >
      <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-primary text-primary-foreground [backface-visibility:hidden]">
          {frontText}
        </div>
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-secondary text-secondary-foreground [backface-visibility:hidden] [transform:rotateX(180deg)]">
          {backText}
        </div>
      </div>
    </button>
  )
}
