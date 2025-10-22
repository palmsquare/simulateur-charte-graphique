# 🎨 Simulateur de Charte Graphique

Un simulateur de prix interactif et moderne pour la création de charte graphique, conçu pour être intégré dans un article de blog.

## ✨ Fonctionnalités

- **Navigation par étapes** : Progression fluide à travers 10 étapes
- **Calcul de prix en temps réel** : Le prix s'affiche et s'actualise en bas à droite
- **Animations fluides** : Transitions élégantes entre les étapes
- **Responsive** : S'adapte à tous les écrans
- **Sauvegarde automatique** : Les données sont sauvegardées dans le localStorage
- **Tarification intelligente** : Multiplicateur x2 pour les PME/Startups

## 📋 Étapes du simulateur

1. **Type de client** : Indépendant ou PME/Startup (forfait de base 500€)
2. **Type de projet** : Refonte (+300€) ou Création complète (+500€)
3. **Logo** : Logo existant, à moderniser (+500€), ou sur mesure (+750€)
4. **Palette de couleurs** : Aucune, simple (+200€), ou complète (+350€)
5. **Typographies** : Aucune, simple (+150€), ou hiérarchie complète (+250€)
6. **Iconographie** : Aucune, 1-5 pictos (+150€), 5-10 pictos (+300€), ou univers complet (+800€)
7. **Images et photos** : Non, sélection web (+150€), ou banque complète (+300€)
8. **Charte graphique** : Version essentielle (0€) ou complète (+500€)
9. **Livrables** : Sans kit (0€) ou avec kit de démarrage (+500€)
10. **Récapitulatif** : Saisie de l'email pour recevoir le devis détaillé

## 🎯 Logique de tarification

### Forfait de base
- **500€** pour tous les clients

### Multiplicateur client
- **Indépendant** : +0% sur tous les éléments additionnels
- **PME/Startup** : +100% sur tous les éléments additionnels

### Exemple de calcul
Pour un client PME/Startup qui choisit :
- Création complète : 500€
- Logo sur mesure : 750€ × 2 = 1500€
- Palette complète : 350€ × 2 = 700€

**Total** : 500€ (base) + 1000€ (création × 2) + 1500€ (logo × 2) + 700€ (palette × 2) = **3700€**

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Build pour la production
npm run build
```

## 🛠️ Technologies utilisées

- **React** - Framework JavaScript
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animations fluides
- **React Hot Toast** - Notifications élégantes
- **React Icons** - Icônes

## 📦 Structure du projet

```
src/
├── components/
│   ├── steps/
│   │   ├── ClientType.jsx       # Étape 1 : Type de client
│   │   ├── ProjectType.jsx      # Étape 2 : Type de projet
│   │   ├── Logo.jsx             # Étape 3 : Logo
│   │   ├── ColorPalette.jsx     # Étape 4 : Palette de couleurs
│   │   ├── Typography.jsx       # Étape 5 : Typographies
│   │   ├── Iconography.jsx      # Étape 6 : Iconographie
│   │   ├── Images.jsx           # Étape 7 : Images
│   │   ├── CharteGraphique.jsx  # Étape 8 : Charte graphique
│   │   └── Deliverables.jsx     # Étape 9 : Livrables
│   ├── OptionCard.jsx           # Carte d'option réutilisable
│   ├── PriceDisplay.jsx         # Affichage du prix en temps réel
│   ├── StepIndicator.jsx        # Indicateur de progression
│   └── Summary.jsx              # Récapitulatif et formulaire email
├── App.jsx                       # Composant principal
└── main.jsx                      # Point d'entrée

```

## 🎨 Personnalisation

### Couleur principale
La couleur principale est définie dans plusieurs fichiers avec `#FF00A7`. Pour la changer :

1. Dans `App.jsx` : `style={{ backgroundColor: '#VOTRE_COULEUR' }}`
2. Dans `OptionCard.jsx` : `style={{ backgroundColor: '#VOTRE_COULEUR' }}`
3. Dans `PriceDisplay.jsx` : `style={{ backgroundColor: '#VOTRE_COULEUR' }}`

### Modifier les prix
Les prix sont définis dans `PriceDisplay.jsx`. Modifiez les valeurs dans la fonction `calculateTotals()`.

## 📝 Utilisation dans un blog

Le simulateur est conçu pour être léger et facilement intégrable dans un article de blog :

1. Build le projet : `npm run build`
2. Les fichiers générés dans `dist/` peuvent être déployés sur n'importe quel hébergement statique
3. Intégrez via une iframe ou directement dans votre CMS

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

MIT

---

Créé avec ❤️ pour simplifier la création de devis de charte graphique
