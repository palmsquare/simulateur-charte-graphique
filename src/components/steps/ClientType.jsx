import { motion } from 'framer-motion'
import OptionCard from '../OptionCard'

const ClientType = ({ formData, updateFormData, onNext }) => {
  const handleSelect = (value) => {
    updateFormData('clientType', value)
    setTimeout(() => onNext(), 300)
  }

  return (
    <div>
      <h2 className="text-lg font-bold mb-2 text-black">Ton profil</h2>
      <p className="text-sm text-gray-600 mb-3">Forfait de base : 500€</p>
      
      <div className="grid grid-cols-2 gap-3">
        <OptionCard
          title="Indépendant"
          selected={formData.clientType === 'independant'}
          onClick={() => handleSelect('independant')}
        />
        
        <OptionCard
          title="PME / Startup"
          selected={formData.clientType === 'pme'}
          onClick={() => handleSelect('pme')}
        />
      </div>
    </div>
  )
}

export default ClientType

