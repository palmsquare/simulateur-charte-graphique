import { motion } from 'framer-motion'

const StepIndicator = ({ currentStep, totalSteps, steps, shouldSkipStep = () => false }) => {
  // Filter out skipped steps for display
  const visibleSteps = steps.filter((step, index) => !shouldSkipStep(index))
  
  // Find the current step index in the visible steps array
  const currentVisibleIndex = visibleSteps.findIndex(step => step.id === currentStep)
  
  const progress = ((currentVisibleIndex + 1) / visibleSteps.length) * 100
  
  return (
    <div className="w-full">
      <div className="mb-2 text-center text-white text-sm font-medium">
        Étape {currentVisibleIndex + 1} sur {visibleSteps.length}
      </div>
      <div className="w-full bg-white/30 rounded-full h-2 overflow-hidden">
        <motion.div
          className="bg-white h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export default StepIndicator

