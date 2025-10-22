import { motion } from 'framer-motion'
import { FaCheck, FaTimes, FaRocket, FaStar, FaCrown } from 'react-icons/fa'

const PackageComparison = () => {
  const packages = [
    {
      name: 'Starter',
      icon: <FaRocket />,
      price: '990€',
      color: 'from-blue-500 to-blue-600',
      description: 'Idéal pour débuter',
      features: [
        { text: 'Landing page moderne', included: true },
        { text: 'Design template adapté', included: true },
        { text: 'Responsive mobile', included: true },
        { text: 'Formulaire de contact', included: true },
        { text: 'Hébergement 1 an offert', included: false },
        { text: 'SEO avancé', included: false },
        { text: 'Blog intégré', included: false },
        { text: 'Support prioritaire', included: false }
      ]
    },
    {
      name: 'Business',
      icon: <FaStar />,
      price: '2 990€',
      color: 'from-purple-500 to-purple-600',
      description: 'Le plus populaire',
      popular: true,
      features: [
        { text: 'Site vitrine complet', included: true },
        { text: 'Design sur mesure', included: true },
        { text: 'Responsive mobile', included: true },
        { text: 'Formulaire de contact', included: true },
        { text: 'Hébergement 1 an offert', included: true },
        { text: 'SEO avancé', included: true },
        { text: 'Blog intégré', included: true },
        { text: 'Support prioritaire', included: false }
      ]
    },
    {
      name: 'Premium',
      icon: <FaCrown />,
      price: 'Sur mesure',
      color: 'from-amber-500 to-amber-600',
      description: 'Solution complète',
      features: [
        { text: 'Site sur mesure illimité', included: true },
        { text: 'Design 100% personnalisé', included: true },
        { text: 'Responsive mobile', included: true },
        { text: 'Formulaire de contact', included: true },
        { text: 'Hébergement 1 an offert', included: true },
        { text: 'SEO avancé', included: true },
        { text: 'Blog intégré', included: true },
        { text: 'Support prioritaire 24/7', included: true }
      ]
    }
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 mt-8">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-gray-800 mb-3">
          📦 Nos formules
        </h3>
        <p className="text-gray-600 text-lg">Choisissez la formule qui correspond à vos besoins</p>
        <p className="text-sm text-gray-500 mt-2">Ou utilisez le simulateur pour une estimation personnalisée</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
              pkg.popular ? 'ring-4 ring-purple-500 scale-105' : ''
            }`}
          >
            {pkg.popular && (
              <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                ⭐ POPULAIRE
              </div>
            )}

            <div className={`bg-gradient-to-r ${pkg.color} p-6 text-white`}>
              <div className="text-4xl mb-3">{pkg.icon}</div>
              <h4 className="text-2xl font-bold mb-2">{pkg.name}</h4>
              <p className="text-sm opacity-90 mb-4">{pkg.description}</p>
              <div className="text-4xl font-bold">{pkg.price}</div>
              {pkg.price !== 'Sur mesure' && (
                <div className="text-sm opacity-75">HT, paiement unique</div>
              )}
            </div>

            <div className="p-6">
              <ul className="space-y-3">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    ) : (
                      <FaTimes className="text-gray-300 mt-1 flex-shrink-0" />
                    )}
                    <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full mt-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Choisir {pkg.name}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600 mb-4">💡 Besoin d'une solution personnalisée ?</p>
        <p className="text-sm text-gray-500">
          Utilisez notre simulateur ci-dessus pour obtenir un devis adapté à vos besoins spécifiques
        </p>
      </div>
    </div>
  )
}

export default PackageComparison


