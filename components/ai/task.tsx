import * as React from "react"
import { CheckCircle2, Circle, Loader2, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export type TaskStatus = "pending" | "running" | "completed" | "error"

export interface TaskItem {
  id: string
  title: string
  status: TaskStatus
  detail?: string
}

export interface TaskListProps extends React.HTMLAttributes<HTMLDivElement> {
  tasks: TaskItem[]
}

export function TaskList({ tasks, className, ...props }: TaskListProps) {
  return (
    <div className={cn("space-y-2 rounded-xl border bg-muted/20 p-3", className)} {...props}>
      {tasks.map((task) => (
        <div key={task.id} className="flex items-start gap-2.5 text-xs">
          {task.status === "pending" && <Circle className="mt-0.5 h-3.5 w-3.5 text-muted-foreground" />}
          {task.status === "running" && <Loader2 className="mt-0.5 h-3.5 w-3.5 animate-spin text-primary" />}
          {task.status === "completed" && <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-500" />}
          {task.status === "error" && <XCircle className="mt-0.5 h-3.5 w-3.5 text-destructive" />}

          <div className="flex-1">
            <p className={cn("font-medium", task.status === "completed" && "text-muted-foreground line-through")}>
              {task.title}
            </p>
            {task.detail && <p className="text-[11px] text-muted-foreground">{task.detail}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}
