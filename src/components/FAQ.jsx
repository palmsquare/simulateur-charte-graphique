import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Comment fonctionne le simulateur de devis ?',
      answer: 'Notre simulateur vous guide étape par étape pour définir vos besoins. En fonction de vos choix, le prix s\'ajuste automatiquement pour vous donner une estimation précise et transparente.'
    },
    {
      question: 'Le devis est-il définitif ?',
      answer: 'Le devis généré est une estimation indicative basée sur vos choix. Un devis définitif sera établi après un échange détaillé sur votre projet et vos besoins spécifiques.'
    },
    {
      question: 'Quels sont les délais de réalisation ?',
      answer: 'Les délais varient selon la complexité du projet : de 1-2 semaines pour un site simple à plusieurs mois pour un projet complexe. Vous pouvez indiquer vos contraintes de temps dans le simulateur.'
    },
    {
      question: 'Puis-je modifier mon site après la livraison ?',
      answer: 'Absolument ! Tous nos sites sont livrés avec une formation. Vous pouvez aussi souscrire à notre service de maintenance pour des modifications régulières.'
    },
    {
      question: 'Les prix incluent-ils l\'hébergement ?',
      answer: 'L\'hébergement est proposé en option dans les services additionnels. Nous offrons un hébergement performant et sécurisé à partir de 10€/mois.'
    },
    {
      question: 'Proposez-vous un suivi après la livraison ?',
      answer: 'Oui ! Nous proposons différents forfaits de maintenance et support technique. Nous restons disponibles pour vous accompagner dans la croissance de votre projet.'
    }
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
          <FaQuestionCircle className="text-blue-600" />
          Questions fréquentes
        </h3>
        <p className="text-gray-600">Tout ce que vous devez savoir sur nos services</p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex items-center justify-between p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-blue-600 flex-shrink-0" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 bg-white text-gray-700 border-t border-gray-200">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-3">Vous avez d'autres questions ?</p>
        <a
          href="mailto:contact@exemple.fr"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all hover:scale-105"
        >
          📧 Contactez-nous
        </a>
      </div>
    </div>
  )
}

export default FAQ


