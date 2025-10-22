import OptionCard from '../OptionCard'

const Iconography = ({ formData, updateFormData, onNext }) => {
  const handleSelect = (value) => {
    updateFormData('iconography', value)
    setTimeout(() => onNext(), 300)
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2 text-gray-800">Iconographie & illustrations</h2>
      <p className="text-sm text-gray-600 mb-4">Tu veux des pictos ou illustrations sur mesure ?</p>
      
      <div className="grid grid-cols-2 gap-3">
        <OptionCard
          title="Aucun"
          price="0 €"
          selected={formData.iconography === 'none'}
          onClick={() => handleSelect('none')}
        />
        
        <OptionCard
          title="1 à 5 pictos"
          price="+150 €"
          selected={formData.iconography === 'few'}
          onClick={() => handleSelect('few')}
        />
        
        <OptionCard
          title="5 à 10 pictos"
          description="Cohérentes avec ta charte"
          price="+300 €"
          selected={formData.iconography === 'medium'}
          onClick={() => handleSelect('medium')}
        />
        
        <OptionCard
          title="Univers illustratif complet"
          price="+800 €"
          selected={formData.iconography === 'complete'}
          onClick={() => handleSelect('complete')}
        />
      </div>
    </div>
  )
}

export default Iconography

