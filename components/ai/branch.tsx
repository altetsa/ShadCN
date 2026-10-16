import * as React from "react"
import { ChevronLeft, ChevronRight, GitBranch } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface BranchProps extends React.HTMLAttributes<HTMLDivElement> {
  currentBranch: number
  totalBranches: number
  onPrevious: () => void
  onNext: () => void
}

export function Branch({
  currentBranch,
  totalBranches,
  onPrevious,
  onNext,
  className,
  ...props
}: BranchProps) {
  if (totalBranches <= 1) return null

  return (
    <div className={cn("inline-flex items-center gap-1.5 rounded-full border bg-muted/40 px-2 py-0.5 text-xs text-muted-foreground", className)} {...props}>
      <GitBranch className="h-3 w-3" />
      <span>{currentBranch} / {totalBranches}</span>
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="h-5 w-5 rounded-full"
          disabled={currentBranch <= 1}
          onClick={onPrevious}
        >
          <ChevronLeft className="h-3 w-3" />
          <span className="sr-only">Previous variation</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-5 w-5 rounded-full"
          disabled={currentBranch >= totalBranches}
          onClick={onNext}
        >
          <ChevronRight className="h-3 w-3" />
          <span className="sr-only">Next variation</span>
        </Button>
      </div>
    </div>
  )
}
