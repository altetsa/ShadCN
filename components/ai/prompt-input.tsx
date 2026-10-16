import * as React from "react"
import { ArrowUp, Paperclip, StopCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface PromptInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onSubmitPrompt?: (prompt: string) => void
  onStop?: () => void
  isLoading?: boolean
  modelSelector?: React.ReactNode
}

export function PromptInput({
  onSubmitPrompt,
  onStop,
  isLoading = false,
  modelSelector,
  placeholder = "Message AI...",
  className,
  ...props
}: PromptInputProps) {
  const [value, setValue] = React.useState("")
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    if (!value.trim() || isLoading) return
    onSubmitPrompt?.(value.trim())
    setValue("")
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
    }
  }

  return (
    <div className={cn("relative flex w-full flex-col rounded-2xl border bg-background p-2.5 shadow-sm focus-within:ring-1 focus-within:ring-ring", className)}>
      <textarea
        ref={textareaRef}
        rows={1}
        value={value}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full resize-none bg-transparent px-2 py-1 text-sm outline-none placeholder:text-muted-foreground"
        {...props}
      />
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-1.5">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
            <Paperclip className="h-4 w-4" />
            <span className="sr-only">Attach file</span>
          </Button>
          {modelSelector}
        </div>
        <div>
          {isLoading ? (
            <Button size="icon" variant="destructive" className="h-8 w-8 rounded-full" onClick={onStop}>
              <StopCircle className="h-4 w-4" />
              <span className="sr-only">Stop generating</span>
            </Button>
          ) : (
            <Button
              size="icon"
              className="h-8 w-8 rounded-full"
              disabled={!value.trim()}
              onClick={handleSubmit}
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
