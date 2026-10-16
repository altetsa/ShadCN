import * as React from "react"

export function useToggle(initialValue = false): [boolean, (value?: boolean) => void] {
  const [value, setValue] = React.useState(initialValue)

  const toggle = React.useCallback((nextValue?: boolean) => {
    if (typeof nextValue === "boolean") {
      setValue(nextValue)
    } else {
      setValue((current) => !current)
    }
  }, [])

  return [value, toggle]
}
