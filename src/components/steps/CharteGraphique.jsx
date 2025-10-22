import OptionCard from '../OptionCard'

const CharteGraphique = ({ formData, updateFormData, onNext }) => {
  const handleSelect = (value) => {
    updateFormData('charteGraphique', value)
    setTimeout(() => onNext(), 300)
  }

  return (
    <div>
      <h2 className="text-lg font-bold mb-2 text-black">Charte graphique</h2>
      <p className="text-sm text-gray-600 mb-3">Souhaites-tu un document complet avec exemples et règles ?</p>
      
      <div className="grid grid-cols-2 gap-3">
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

