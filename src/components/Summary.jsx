import { motion } from 'framer-motion'
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Summary = ({ formData, updateFormData, onBack }) => {
  const [submitted, setSubmitted] = useState(false)

  const calculateTotals = () => {
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

    return { fixed }
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.email || !formData.email.includes('@')) {
      toast.error('Veuillez entrer une adresse email valide')
      return
    }

    // Afficher un loader
    const loadingToast = toast.loading('Envoi en cours...')

    try {
      // Appeler l'API d'envoi d'email
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          formData: formData
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi')
      }

      toast.dismiss(loadingToast)
      toast.success('✉️ Email envoyé avec succès !', {
        duration: 3000,
        position: 'bottom-right',
      })
      
      setSubmitted(true)
    } catch (error) {
      toast.dismiss(loadingToast)
      toast.error('Erreur lors de l\'envoi. Veuillez réessayer.', {
        duration: 3000,
        position: 'bottom-right',
      })
      console.error('Error:', error)
    }
  }

  const getClientTypeLabel = () => {
    if (formData.clientType === 'independant') return 'Indépendant'
    if (formData.clientType === 'pme') return 'PME / Startup'
    return ''
  }

  const getProjectTypeLabel = () => {
    if (formData.projectType === 'refonte') return 'Refonte (+300 €)'
    if (formData.projectType === 'creation') return 'Création complète (+500 €)'
    return ''
  }

  const getLogoLabel = () => {
    if (formData.logo === 'existing') return 'J\'ai déjà un logo'
    if (formData.logo === 'modernize') return 'Moderniser le logo (+500 €)'
    if (formData.logo === 'custom') return 'Logo sur mesure (+750 €)'
    return ''
  }

  const getColorPaletteLabel = () => {
    if (formData.colorPalette === 'none') return 'J\'ai déjà mes couleurs'
    if (formData.colorPalette === 'simple') return 'Palette simple (+200 €)'
    if (formData.colorPalette === 'complete') return 'Palette complète (+350 €)'
    return ''
  }

  const getTypographyLabel = () => {
    if (formData.typography === 'none') return 'Je garde mes polices'
    if (formData.typography === 'simple') return 'Recommandation simple (+150 €)'
    if (formData.typography === 'complete') return 'Hiérarchie complète (+250 €)'
    return ''
  }

  const getIconographyLabel = () => {
    if (formData.iconography === 'none') return 'Aucun'
    if (formData.iconography === 'few') return '1 à 5 pictos (+150 €)'
    if (formData.iconography === 'medium') return '5 à 10 pictos (+300 €)'
    if (formData.iconography === 'complete') return 'Univers complet (+800 €)'
    return ''
  }

  const getImagesLabel = () => {
    if (formData.images === 'none') return 'Non'
    if (formData.images === 'web') return 'Sélection web/réseaux (+150 €)'
    if (formData.images === 'complete') return 'Banque complète (+300 €)'
    return ''
  }

  const getCharteLabel = () => {
    if (formData.charteGraphique === 'essential') return 'Version essentielle (8-12 pages)'
    if (formData.charteGraphique === 'complete') return 'Charte complète 25 pages (+500 €)'
    return ''
  }

  const getDeliverablesLabel = () => {
    if (formData.deliverables === 'none') return 'Non'
    if (formData.deliverables === 'yes') return 'Oui, kit complet (+500 €)'
    return ''
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
        >
          <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Merci !</h2>
        <p className="text-gray-600 mb-6">
          Votre demande a été enregistrée. Vous recevrez une estimation plus précise par email très prochainement.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-8 py-3 text-white rounded-lg font-semibold transition-all hover:scale-105 hover:opacity-90 shadow-lg"
          style={{ backgroundColor: '#FF00A7' }}
        >
          🔄 Recommencer
        </button>
      </motion.div>
    )
  }

  return (
    <>
      <Toaster />
      <div className="space-y-2 max-h-[400px] overflow-y-auto">
        <div className="text-center">
          <h2 className="text-base font-bold text-gray-800 mb-1">Récapitulatif</h2>
          <p className="text-xs text-gray-600">Entre ton email pour recevoir ton devis</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              placeholder="ton.email@exemple.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors text-xs"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-1 px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:scale-105 text-white hover:opacity-90 shadow-lg"
            style={{ backgroundColor: '#FF00A7' }}
          >
            <FaPaperPlane />
            Recevoir mon devis
          </button>
        </form>

        <button
          onClick={onBack}
          className="w-full px-4 py-1.5 bg-white text-black border border-gray-300 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-all hover:scale-105 flex items-center justify-center gap-1"
        >
          ← Retour
        </button>
      </div>
    </>
  )
}

export default Summary

