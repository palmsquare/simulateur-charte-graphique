import OptionCard from '../OptionCard'

const Logo = ({ formData, updateFormData, onNext }) => {
  const handleSelect = (value) => {
    updateFormData('logo', value)
    setTimeout(() => onNext(), 300)
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2 text-gray-800">Logo</h2>
      <p className="text-sm text-gray-600 mb-4">As-tu besoin d'un logo dans ta charte ?</p>
      
      <div className="grid grid-cols-3 gap-3">
        <OptionCard
          title="J'ai déjà un logo"
          price="0 €"
          selected={formData.logo === 'existing'}
          onClick={() => handleSelect('existing')}
        />
        
        <OptionCard
          title="Je veux le moderniser"
          price="+500 €"
          selected={formData.logo === 'modernize'}
          onClick={() => handleSelect('modernize')}
        />
        
        <OptionCard
          title="Logo sur mesure"
          description="3 pistes, déclinaisons, exports"
          price="+750 €"
          selected={formData.logo === 'custom'}
          onClick={() => handleSelect('custom')}
        />
      </div>
    </div>
  )
}

export default Logo

