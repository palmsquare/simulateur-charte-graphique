import { motion } from 'framer-motion'
import { FaShieldAlt, FaHeadset, FaClock, FaAward } from 'react-icons/fa'

const TrustBadges = () => {
  const badges = [
    {
      icon: <FaShieldAlt />,
      title: 'Paiement sécurisé',
      description: 'Vos données sont protégées'
    },
    {
      icon: <FaHeadset />,
      title: 'Support 7j/7',
      description: 'Une équipe à votre écoute'
    },
    {
      icon: <FaClock />,
      title: 'Livraison garantie',
      description: 'Respect des délais convenus'
    },
    {
      icon: <FaAward />,
      title: 'Qualité premium',
      description: 'Satisfaction garantie'
    }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="text-3xl text-blue-600 mb-2 flex justify-center">
            {badge.icon}
          </div>
          <h4 className="font-semibold text-gray-800 text-sm mb-1">{badge.title}</h4>
          <p className="text-xs text-gray-600">{badge.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default TrustBadges


