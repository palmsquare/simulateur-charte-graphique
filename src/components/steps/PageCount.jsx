import OptionCard from '../OptionCard'
import { FaFileAlt } from 'react-icons/fa'

const PageCount = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🔹 Nombre de pages</h2>
        <p className="text-gray-600 mb-2">Combien de gabarits de pages comportera votre site ?</p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-800">
            💡 Un gabarit = une mise en page unique réutilisable. 
            <br />Exemple : accueil, à propos, contact, article de blog, etc.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <OptionCard
          icon={<FaFileAlt />}
          title="1 à 5 pages"
          description="ex : Accueil, À propos, Blog, Contact, Article"
          selected={formData.pageCount === '1-5'}
          onClick={() => updateFormData('pageCount', '1-5')}
        />

        <OptionCard
          icon={<FaFileAlt />}
          title="6 à 8 pages"
          description="ex : + Formation, Ressources, Landing page complémentaire…"
          selected={formData.pageCount === '6-8'}
          onClick={() => updateFormData('pageCount', '6-8')}
          price="+800 €"
        />

        <OptionCard
          icon={<FaFileAlt />}
          title="Plus de 10 pages"
          description="ex : Offres d'emploi, services multiples, etc."
          selected={formData.pageCount === '10+'}
          onClick={() => updateFormData('pageCount', '10+')}
          price="+1 500 €"
        />
      </div>
    </div>
  )
}

export default PageCount

