import { motion } from 'framer-motion'
import { 
  FaPalette, 
  FaImage, 
  FaPen, 
  FaTools, 
  FaCog, 
  FaServer, 
  FaGlobe, 
  FaSearch, 
  FaBullhorn 
} from 'react-icons/fa'

const AdditionalServices = ({ formData, updateFormData }) => {
  const services = [
    { id: 'charte', icon: <FaPalette />, title: 'Création d\'une nouvelle charte graphique', price: '+500 €' },
    { id: 'logo', icon: <FaImage />, title: 'Création de logo', price: '+500 €' },
    { id: 'content', icon: <FaPen />, title: 'Aide à la rédaction de contenu', price: '+300 €' },
    { id: 'maintenance', icon: <FaTools />, title: 'Maintenance du site', price: '+50 €/mois' },
    { id: 'tma', icon: <FaCog />, title: 'Gestion du site après mise en ligne (TMA)', price: '+70 €/mois' },
    { id: 'hosting', icon: <FaServer />, title: 'Hébergement web', price: '+10 €/mois' },
    { id: 'domain', icon: <FaGlobe />, title: 'Nom de domaine', price: '+10 €' },
    { id: 'seo', icon: <FaSearch />, title: 'Accompagnement SEO', price: '+1 200 €/mois' },
    { id: 'ads', icon: <FaBullhorn />, title: 'Publicité en ligne (ADS)', price: '+500 €/mois' },
  ]

  const toggleService = (serviceId) => {
    const currentServices = formData.additionalServices || []
    if (currentServices.includes(serviceId)) {
      updateFormData('additionalServices', currentServices.filter(s => s !== serviceId))
    } else {
      updateFormData('additionalServices', [...currentServices, serviceId])
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🔹 Besoins complémentaires</h2>
        <p className="text-gray-600">Souhaitez-vous que nous vous accompagnions sur d'autres aspects ?</p>
        <p className="text-sm text-gray-500 mt-1">Sélectionnez autant d'options que nécessaire</p>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {services.map((service) => (
          <motion.div
            key={service.id}
            onClick={() => toggleService(service.id)}
            className={`cursor-pointer rounded-xl p-4 border-2 transition-all ${
              formData.additionalServices?.includes(service.id)
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 bg-white hover:border-green-300'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start gap-3">
              <div className={`text-2xl mt-1 ${
                formData.additionalServices?.includes(service.id) ? 'text-green-600' : 'text-gray-400'
              }`}>
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-sm">{service.title}</h3>
                <p className="text-sm text-green-600 font-medium mt-1">{service.price}</p>
              </div>
              {formData.additionalServices?.includes(service.id) && (
                <div className="text-green-500 text-xl">✓</div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AdditionalServices






