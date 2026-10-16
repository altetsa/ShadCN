import * as React from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
}

export function CodeBlock({
  code,
  language = "typescript",
  filename,
  showLineNumbers = false,
  className,
  ...props
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.trim().split("\n")

  return (
    <div className={cn("relative my-4 overflow-hidden rounded-lg border bg-zinc-950 font-mono text-xs text-zinc-50 shadow-sm", className)} {...props}>
      <div className="flex h-9 items-center justify-between border-b border-zinc-800 bg-zinc-900/60 px-4">
        <div className="flex items-center gap-2 text-zinc-400">
          <span className="font-sans text-xs font-medium uppercase tracking-wider">{filename || language}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
          onClick={handleCopy}
        >
          {copied ? <Check className="mr-1.5 h-3.5 w-3.5 text-emerald-400" /> : <Copy className="mr-1.5 h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy code"}
        </Button>
      </div>
      <div className="overflow-x-auto p-4 leading-relaxed">
        <pre className="grid">
          {showLineNumbers ? (
            lines.map((line, idx) => (
              <div key={idx} className="table-row">
                <span className="table-cell select-none pr-4 text-right text-zinc-600">{idx + 1}</span>
                <span className="table-cell">{line}</span>
              </div>
            ))
          ) : (
            <code>{code.trim()}</code>
          )}
        </pre>
      </div>
    </div>
  )
}
