import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sophie Martin',
      company: 'Boutique en ligne',
      text: 'Service impeccable ! Mon site e-commerce a été livré en temps et en heure avec un design moderne et intuitif.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Thomas Dubois',
      company: 'Restaurant Le Gourmet',
      text: 'Je suis très satisfait du résultat. L\'équipe a su comprendre mes besoins et proposer des solutions adaptées.',
      rating: 5,
      avatar: '👨‍🍳'
    },
    {
      name: 'Marie Leclerc',
      company: 'Cabinet d\'avocat',
      text: 'Professionnel, réactif et à l\'écoute. Le site correspond parfaitement à l\'image de mon cabinet.',
      rating: 5,
      avatar: '👩‍⚖️'
    }
  ]

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 mt-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          ⭐ Ce que disent nos clients
        </h3>
        <p className="text-gray-600">Plus de 100 clients satisfaits nous font confiance</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">{testimonial.avatar}</div>
              <div>
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>

            <div className="flex gap-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>

            <div className="relative">
              <FaQuoteLeft className="absolute -top-2 -left-1 text-indigo-200 text-2xl" />
              <p className="text-gray-700 pl-6 italic">{testimonial.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-8 mt-8 pt-6 border-t border-indigo-200">
        <div className="text-center">
          <div className="text-3xl font-bold text-indigo-600">100+</div>
          <div className="text-sm text-gray-600">Projets réalisés</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-indigo-600">98%</div>
          <div className="text-sm text-gray-600">Satisfaction client</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-indigo-600">5★</div>
          <div className="text-sm text-gray-600">Note moyenne</div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials


