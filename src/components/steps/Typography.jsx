import OptionCard from '../OptionCard'

const Typography = ({ formData, updateFormData, onNext }) => {
  const handleSelect = (value) => {
    updateFormData('typography', value)
    setTimeout(() => onNext(), 300)
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2 text-gray-800">Typographies</h2>
      <p className="text-sm text-gray-600 mb-4">Tu veux qu'on choisisse tes polices ?</p>
      
      <div className="grid grid-cols-3 gap-3">
        <OptionCard
          title="Je garde les miennes"
          price="0 €"
          selected={formData.typography === 'none'}
          onClick={() => handleSelect('none')}
        />
        
        <OptionCard
          title="Recommandation simple"
          price="+150 €"
          selected={formData.typography === 'simple'}
          onClick={() => handleSelect('simple')}
        />
        
        <OptionCard
          title="Hiérarchie complète"
          description="Titres, paragraphes, variantes"
          price="+250 €"
          selected={formData.typography === 'complete'}
          onClick={() => handleSelect('complete')}
        />
      </div>
    </div>
  )
}

export default Typography

