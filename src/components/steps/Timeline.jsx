import { motion } from 'framer-motion'

const Timeline = ({ formData, updateFormData }) => {
  const timelines = [
    { id: 'urgent', label: 'Urgent (1-2 semaines)' },
    { id: 'standard', label: 'Standard (3-4 semaines)' },
    { id: 'flexible', label: 'Flexible (1-2 mois)' },
    { id: 'discuss', label: 'À discuter' }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">⏱️ Délais souhaités</h2>
        <p className="text-gray-600">Dans quel délai souhaitez-vous votre projet ?</p>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {timelines.map((timeline) => (
          <motion.button
            key={timeline.id}
            type="button"
            onClick={() => updateFormData('timeline', timeline.id)}
            className={`p-4 rounded-xl border-2 transition-all font-semibold text-center ${
              formData.timeline === timeline.id
                ? 'border-gray-300 text-white scale-105'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
            }`}
            style={formData.timeline === timeline.id ? { backgroundColor: '#FF00A7' } : {}}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {timeline.label}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default Timeline

