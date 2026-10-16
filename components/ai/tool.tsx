import * as React from "react"
import { ChevronDown, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export interface ToolCallProps extends React.HTMLAttributes<HTMLDivElement> {
  toolName: string
  parameters: Record<string, any>
  result?: any
  status?: "running" | "success" | "error"
}

export function ToolCall({
  toolName,
  parameters,
  result,
  status = "success",
  className,
  ...props
}: ToolCallProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={cn("my-2 overflow-hidden rounded-lg border bg-muted/30 text-xs font-mono", className)}
      {...props}
    >
      <CollapsibleTrigger asChild>
        <button className="flex w-full items-center justify-between p-2.5 text-left transition-colors hover:bg-muted/50">
          <div className="flex items-center gap-2">
            <Wrench className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="font-semibold text-foreground">{toolName}</span>
            <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-sans", 
              status === "running" && "bg-amber-500/10 text-amber-500",
              status === "success" && "bg-emerald-500/10 text-emerald-500",
              status === "error" && "bg-destructive/10 text-destructive"
            )}>
              {status}
            </span>
          </div>
          <ChevronDown className={cn("h-3.5 w-3.5 text-muted-foreground transition-transform", isOpen && "rotate-180")} />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="border-t bg-zinc-950 p-3 text-zinc-300">
        <div className="space-y-2">
          <div>
            <span className="text-[10px] uppercase text-zinc-500">Parameters</span>
            <pre className="mt-1 overflow-x-auto text-[11px]">{JSON.stringify(parameters, null, 2)}</pre>
          </div>
          {result !== undefined && (
            <div>
              <span className="text-[10px] uppercase text-zinc-500">Result</span>
              <pre className="mt-1 overflow-x-auto text-[11px]">{JSON.stringify(result, null, 2)}</pre>
            </div>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
