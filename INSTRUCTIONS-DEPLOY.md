# 🚀 Instructions de déploiement - Simulateur de Charte Graphique

Votre projet est maintenant prêt à être déployé ! Suivez ces étapes dans l'ordre :

---

## ✅ Étape 1 : Créer un repository GitHub

1. **Allez sur GitHub** : https://github.com/new

2. **Créez un nouveau repository** :
   - **Nom** : `simulateur-charte-graphique` (ou le nom de votre choix)
   - **Description** : `Simulateur de prix pour la création de charte graphique`
   - **Visibilité** : Public ou Privé (au choix)
   - ⚠️ **NE COCHEZ PAS** "Initialize this repository with a README"
   - Cliquez sur **Create repository**

3. **Copiez l'URL** du repository (elle ressemble à) :
   ```
   https://github.com/VOTRE-USERNAME/simulateur-charte-graphique.git
   ```

---

## ✅ Étape 2 : Pousser votre code sur GitHub

Ouvrez votre terminal Mac et exécutez ces commandes :

```bash
# 1. Allez dans le dossier du projet
cd "/Users/keziah/Downloads/Devis simulator"

# 2. Liez votre projet au repository GitHub
# ⚠️ REMPLACEZ l'URL par la vôtre !
git remote add origin https://github.com/VOTRE-USERNAME/simulateur-charte-graphique.git

# 3. Renommez la branche en "main"
git branch -M main

# 4. Poussez le code sur GitHub
git push -u origin main
```

**Résultat** : Votre code est maintenant sur GitHub ! 🎉

---

## ✅ Étape 3 : Déployer sur Vercel

### Option A : Via le site Vercel (RECOMMANDÉ - le plus simple)

1. **Allez sur Vercel** : https://vercel.com/signup

2. **Inscrivez-vous avec GitHub** :
   - Cliquez sur "Continue with GitHub"
   - Autorisez Vercel à accéder à vos repos

3. **Importez votre projet** :
   - Cliquez sur "Add New..." → "Project"
   - Sélectionnez `simulateur-charte-graphique`
   - Cliquez sur "Import"

4. **Configurez (tout est déjà bon)** :
   - Framework Preset: `Vite` (détecté automatiquement)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Cliquez sur **Deploy**

5. **Attendez 1-2 minutes** ⏳

6. **Récupérez votre URL** 🎯 :
   ```
   https://simulateur-charte-graphique.vercel.app
   ```
   (ou l'URL que Vercel vous donne)

### Option B : Via le terminal (alternative)

```bash
# Dans le terminal Mac :
cd "/Users/keziah/Downloads/Devis simulator"

# Corrigez les permissions npm
sudo chown -R 501:20 "/Users/keziah/.npm"

# Déployez
npx vercel --prod
```

---

## ✅ Étape 4 : Intégrer dans WordPress

Une fois déployé, copiez ce code dans votre article WordPress :

```html
<div style="max-width: 900px; margin: 40px auto; padding: 0 20px;">
  <iframe 
    src="VOTRE_URL_VERCEL_ICI" 
    width="100%" 
    height="900px" 
    frameborder="0"
    style="border: none; border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,0.1);"
    title="Simulateur de Charte Graphique">
  </iframe>
</div>
```

**Remplacez `VOTRE_URL_VERCEL_ICI`** par votre URL Vercel !

---

## 🔄 Pour mettre à jour après modifications

1. **Modifiez votre code ici (dans VS Code)**

2. **Dans le terminal** :
```bash
cd "/Users/keziah/Downloads/Devis simulator"
git add .
git commit -m "Description de vos modifications"
git push
```

3. **Vercel redéploie automatiquement** ! ✨
   - Pas besoin de refaire quoi que ce soit
   - Vérifiez sur votre URL Vercel après 1-2 minutes

---

## 📱 Test rapide

Une fois déployé, testez sur :
- **Desktop** : Ouvrez l'URL Vercel sur votre ordinateur
- **Mobile** : Ouvrez sur votre téléphone
- **WordPress** : Vérifiez que l'iframe s'affiche bien

---

## 🆘 Besoin d'aide ?

**Le déploiement échoue ?**
- Vérifiez que `npm run build` fonctionne localement
- Regardez les logs d'erreur sur Vercel

**L'iframe ne s'affiche pas ?**
- Vérifiez que l'URL Vercel est en HTTPS
- Essayez d'augmenter la hauteur : `height="1000px"`
- Videz le cache WordPress

**GitHub demande un mot de passe ?**
- Utilisez un Personal Access Token : https://github.com/settings/tokens
- Ou configurez SSH : https://docs.github.com/en/authentication

---

## ✅ Checklist complète

- [ ] Créer le repository sur GitHub
- [ ] Pousser le code : `git push -u origin main`
- [ ] Créer un compte Vercel
- [ ] Importer le projet GitHub sur Vercel
- [ ] Copier l'URL de déploiement
- [ ] Intégrer l'iframe dans WordPress
- [ ] Tester sur desktop et mobile

---

**Votre serveur de développement local** : http://localhost:5175/

**Prêt à déployer ?** Commencez par l'étape 1 ! 🚀

