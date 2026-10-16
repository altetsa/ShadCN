import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export interface RatingButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  maxRating?: number
  value?: number
  onChange?: (val: number) => void
}

export function RatingButton({
  maxRating = 5,
  value = 0,
  onChange,
  className,
  ...props
}: RatingButtonProps) {
  const [hoverRating, setHoverRating] = React.useState<number | null>(null)

  return (
    <div className={cn("inline-flex items-center gap-1", className)} {...props}>
      {Array.from({ length: maxRating }).map((_, i) => {
        const ratingValue = i + 1
        const isFilled = (hoverRating !== null ? hoverRating : value) >= ratingValue

        return (
          <button
            key={i}
            type="button"
            onMouseEnter={() => setHoverRating(ratingValue)}
            onMouseLeave={() => setHoverRating(null)}
            onClick={() => onChange?.(ratingValue)}
            className="p-1 text-muted-foreground transition-transform hover:scale-125 focus:outline-none"
          >
            <Star
              className={cn(
                "h-5 w-5 transition-colors",
                isFilled ? "fill-amber-400 text-amber-400" : "text-muted"
              )}
            />
            <span className="sr-only">{ratingValue} stars</span>
          </button>
        )
      })}
    </div>
  )
}
