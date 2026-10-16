import * as React from "react"
import { cn } from "@/lib/utils"

export interface AIResponseProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string
  isStreaming?: boolean
}

export function AIResponse({ content, isStreaming = false, className, ...props }: AIResponseProps) {
  return (
    <div className={cn("prose prose-sm dark:prose-invert max-w-none leading-relaxed", className)} {...props}>
      <div className="whitespace-pre-wrap">{content}</div>
      {isStreaming && (
        <span className="inline-block h-4 w-1 animate-pulse bg-primary align-middle" />
      )}
    </div>
  )
}
