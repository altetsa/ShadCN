import * as React from "react"
import { ChevronDown, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export interface ReasoningProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  durationSeconds?: number
  defaultOpen?: boolean
}

export function Reasoning({
  children,
  durationSeconds,
  defaultOpen = false,
  className,
  ...props
}: ReasoningProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={cn("my-2 rounded-lg border border-dashed bg-muted/20 text-xs", className)}
      {...props}
    >
      <CollapsibleTrigger asChild>
        <button className="flex w-full items-center justify-between p-3 font-medium text-muted-foreground transition-colors hover:text-foreground">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-3.5 w-3.5 text-amber-500" />
            <span>Thought Process {durationSeconds ? `(${durationSeconds}s)` : ""}</span>
          </div>
          <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", isOpen && "rotate-180")} />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="border-t border-dashed px-3 py-2.5 leading-relaxed text-muted-foreground">
        {children}
      </CollapsibleContent>
    </Collapsible>
  )
}
