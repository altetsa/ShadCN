import * as React from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface TextRevealButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  defaultText: string
  revealedText: string
}

export function TextRevealButton({
  defaultText,
  revealedText,
  className,
  ...props
}: TextRevealButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-primary px-5 py-2 text-xs font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground",
        className
      )}
      {...props}
    >
      <span className="inline-flex items-center gap-1.5 transition-transform duration-300 group-hover:-translate-y-10">
        {defaultText}
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
      <span className="absolute inline-flex items-center gap-1.5 translate-y-10 transition-transform duration-300 group-hover:translate-y-0">
        {revealedText}
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </button>
  )
}
