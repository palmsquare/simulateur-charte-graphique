import { motion } from 'framer-motion'
import { FaGlobe, FaBlog, FaCreditCard, FaEnvelope, FaCalendar, FaPlus } from 'react-icons/fa'

const Features = ({ formData, updateFormData }) => {
  const features = [
    { id: 'multilingual', icon: <FaGlobe />, title: 'Version multilingue', price: '+300 €' },
    { id: 'blog', icon: <FaBlog />, title: 'Blog', price: '+0 €' },
    { id: 'payment', icon: <FaCreditCard />, title: 'Paiement en ligne', price: '+150 €' },
    { id: 'newsletter', icon: <FaEnvelope />, title: 'Inscription à la newsletter', price: '+150 €' },
    { id: 'appointment', icon: <FaCalendar />, title: 'Prise de rendez-vous', price: '+50 €' },
  ]

  const toggleFeature = (featureId) => {
    const currentFeatures = formData.features || []
    if (currentFeatures.includes(featureId)) {
      updateFormData('features', currentFeatures.filter(f => f !== featureId))
    } else {
      updateFormData('features', [...currentFeatures, featureId])
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🔹 Fonctionnalités</h2>
        <p className="text-gray-600">Quelles fonctionnalités souhaitez-vous intégrer à votre site ?</p>
        <p className="text-sm text-gray-500 mt-1">Sélectionnez autant d'options que nécessaire</p>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            onClick={() => toggleFeature(feature.id)}
            className={`cursor-pointer rounded-xl p-4 border-2 transition-all ${
              formData.features?.includes(feature.id)
                ? 'border-gray-300'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
            style={formData.features?.includes(feature.id) ? { backgroundColor: '#FF00A7' } : {}}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <div className={`text-2xl ${
                formData.features?.includes(feature.id) ? 'text-white' : 'text-gray-400'
              }`}>
                {feature.icon}
              </div>
              <div className="flex-1">
                <h3 className={`font-semibold ${formData.features?.includes(feature.id) ? 'text-white' : 'text-gray-800'}`}>{feature.title}</h3>
                <p className={`text-sm font-medium ${formData.features?.includes(feature.id) ? 'text-white' : 'text-gray-700'}`}>{feature.price}</p>
              </div>
              {formData.features?.includes(feature.id) && (
                <div className="text-white text-xl font-bold">✓</div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          <FaPlus className="inline mr-2" />
          Autres fonctionnalités (à préciser)
        </label>
        <textarea
          value={formData.otherFeatures}
          onChange={(e) => updateFormData('otherFeatures', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none transition-all resize-none focus:border-gray-400"
          rows="3"
          placeholder="Décrivez vos besoins spécifiques..."
        />
      </div>
    </div>
  )
}

export default Features

