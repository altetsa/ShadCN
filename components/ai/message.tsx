import * as React from "react"
import { Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  role: "user" | "assistant" | "system"
  avatar?: React.ReactNode
  timestamp?: string
  children: React.ReactNode
  actions?: React.ReactNode
}

export function Message({
  role,
  avatar,
  timestamp,
  children,
  actions,
  className,
  ...props
}: MessageProps) {
  const isUser = role === "user"

  return (
    <div
      className={cn(
        "group flex w-full gap-3",
        isUser ? "flex-row-reverse" : "flex-row",
        className
      )}
      {...props}
    >
      <Avatar className={cn("h-8 w-8 shrink-0", isUser ? "bg-primary text-primary-foreground" : "bg-muted")}>
        {avatar ? (
          avatar
        ) : (
          <AvatarFallback className={isUser ? "bg-primary text-primary-foreground" : "bg-muted"}>
            {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
          </AvatarFallback>
        )}
      </Avatar>

      <div className={cn("flex max-w-[85%] flex-col gap-1.5", isUser ? "items-end" : "items-start")}>
        <div
          className={cn(
            "rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-xs",
            isUser
              ? "bg-primary text-primary-foreground"
              : "border bg-muted/30 text-foreground"
          )}
        >
          {children}
        </div>

        {(actions || timestamp) && (
          <div className="flex items-center gap-2 px-1 text-[11px] text-muted-foreground">
            {timestamp && <span>{timestamp}</span>}
            {actions}
          </div>
        )}
      </div>
    </div>
  )
}
