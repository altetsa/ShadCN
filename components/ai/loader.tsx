import * as React from "react"
import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export interface AILoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
}

export function AILoader({ label = "Thinking...", className, ...props }: AILoaderProps) {
  return (
    <div className={cn("flex items-center gap-2.5 text-xs text-muted-foreground", className)} {...props}>
      <div className="relative flex h-4 w-4 items-center justify-center">
        <Sparkles className="h-3.5 w-3.5 animate-spin text-primary" style={{ animationDuration: "3s" }} />
      </div>
      <span className="font-medium animate-pulse">{label}</span>
    </div>
  )
}
