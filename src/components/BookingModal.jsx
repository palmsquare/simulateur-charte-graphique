import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaCalendarAlt, FaClock, FaUser, FaPhone, FaEnvelope, FaCheckCircle } from 'react-icons/fa'
import toast from 'react-hot-toast'

const BookingModal = ({ isOpen, onClose, formData }) => {
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    phone: formData.email || '',
    notes: ''
  })
  const [isBooked, setIsBooked] = useState(false)

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simulate booking
    const bookingInfo = {
      ...bookingData,
      clientName: `${formData.firstName} ${formData.lastName}`,
      clientEmail: formData.email,
      projectType: formData.projectType,
      websiteType: formData.websiteType
    }
    
    console.log('Rendez-vous pris:', bookingInfo)
    
    // Here you can integrate with a real booking system like Calendly, Google Calendar API, etc.
    // For now, we just show success
    
    toast.success('🎉 Rendez-vous confirmé !', {
      duration: 5000,
      position: 'top-center',
    })
    
    setIsBooked(true)
    
    // Close modal after 3 seconds
    setTimeout(() => {
      onClose()
      setIsBooked(false)
    }, 3000)
  }

  const getTomorrowDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {!isBooked ? (
              <>
                {/* Header */}
                <div className="p-6 relative" style={{ backgroundColor: '#FF00A7' }}>
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-all"
                  >
                    <FaTimes />
                  </button>
                  <h2 className="text-2xl font-bold text-white mb-2">📅 Prendre rendez-vous</h2>
                  <p className="text-white/90">Discutons ensemble de votre projet</p>
                </div>

                {/* Body */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  {/* Client info display */}
                  <div className="rounded-lg p-4 border-2 border-gray-200" style={{ backgroundColor: '#FF00A7' }}>
                    <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <FaUser /> Vos informations
                    </h3>
                    <p className="text-white text-sm">{formData.firstName} {formData.lastName}</p>
                    <p className="text-white/90 text-sm">{formData.email}</p>
                  </div>

                  {/* Date selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <FaCalendarAlt className="text-gray-700" />
                      Date souhaitée *
                    </label>
                    <input
                      type="date"
                      required
                      min={getTomorrowDate()}
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gray-400 outline-none transition-all"
                    />
                  </div>

                  {/* Time selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <FaClock className="text-gray-700" />
                      Créneau horaire *
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setBookingData({ ...bookingData, time })}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                            bookingData.time === time
                              ? 'text-white shadow-lg scale-105'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                          style={bookingData.time === time ? { backgroundColor: '#FF00A7' } : {}}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <FaPhone className="text-gray-700" />
                      Téléphone (optionnel)
                    </label>
                    <input
                      type="tel"
                      placeholder="06 12 34 56 78"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gray-400 outline-none transition-all"
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Notes supplémentaires
                    </label>
                    <textarea
                      placeholder="Points particuliers à aborder..."
                      value={bookingData.notes}
                      onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                      rows="3"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gray-400 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Info box */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-green-800">
                      ✅ Rendez-vous gratuit et sans engagement<br />
                      ⏱️ Durée : 30 minutes<br />
                      💻 En visio ou par téléphone
                    </p>
                  </div>

                  {/* Submit button */}
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      disabled={!bookingData.date || !bookingData.time}
                      className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                        bookingData.date && bookingData.time
                          ? 'text-white hover:opacity-80 hover:scale-105'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      style={bookingData.date && bookingData.time ? { backgroundColor: '#FF00A7' } : {}}
                    >
                      Confirmer le rendez-vous
                    </button>
                  </div>
                </form>
              </>
            ) : (
              // Success state
              <div className="p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <FaCheckCircle className="text-6xl mx-auto mb-4" style={{ color: '#FF00A7' }} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Rendez-vous confirmé !</h3>
                <p className="text-gray-600 mb-4">
                  Nous vous contacterons pour confirmer le rendez-vous
                </p>
                <div className="rounded-lg p-4 inline-block border-2 border-gray-200" style={{ backgroundColor: '#FF00A7' }}>
                  <p className="text-sm text-white font-semibold">
                    📅 {new Date(bookingData.date).toLocaleDateString('fr-FR', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}<br />
                    🕐 {bookingData.time}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default BookingModal

