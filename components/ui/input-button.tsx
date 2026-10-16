import * as React from "react"
import { ArrowRight, Search } from "lucide-react"
import { cn } from "@/lib/utils"

export interface InputButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string
  onSubmitValue?: (val: string) => void
}

export function InputButton({
  placeholder = "Search anything...",
  onSubmitValue,
  className,
  ...props
}: InputButtonProps) {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [value, setValue] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleExpand = () => {
    setIsExpanded(true)
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.trim()) {
      onSubmitValue?.(value.trim())
    }
  }

  return (
    <div className={cn("relative inline-flex items-center", className)} {...props}>
      {!isExpanded ? (
        <button
          onClick={handleExpand}
          className="inline-flex h-9 items-center gap-2 rounded-full border bg-background px-4 text-xs font-medium text-muted-foreground shadow-xs transition-all hover:border-primary hover:text-foreground"
        >
          <Search className="h-3.5 w-3.5" />
          <span>{placeholder}</span>
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => !value && setIsExpanded(false)}
            placeholder={placeholder}
            className="h-9 w-64 rounded-full border bg-background pl-8 pr-8 text-xs outline-none ring-1 ring-primary transition-all shadow-sm"
          />
          <Search className="absolute left-2.5 h-3.5 w-3.5 text-muted-foreground" />
          <button type="submit" className="absolute right-2 p-1 text-muted-foreground hover:text-foreground">
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </form>
      )}
    </div>
  )
}
