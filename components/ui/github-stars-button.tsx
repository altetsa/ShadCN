import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export interface GitHubStarsButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  repo: string
  stars?: number
}

export function GitHubStarsButton({
  repo,
  stars: initialStars,
  className,
  ...props
}: GitHubStarsButtonProps) {
  const [stars, setStars] = React.useState<number | null>(initialStars ?? null)

  React.useEffect(() => {
    if (initialStars !== undefined) return
    fetch(`https://api.github.com/repos/${repo}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count)
        }
      })
      .catch(() => {})
  }, [repo, initialStars])

  return (
    <a
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-xs font-semibold text-foreground shadow-xs transition-colors hover:bg-muted",
        className
      )}
      {...props}
    >
      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
      <span>Star on GitHub</span>
      {stars !== null && (
        <span className="rounded-full bg-muted px-1.5 py-0.5 text-[11px] font-mono text-muted-foreground">
          {stars.toLocaleString()}
        </span>
      )}
    </a>
  )
}
