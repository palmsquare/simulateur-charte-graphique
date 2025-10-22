import { motion } from 'framer-motion'

const OptionCard = ({ icon, title, description, selected, onClick, price }) => {
  return (
    <motion.div
      onClick={onClick}
      className={`relative cursor-pointer rounded-lg p-4 border transition-all ${
        selected
          ? 'shadow-lg border-black bg-black text-white'
          : 'border-gray-300 bg-white hover:border-black hover:shadow-md'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {selected && (
        <motion.div
          className="absolute -top-2 -right-2 bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-sm border-2 border-white font-bold"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          ✓
        </motion.div>
      )}
      
      <h3 className={`font-bold text-base mb-1 ${selected ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
      {description && <p className={`text-xs mb-2 ${selected ? 'text-white/90' : 'text-gray-600'}`}>{description}</p>}
      {price && (
        <div className={`text-sm font-semibold ${selected ? 'text-white' : 'text-gray-700'}`}>
          {price}
        </div>
      )}
    </motion.div>
  )
}

export default OptionCard



