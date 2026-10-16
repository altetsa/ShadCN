import * as React from "react"
import { Laptop, Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

export type Theme = "light" | "dark" | "system"

export function ThemeSwitcher({ className }: { className?: string }) {
  const [theme, setTheme] = React.useState<Theme>("system")

  const handleSelect = (t: Theme) => {
    setTheme(t)
    const root = document.documentElement
    if (t === "dark") {
      root.classList.add("dark")
    } else if (t === "light") {
      root.classList.remove("dark")
    } else {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      root.classList.toggle("dark", isDark)
    }
  }

  return (
    <div className={cn("inline-flex items-center rounded-full border bg-muted/40 p-0.5", className)}>
      <button
        onClick={() => handleSelect("light")}
        className={cn("rounded-full p-1.5 text-muted-foreground transition-colors hover:text-foreground", theme === "light" && "bg-background text-foreground shadow-xs")}
      >
        <Sun className="h-3.5 w-3.5" />
        <span className="sr-only">Light</span>
      </button>
      <button
        onClick={() => handleSelect("dark")}
        className={cn("rounded-full p-1.5 text-muted-foreground transition-colors hover:text-foreground", theme === "dark" && "bg-background text-foreground shadow-xs")}
      >
        <Moon className="h-3.5 w-3.5" />
        <span className="sr-only">Dark</span>
      </button>
      <button
        onClick={() => handleSelect("system")}
        className={cn("rounded-full p-1.5 text-muted-foreground transition-colors hover:text-foreground", theme === "system" && "bg-background text-foreground shadow-xs")}
      >
        <Laptop className="h-3.5 w-3.5" />
        <span className="sr-only">System</span>
      </button>
    </div>
  )
}
