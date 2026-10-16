import * as React from "react"

export function useStep(maxStep: number) {
  const [currentStep, setCurrentStep] = React.useState(1)

  const canGoToNextStep = currentStep < maxStep
  const canGoToPrevStep = currentStep > 1

  const setStep = React.useCallback(
    (step: number | ((step: number) => number)) => {
      const newStep = step instanceof Function ? step(currentStep) : step
      if (newStep >= 1 && newStep <= maxStep) {
        setCurrentStep(newStep)
      }
    },
    [maxStep, currentStep]
  )

  const goToNextStep = React.useCallback(() => {
    if (canGoToNextStep) setCurrentStep((step) => step + 1)
  }, [canGoToNextStep])

  const goToPrevStep = React.useCallback(() => {
    if (canGoToPrevStep) setCurrentStep((step) => step - 1)
  }, [canGoToPrevStep])

  const reset = React.useCallback(() => setCurrentStep(1), [])

  return [
    currentStep,
    { goToNextStep, goToPrevStep, canGoToNextStep, canGoToPrevStep, setStep, reset },
  ] as const
}
