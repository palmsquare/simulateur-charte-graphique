# 🚀 Déploiement sur Vercel et intégration WordPress

## 📦 1. Déployer sur Vercel

### Option A : Via le site web Vercel (Recommandé)

1. **Créez un compte sur Vercel**
   - Allez sur https://vercel.com
   - Inscrivez-vous avec GitHub, GitLab ou email

2. **Préparez votre code sur GitHub**
   ```bash
   # Dans le terminal (depuis le dossier du projet)
   git init
   git add .
   git commit -m "Initial commit - Simulateur de Charte Graphique"
   
   # Créez un repo sur GitHub, puis :
   git remote add origin https://github.com/VOTRE-USERNAME/VOTRE-REPO.git
   git branch -M main
   git push -u origin main
   ```

3. **Importez sur Vercel**
   - Cliquez sur "New Project" sur Vercel
   - Importez votre repository GitHub
   - Vercel détectera automatiquement que c'est un projet Vite
   - Cliquez sur "Deploy"
   - **Votre URL sera : `https://votre-projet.vercel.app`**

### Option B : Via Vercel CLI (Plus rapide)

```bash
# Installez Vercel CLI
npm i -g vercel

# Déployez (depuis le dossier du projet)
vercel

# Suivez les instructions :
# - Link to existing project? No
# - Project name? (laissez le nom par défaut ou changez)
# - In which directory is your code? ./
# - Want to override settings? No

# Pour déployer en production :
vercel --prod
```

---

## 🌐 2. Intégrer dans WordPress

### Méthode 1 : Iframe simple (Recommandé)

Une fois déployé sur Vercel, ajoutez ce code dans votre article/page WordPress :

```html
<iframe 
  src="https://votre-projet.vercel.app" 
  width="100%" 
  height="800px" 
  frameborder="0"
  style="border: none; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
  allow="clipboard-write"
  title="Simulateur de Charte Graphique">
</iframe>

<script>
  // Ajuste automatiquement la hauteur
  window.addEventListener('message', function(e) {
    if (e.data && e.data.height) {
      document.querySelector('iframe').style.height = e.data.height + 'px';
    }
  });
</script>
```

### Méthode 2 : Shortcode WordPress personnalisé

Ajoutez ce code dans le fichier `functions.php` de votre thème :

```php
function simulateur_charte_graphique_shortcode() {
    return '<iframe 
        src="https://votre-projet.vercel.app" 
        width="100%" 
        height="800px" 
        frameborder="0"
        style="border: none; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
        allow="clipboard-write"
        title="Simulateur de Charte Graphique">
    </iframe>';
}
add_shortcode('simulateur_charte', 'simulateur_charte_graphique_shortcode');
```

Puis dans votre article, utilisez simplement :
```
[simulateur_charte]
```

### Méthode 3 : Plugin "Custom HTML" ou "Code Snippets"

1. Installez le plugin "Custom HTML" ou "Insert Headers and Footers"
2. Collez le code iframe dans un bloc HTML personnalisé

---

## 💻 3. Continuer le développement local

### Workflow recommandé :

1. **Travaillez localement dans VS Code (ici)**
   ```bash
   npm run dev
   # Le serveur démarre sur http://localhost:5173
   ```

2. **Testez vos modifications localement**

3. **Une fois satisfait, commitez et poussez sur GitHub**
   ```bash
   git add .
   git commit -m "Description des changements"
   git push
   ```

4. **Vercel déploie automatiquement** ✨
   - Vercel détecte le push sur GitHub
   - Il build et déploie automatiquement
   - Votre iframe WordPress se met à jour automatiquement !

---

## 🔧 Configuration avancée

### Ajuster la hauteur responsive

Ajoutez ce code dans votre `src/main.jsx` (à la fin) :

```javascript
// Envoie la hauteur au parent (WordPress)
const sendHeight = () => {
  const height = document.body.scrollHeight;
  window.parent.postMessage({ height }, '*');
};

window.addEventListener('load', sendHeight);
window.addEventListener('resize', sendHeight);

// Observe les changements de contenu
const observer = new MutationObserver(sendHeight);
observer.observe(document.body, { 
  childList: true, 
  subtree: true, 
  attributes: true 
});
```

### Personnaliser le domaine

Dans Vercel :
1. Allez dans Settings > Domains
2. Ajoutez votre domaine personnalisé (ex: `simulateur.votresite.com`)
3. Mettez à jour l'URL de l'iframe dans WordPress

---

## 📱 Optimisations pour WordPress

### CSS pour bien intégrer l'iframe

Ajoutez ce CSS dans votre thème WordPress (Apparence > Personnaliser > CSS) :

```css
/* Conteneur de l'iframe */
.simulateur-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
}

/* Iframe responsive */
.simulateur-container iframe {
  width: 100%;
  min-height: 600px;
  border: none;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
}

/* Mobile */
@media (max-width: 768px) {
  .simulateur-container {
    padding: 0 10px;
  }
  
  .simulateur-container iframe {
    min-height: 700px;
  }
}
```

Et utilisez :
```html
<div class="simulateur-container">
  <iframe src="https://votre-projet.vercel.app" ...></iframe>
</div>
```

---

## 🎯 Résumé rapide

1. **Déployer** : `vercel --prod` OU via GitHub → Vercel
2. **WordPress** : Ajoutez l'iframe avec l'URL Vercel
3. **Développer** : Continuez ici, poussez sur GitHub, Vercel redéploie auto !

---

## 🆘 Dépannage

**L'iframe ne s'affiche pas ?**
- Vérifiez que votre thème WordPress permet les iframes
- Assurez-vous que l'URL Vercel est en HTTPS

**Hauteur incorrecte ?**
- Ajustez manuellement `height="800px"` dans l'iframe
- Ou utilisez le script de hauteur automatique

**Modifications non visibles ?**
- Videz le cache de Vercel : `vercel --prod --force`
- Videz le cache WordPress (plugin WP Super Cache ou similaire)

