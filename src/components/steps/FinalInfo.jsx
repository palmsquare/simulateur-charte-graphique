import { FaCommentDots } from 'react-icons/fa'

const FinalInfo = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🔹 Informations supplémentaires</h2>
        <p className="text-gray-600">Souhaitez-vous nous en dire plus sur votre projet ?</p>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          <FaCommentDots className="inline mr-2" />
          Parlez-nous de votre projet
        </label>
        <textarea
          value={formData.additionalInfo}
          onChange={(e) => updateFormData('additionalInfo', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
          rows="6"
          placeholder="Décrivez votre vision, vos objectifs, votre public cible, ou toute autre information utile..."
        />
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
        <p className="text-blue-800 font-semibold mb-2">✨ Presque terminé !</p>
        <p className="text-blue-700 text-sm">
          Cliquez sur "Suivant" pour voir le récapitulatif de votre devis.
        </p>
      </div>
    </div>
  )
}

export default FinalInfo






