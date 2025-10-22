import OptionCard from '../OptionCard'

const Images = ({ formData, updateFormData, onNext }) => {
  const handleSelect = (value) => {
    updateFormData('images', value)
    setTimeout(() => onNext(), 300)
  }

  return (
    <div>
      <h2 className="text-lg font-bold mb-2 text-black">Images et photos</h2>
      <p className="text-sm text-gray-600 mb-3">Tu veux qu'on te prépare une sélection d'images cohérentes avec ta charte ?</p>
      
      <div className="grid grid-cols-3 gap-3">
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

