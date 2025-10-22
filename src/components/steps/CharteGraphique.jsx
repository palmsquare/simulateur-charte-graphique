import OptionCard from '../OptionCard'

const CharteGraphique = ({ formData, updateFormData, onNext }) => {
  const handleSelect = (value) => {
    updateFormData('charteGraphique', value)
    setTimeout(() => onNext(), 300)
  }

  return (
    <div>
      <h2 className="text-base font-bold mb-1 text-black">Charte graphique</h2>
      <p className="text-xs text-gray-600 mb-2">Souhaites-tu un document complet ?</p>
      
      <div className="grid grid-cols-2 gap-2">
        <OptionCard
          title="Version essentielle"
          description="8–12 pages"
          price="0 €"
          selected={formData.charteGraphique === 'essential'}
          onClick={() => handleSelect('essential')}
        />
        
        <OptionCard
          title="Charte complète"
          description="25 pages"
          price="+500 €"
          selected={formData.charteGraphique === 'complete'}
          onClick={() => handleSelect('complete')}
        />
      </div>
    </div>
  )
}

export default CharteGraphique

