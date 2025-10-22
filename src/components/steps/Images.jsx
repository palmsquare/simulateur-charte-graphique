import OptionCard from '../OptionCard'

const Images = ({ formData, updateFormData, onNext }) => {
  const handleSelect = (value) => {
    updateFormData('images', value)
    setTimeout(() => onNext(), 300)
  }

  return (
    <div>
      <h2 className="text-base font-bold mb-1 text-black">Images et photos</h2>
      <p className="text-xs text-gray-600 mb-2">Tu veux qu'on te prépare une sélection d'images ?</p>
      
      <div className="grid grid-cols-3 gap-2">
        <OptionCard
          title="Non"
          price="0 €"
          selected={formData.images === 'none'}
          onClick={() => handleSelect('none')}
        />
        
        <OptionCard
          title="Sélection web / réseaux"
          price="+150 €"
          selected={formData.images === 'web'}
          onClick={() => handleSelect('web')}
        />
        
        <OptionCard
          title="Banque complète"
          description="Site, print, réseaux"
          price="+300 €"
          selected={formData.images === 'complete'}
          onClick={() => handleSelect('complete')}
        />
      </div>
    </div>
  )
}

export default Images

