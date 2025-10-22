import { motion } from 'framer-motion'

const StepIndicator = ({ currentStep, totalSteps, steps, shouldSkipStep = () => false }) => {
  // Filter out skipped steps for display
  const visibleSteps = steps.filter((step, index) => !shouldSkipStep(index))
  
  // Find the current step index in the visible steps array
  const currentVisibleIndex = visibleSteps.findIndex(step => step.id === currentStep)
  
  return (
    <div className="flex items-center justify-center gap-2">
      {visibleSteps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <motion.div
            className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all ${
              index === currentVisibleIndex
                ? 'bg-white text-gray-800 scale-110 border-2 border-gray-400'
                : index < currentVisibleIndex
                ? 'bg-white text-gray-700 border-2 border-gray-300'
                : 'bg-white/50 text-gray-500 border-2 border-gray-300'
            }`}
            animate={{
              scale: index === currentVisibleIndex ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-xs font-bold">{index + 1}</span>
          </motion.div>
          {index < visibleSteps.length - 1 && (
            <div className={`w-8 h-1 mx-1 rounded ${
              index < currentVisibleIndex ? 'bg-white' : 'bg-white/50'
            }`} />
          )}
        </div>
      ))}
    </div>
  )
}

export default StepIndicator

