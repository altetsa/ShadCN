import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface CounterButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  min?: number
  max?: number
  onChange?: (val: number) => void
}

export function CounterButton({
  value: controlledValue,
  min = 0,
  max = 99,
  onChange,
  className,
  ...props
}: CounterButtonProps) {
  const [internalValue, setInternalValue] = React.useState(controlledValue ?? 0)
  const count = controlledValue !== undefined ? controlledValue : internalValue

  const update = (newVal: number) => {
    if (newVal >= min && newVal <= max) {
      setInternalValue(newVal)
      onChange?.(newVal)
    }
  }

  return (
    <div className={cn("inline-flex items-center rounded-lg border bg-background p-1 shadow-xs", className)} {...props}>
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7 rounded-md"
        disabled={count <= min}
        onClick={() => update(count - 1)}
      >
        <Minus className="h-3.5 w-3.5" />
      </Button>
      <span className="w-9 text-center text-sm font-semibold tabular-nums">{count}</span>
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7 rounded-md"
        disabled={count >= max}
        onClick={() => update(count + 1)}
      >
        <Plus className="h-3.5 w-3.5" />
      </Button>
    </div>
  )
}
