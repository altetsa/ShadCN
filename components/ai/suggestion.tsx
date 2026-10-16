import * as React from "react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface SuggestionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  prompt: string
  onSelectPrompt?: (prompt: string) => void
}

export function Suggestion({
  prompt,
  onSelectPrompt,
  className,
  ...props
}: SuggestionProps) {
  return (
    <button
      onClick={() => onSelectPrompt?.(prompt)}
      className={cn(
        "group inline-flex items-center gap-1.5 rounded-full border bg-background px-3 py-1.5 text-xs text-muted-foreground shadow-xs transition-colors hover:border-primary/50 hover:bg-muted/50 hover:text-foreground",
        className
      )}
      {...props}
    >
      <span>{prompt}</span>
      <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </button>
  )
}
