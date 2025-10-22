# 🌐 Code iframe pour WordPress

## Version simple (hauteur fixe - 450px)

```html
<iframe 
  src="VOTRE_URL_VERCEL_ICI" 
  width="100%" 
  height="450px" 
  frameborder="0"
  style="border: none; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); display: block; margin: 40px auto; max-width: 900px;"
  title="Simulateur de Charte Graphique">
</iframe>
```

## Version avec conteneur centré

```html
<div style="max-width: 900px; margin: 40px auto; padding: 0 20px;">
  <iframe 
    src="VOTRE_URL_VERCEL_ICI" 
    width="100%" 
    height="450px" 
    frameborder="0"
    style="border: none; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
    title="Simulateur de Charte Graphique">
  </iframe>
</div>
```

## Version responsive (mobile-friendly)

```html
<style>
.simulateur-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
}

.simulateur-iframe {
  width: 100%;
  height: 850px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: block;
}

@media (max-width: 768px) {
  .simulateur-container {
    padding: 0 10px;
    margin: 20px auto;
  }
  
  .simulateur-iframe {
    height: 900px;
    border-radius: 8px;
  }
}
</style>

<div class="simulateur-container">
  <iframe 
    class="simulateur-iframe"
    src="VOTRE_URL_VERCEL_ICI" 
    title="Simulateur de Charte Graphique"
    loading="lazy">
  </iframe>
</div>
```

## Avec Elementor (plugin WordPress)

1. Ajoutez un widget **HTML**
2. Collez le code ci-dessus
3. Remplacez `VOTRE_URL_VERCEL_ICI` par votre URL

## Avec Gutenberg (éditeur WordPress)

1. Ajoutez un bloc **HTML personnalisé**
2. Collez le code ci-dessus
3. Remplacez `VOTRE_URL_VERCEL_ICI` par votre URL

---

## 🎯 Exemple concret

Si votre URL Vercel est : `https://simulateur-charte.vercel.app`

```html
<iframe 
  src="https://simulateur-charte.vercel.app" 
  width="100%" 
  height="850px" 
  style="border: none; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); display: block; margin: 40px auto; max-width: 900px;">
</iframe>
```

---

## 📱 Hauteurs recommandées

- **Desktop** : 450px
- **Mobile** : 500px (plus d'espace pour le défilement)
- **Tablette** : 450px

La hauteur est maintenant **fixe** et ne change plus, même à la dernière étape !

