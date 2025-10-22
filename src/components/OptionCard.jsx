import { motion } from 'framer-motion'

const OptionCard = ({ icon, title, description, selected, onClick, price }) => {
  return (
    <motion.div
      onClick={onClick}
      className={`relative cursor-pointer rounded-lg p-4 border-2 transition-all ${
        selected
          ? 'shadow-lg border-gray-300'
          : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
      }`}
      style={selected ? { backgroundColor: '#FF00A7' } : {}}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {selected && (
        <motion.div
          className="absolute -top-2 -right-2 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
          style={{ backgroundColor: '#FF00A7', color: '#4a5568', fontWeight: 'bold', border: '2px solid #4a5568' }}
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



