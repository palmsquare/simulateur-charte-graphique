import OptionCard from '../OptionCard'

const Deliverables = ({ formData, updateFormData, onNext }) => {
  const handleSelect = (value) => {
    updateFormData('deliverables', value)
    setTimeout(() => onNext(), 300)
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2 text-gray-800">Livrables & accompagnement</h2>
      <p className="text-sm text-gray-600 mb-4">Tu veux un kit de démarrage ?</p>
      
      <div className="grid grid-cols-2 gap-3">
        <OptionCard
          title="Non"
          price="0 €"
          selected={formData.deliverables === 'none'}
          onClick={() => handleSelect('none')}
        />
        
        <OptionCard
          title="Kit de démarrage complet"
          description="Carte de visite, templates Canva, LinkedIn"
          price="+500 €"
          selected={formData.deliverables === 'yes'}
          onClick={() => handleSelect('yes')}
        />
      </div>
    </div>
  )
}

export default Deliverables

