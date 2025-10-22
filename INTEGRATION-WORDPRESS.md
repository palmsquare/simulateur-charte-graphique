# 🚀 Intégration WordPress Simple (JavaScript)

## ✨ Méthode recommandée : Embed JS

Cette méthode est **plus propre** qu'un iframe classique et s'intègre parfaitement dans tes articles.

---

## 📝 Étape 1 : Ajouter le script dans ton thème

### Option A : Via le footer.php de ton thème

Ajoute ce code **avant la balise `</body>`** dans `footer.php` :

```html
<!-- Simulateur Charte Graphique -->
<script>
  window.SIMULATOR_CONFIG = {
    url: 'https://TON-URL-VERCEL.vercel.app'
  };
</script>
<script src="https://TON-URL-VERCEL.vercel.app/embed.js" defer></script>
```

### Option B : Via un plugin "Header & Footer Scripts"

1. Installe le plugin **"Insert Headers and Footers"**
2. Va dans **Réglages** → **Insert Headers and Footers**
3. Colle le code ci-dessus dans **"Scripts in Footer"**
4. Sauvegarde

---

## 📄 Étape 2 : Dans ton article WordPress

Dans l'éditeur Gutenberg ou l'éditeur classique, ajoute un **bloc HTML personnalisé** avec :

```html
<div class="simulateur-charte-graphique"></div>
```

**C'est tout !** Le simulateur s'affichera automatiquement à cet endroit. 🎉

---

## 🎨 Personnalisation avancée

### Centrer le simulateur avec un conteneur

```html
<div style="max-width: 900px; margin: 40px auto; padding: 0 20px;">
  <div class="simulateur-charte-graphique"></div>
</div>
```

### Ajouter un titre

```html
<div style="max-width: 900px; margin: 40px auto; padding: 0 20px; text-align: center;">
  <h2>Estime le prix de ta charte graphique</h2>
  <p>Réponds aux questions pour obtenir une estimation personnalisée</p>
  <div class="simulateur-charte-graphique"></div>
</div>
```

---

## 🔧 Version alternative : Modal (Popup)

Si tu veux que le simulateur s'ouvre dans un **popup** au clic sur un bouton :

### 1. Ajoute ce CSS dans ton thème :

```css
.simulator-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  z-index: 9999;
  padding: 20px;
  overflow-y: auto;
}

.simulator-modal.active {
  display: flex;
  align-items: center;
  justify-content: center;
}

.simulator-modal-content {
  background: white;
  border-radius: 12px;
  max-width: 1000px;
  width: 100%;
  position: relative;
  padding: 20px;
}

.simulator-close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 30px;
  cursor: pointer;
  background: none;
  border: none;
  z-index: 10;
}
```

### 2. Ajoute ce JS :

```html
<script>
function openSimulator() {
  document.getElementById('simulator-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSimulator() {
  document.getElementById('simulator-modal').classList.remove('active');
  document.body.style.overflow = 'auto';
}
</script>
```

### 3. Dans ton article, ajoute :

```html
<!-- Bouton pour ouvrir le simulateur -->
<button onclick="openSimulator()" style="background: #FF00A7; color: white; padding: 15px 30px; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; font-weight: bold;">
  🎨 Calculer mon devis
</button>

<!-- Modal (popup) -->
<div id="simulator-modal" class="simulator-modal">
  <div class="simulator-modal-content">
    <button class="simulator-close" onclick="closeSimulator()">&times;</button>
    <iframe 
      src="https://TON-URL-VERCEL.vercel.app" 
      style="width: 100%; height: 600px; border: none; border-radius: 8px;"
      title="Simulateur de Charte Graphique">
    </iframe>
  </div>
</div>
```

---

## 🎯 Quelle méthode choisir ?

| Méthode | Avantages | Idéal pour |
|---------|-----------|-----------|
| **Embed JS** | Simple, s'intègre dans le flux | Article de blog |
| **Modal/Popup** | Ne prend pas de place, moderne | Landing page, sidebar |
| **Iframe direct** | Le plus simple | Test rapide |

---

## 🐛 Problèmes fréquents

### Le simulateur ne s'affiche pas
- Vérifie que l'URL Vercel est correcte dans `SIMULATOR_CONFIG`
- Vérifie que le script `embed.js` est bien chargé (F12 → Console)
- Vérifie que la div a bien la classe `simulateur-charte-graphique`

### Le simulateur est trop petit/grand
- Ajuste la hauteur dans `embed.js` (ligne `height: 500px`)
- Pour mobile, ajuste la hauteur à `550px`

---

**Besoin d'aide ?** Envoie-moi un message ! 💌

