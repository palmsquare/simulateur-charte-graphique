import OptionCard from '../OptionCard'
import { FaPaintBrush, FaCubes } from 'react-icons/fa'

const DesignLevel = ({ formData, updateFormData }) => {
  const isLanding = formData.websiteType === 'landing'
  const customPrice = isLanding ? '+500 €' : '+1 500 €'
  const templatePrice = '+0 €'

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🔹 Niveau de design</h2>
        <p className="text-gray-600">Quel niveau de design souhaitez-vous ?</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <OptionCard
          icon={<FaCubes />}
          title="Design basique"
          description="Modèle existant adapté à votre image"
          selected={formData.designLevel === 'template'}
          onClick={() => updateFormData('designLevel', 'template')}
          price={templatePrice}
        />

        <OptionCard
          icon={<FaPaintBrush />}
          title="Design sur mesure"
          description="Maquette 100% personnalisée par nos soins"
          selected={formData.designLevel === 'custom'}
          onClick={() => updateFormData('designLevel', 'custom')}
          price={customPrice}
        />
      </div>
    </div>
  )
}

export default DesignLevel

