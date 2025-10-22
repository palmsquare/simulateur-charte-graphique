import OptionCard from '../OptionCard'

const ProjectType = ({ formData, updateFormData, onNext }) => {
  const handleSelect = (value) => {
    updateFormData('projectType', value)
    setTimeout(() => onNext(), 300)
  }

  return (
    <div>
      <h2 className="text-base font-bold mb-1 text-black">Type de projet</h2>
      <p className="text-xs text-gray-600 mb-2">Tu veux une création complète ou une refonte ?</p>
      
      <div className="grid grid-cols-2 gap-2">
        <OptionCard
          title="Refonte"
          description="Modernisation de ta charte existante"
          price="+300 €"
          selected={formData.projectType === 'refonte'}
          onClick={() => handleSelect('refonte')}
        />
        
        <OptionCard
          title="Création complète"
          description="Création de A à Z"
          price="+500 €"
          selected={formData.projectType === 'creation'}
          onClick={() => handleSelect('creation')}
        />
      </div>
    </div>
  )
}

export default ProjectType
