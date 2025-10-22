import OptionCard from '../OptionCard'

const ColorPalette = ({ formData, updateFormData, onNext }) => {
  const handleSelect = (value) => {
    updateFormData('colorPalette', value)
    setTimeout(() => onNext(), 300)
  }

  return (
    <div>
      <h2 className="text-base font-bold mb-1 text-black">Palette de couleurs</h2>
      <p className="text-xs text-gray-600 mb-2">Tu veux qu'on te crée une palette ?</p>
      
      <div className="grid grid-cols-3 gap-2">
        <OptionCard
          title="J'ai déjà mes couleurs"
          price="0 €"
          selected={formData.colorPalette === 'none'}
          onClick={() => handleSelect('none')}
        />
        
        <OptionCard
          title="Palette simple"
          description="Principales + secondaires"
          price="+200 €"
          selected={formData.colorPalette === 'simple'}
          onClick={() => handleSelect('simple')}
        />
        
        <OptionCard
          title="Palette complète"
          description="Principales, secondaires, accents"
          price="+350 €"
          selected={formData.colorPalette === 'complete'}
          onClick={() => handleSelect('complete')}
        />
      </div>
    </div>
  )
}

export default ColorPalette

