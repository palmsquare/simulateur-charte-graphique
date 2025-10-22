import OptionCard from '../OptionCard'
import { FaGlobe, FaRocket } from 'react-icons/fa'

const WebsiteType = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🔹 Type de site souhaité</h2>
        <p className="text-gray-600">Quel type de site web souhaitez-vous créer ?</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <OptionCard
          icon={<FaGlobe />}
          title="Site vitrine"
          description="Site multi-pages pour présenter votre activité"
          selected={formData.websiteType === 'vitrine'}
          onClick={() => updateFormData('websiteType', 'vitrine')}
          price="2 490 €"
        />

        <OptionCard
          icon={<FaRocket />}
          title="Landing page"
          description="Page unique optimisée pour la conversion"
          selected={formData.websiteType === 'landing'}
          onClick={() => {
            updateFormData('websiteType', 'landing')
            updateFormData('pageCount', '')
          }}
          price="990 €"
        />
      </div>
    </div>
  )
}

export default WebsiteType

