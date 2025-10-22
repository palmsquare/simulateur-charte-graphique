import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StepIndicator from './components/StepIndicator'
import ClientType from './components/steps/ClientType'
import ProjectType from './components/steps/ProjectType'
import Logo from './components/steps/Logo'
import ColorPalette from './components/steps/ColorPalette'
import Typography from './components/steps/Typography'
import Iconography from './components/steps/Iconography'
import Images from './components/steps/Images'
import CharteGraphique from './components/steps/CharteGraphique'
import Deliverables from './components/steps/Deliverables'
import Summary from './components/Summary'
import PriceDisplay from './components/PriceDisplay'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function App() {
  // Load saved data from localStorage on mount
  const loadSavedData = () => {
    try {
      const saved = localStorage.getItem('devisSimulatorData')
      if (saved) {
        return JSON.parse(saved)
      }
    } catch (error) {
      console.error('Error loading saved data:', error)
    }
    return {
      clientType: '',
      projectType: '',
      logo: '',
      colorPalette: '',
      typography: '',
      iconography: '',
      images: '',
      charteGraphique: '',
      deliverables: '',
      email: ''
    }
  }

  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState(loadSavedData())

  // Auto-save to localStorage whenever formData changes
  useEffect(() => {
    try {
      localStorage.setItem('devisSimulatorData', JSON.stringify(formData))
    } catch (error) {
      console.error('Error saving data:', error)
    }
  }, [formData])

  const steps = [
    { id: 0, title: 'Type de client', component: ClientType },
    { id: 1, title: 'Type de projet', component: ProjectType },
    { id: 2, title: 'Logo', component: Logo },
    { id: 3, title: 'Couleurs', component: ColorPalette },
    { id: 4, title: 'Typographies', component: Typography },
    { id: 5, title: 'Iconographie', component: Iconography },
    { id: 6, title: 'Images', component: Images },
    { id: 7, title: 'Charte', component: CharteGraphique },
    { id: 8, title: 'Livrables', component: Deliverables },
    { id: 9, title: 'Récapitulatif', component: Summary }
  ]

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const shouldSkipStep = (stepId) => {
    return false
  }

  const nextStep = () => {
    let nextStepIndex = currentStep + 1
    
    // Skip steps that are not applicable
    while (nextStepIndex < steps.length && shouldSkipStep(nextStepIndex)) {
      nextStepIndex++
    }
    
    if (nextStepIndex < steps.length) {
      setCurrentStep(nextStepIndex)
    }
  }

  const prevStep = () => {
    let prevStepIndex = currentStep - 1
    
    // Skip steps that are not applicable
    while (prevStepIndex >= 0 && shouldSkipStep(prevStepIndex)) {
      prevStepIndex--
    }
    
    if (prevStepIndex >= 0) {
      setCurrentStep(prevStepIndex)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.clientType
      case 1:
        return formData.projectType
      case 2:
        return formData.logo
      case 3:
        return formData.colorPalette
      case 4:
        return formData.typography
      case 5:
        return formData.iconography
      case 6:
        return formData.images
      case 7:
        return formData.charteGraphique
      case 8:
        return formData.deliverables
      default:
        return true
    }
  }

  const CurrentStepComponent = steps[currentStep].component

  return (
    <div className="min-h-screen bg-white py-4 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="p-4 bg-black">
            <h1 className="text-xl font-bold text-white text-center mb-3">
              Simulateur de Charte Graphique
            </h1>
            <StepIndicator 
              currentStep={currentStep} 
              totalSteps={steps.length} 
              steps={steps}
              shouldSkipStep={shouldSkipStep}
            />
          </div>

          <div className="p-4 min-h-[500px] flex flex-col">
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CurrentStepComponent 
                    formData={formData} 
                    updateFormData={updateFormData}
                    onNext={nextStep}
                    onBack={prevStep}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <PriceDisplay formData={formData} />

            {currentStep < steps.length - 1 && (
              <div className="flex justify-between mt-3 pt-3 border-t border-gray-200">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    currentStep === 0
                      ? 'bg-gray-100 text-gray-300 cursor-not-allowed border border-gray-200'
                      : 'bg-white text-black hover:bg-gray-50 hover:scale-105 border border-gray-300'
                  }`}
                >
                  <FaArrowLeft />
                  Précédent
                </button>

                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    !canProceed()
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-200'
                      : 'bg-black text-white hover:bg-gray-800 hover:scale-105'
                  }`}
                >
                  Suivant
                  <FaArrowRight />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
