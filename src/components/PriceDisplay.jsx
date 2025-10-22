import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaEuroSign } from 'react-icons/fa'

const PriceDisplay = ({ formData }) => {
  const [fixedPrice, setFixedPrice] = useState(0)
  const [previousFixed, setPreviousFixed] = useState(0)

  useEffect(() => {
    let basePrice = 500 // Forfait de base
    let additionalCosts = 0
    
    // Type de projet
    if (formData.projectType === 'refonte') {
      additionalCosts += 300
    } else if (formData.projectType === 'creation') {
      additionalCosts += 500
    }

    // Logo
    if (formData.logo === 'modernize') {
      additionalCosts += 500
    } else if (formData.logo === 'custom') {
      additionalCosts += 750
    }

    // Palette de couleurs
    if (formData.colorPalette === 'simple') {
      additionalCosts += 200
    } else if (formData.colorPalette === 'complete') {
      additionalCosts += 350
    }

    // Typographies
    if (formData.typography === 'simple') {
      additionalCosts += 150
    } else if (formData.typography === 'complete') {
      additionalCosts += 250
    }

    // Iconographie
    if (formData.iconography === 'few') {
      additionalCosts += 150
    } else if (formData.iconography === 'medium') {
      additionalCosts += 300
    } else if (formData.iconography === 'complete') {
      additionalCosts += 800
    }

    // Images
    if (formData.images === 'web') {
      additionalCosts += 150
    } else if (formData.images === 'complete') {
      additionalCosts += 300
    }

    // Charte graphique
    if (formData.charteGraphique === 'complete') {
      additionalCosts += 500
    }

    // Livrables
    if (formData.deliverables === 'yes') {
      additionalCosts += 500
    }

    // Appliquer le multiplicateur selon le type de client
    if (formData.clientType === 'pme') {
      additionalCosts *= 2 // +100% sur tous les éléments
    }

    const fixed = basePrice + additionalCosts

    setPreviousFixed(fixedPrice)
    setFixedPrice(fixed)
  }, [formData, fixedPrice])

  const fixedDiff = fixedPrice - previousFixed

  return (
    <motion.div
      className="mt-4 rounded-lg shadow-md p-3 text-white border-2 border-gray-200"
      style={{ backgroundColor: '#FF00A7' }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold">Estimation totale</div>
        <div className="flex items-baseline gap-2">
          <motion.div
            className="text-xl font-bold"
            key={`fixed-${fixedPrice}`}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {fixedPrice.toLocaleString('fr-FR')}
          </motion.div>
          <span className="text-sm">€</span>
          {fixedDiff !== 0 && fixedPrice !== 0 && (
            <motion.div
              className="text-xs text-white/90 ml-1"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
            >
              ({fixedDiff > 0 ? '+' : ''}{fixedDiff.toLocaleString('fr-FR')} €)
            </motion.div>
          )}
        </div>
      </div>
      <div className="text-xs mt-1 text-white/70 text-right">
        Prix indicatif HT
      </div>
    </motion.div>
  )
}

export default PriceDisplay

