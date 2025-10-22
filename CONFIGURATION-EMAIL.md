# 📧 Configuration de l'envoi d'emails avec Brevo

## 🎯 Vue d'ensemble

Le simulateur envoie automatiquement 2 emails :
1. **Email à vous (admin)** : Récapitulatif complet du client et de sa demande
2. **Email au client** : Confirmation de réception avec son estimation

---

## ⚙️ Étape 1 : Créer un compte Brevo

1. Allez sur : https://app.brevo.com/account/register
2. Créez un compte **gratuit** (jusqu'à 300 emails/jour)
3. Vérifiez votre email

---

## 🔑 Étape 2 : Obtenir votre clé API

1. Connectez-vous à Brevo
2. Allez dans **Settings** (en haut à droite)
3. Cliquez sur **SMTP & API**
4. Cliquez sur **API Keys**
5. Cliquez sur **Create a new API key**
6. Donnez un nom : `Simulateur Charte`
7. **Copiez la clé** (elle ressemble à : `xkeysib-abc123...`)

---

## ✉️ Étape 3 : Vérifier votre email expéditeur

1. Dans Brevo, allez dans **Senders, Domains & Dedicated IPs**
2. Cliquez sur **Senders**
3. Ajoutez votre email (ex: `contact@votresite.com`)
4. Vérifiez-le en cliquant sur le lien reçu par email

---

## 🚀 Étape 4 : Configurer dans Vercel

Une fois votre projet déployé sur Vercel :

### Via l'interface Vercel :

1. Allez sur https://vercel.com
2. Sélectionnez votre projet `simulateur-charte-graphique`
3. Cliquez sur **Settings**
4. Cliquez sur **Environment Variables**
5. Ajoutez ces 3 variables :

| Name | Value | Example |
|------|-------|---------|
| `BREVO_API_KEY` | Votre clé API Brevo | `xkeysib-abc123...` |
| `SENDER_EMAIL` | Email expéditeur vérifié | `contact@votresite.com` |
| `ADMIN_EMAIL` | Votre email pour recevoir les demandes | `vous@email.com` |

6. Cliquez sur **Save**
7. **Redéployez** le projet (Settings > Deployments > Redeploy)

### Via le terminal (alternative) :

```bash
vercel env add BREVO_API_KEY
# Collez votre clé API

vercel env add SENDER_EMAIL
# Ex: contact@votresite.com

vercel env add ADMIN_EMAIL
# Ex: vous@email.com

# Redéployez
vercel --prod
```

---

## 🧪 Tester l'envoi d'email

1. Allez sur votre simulateur déployé
2. Remplissez le questionnaire
3. Entrez votre email
4. Cliquez sur "Recevoir mon devis détaillé"

Vous devriez recevoir 2 emails :
- ✅ **Email admin** : Récapitulatif complet
- ✅ **Email client** : Confirmation de réception

---

## 📊 Ce que contient l'email admin

- 📧 Email du client
- 👤 Type de client (Indépendant/PME)
- 📋 Tous les choix du client
- 💰 Estimation totale calculée
- 📅 Date de la demande

---

## 📊 Ce que contient l'email client

- ✅ Confirmation de réception
- 💰 Son estimation
- 💬 Message de remerciement

---

## 🔧 Personnaliser les emails

Les templates d'email se trouvent dans : `/api/send-email.js`

Vous pouvez modifier :
- Le design HTML
- Les couleurs
- Le contenu des messages
- Les informations affichées

---

## 🆘 Dépannage

### L'email ne s'envoie pas

1. **Vérifiez les variables d'environnement** dans Vercel
2. **Vérifiez que votre email expéditeur est vérifié** dans Brevo
3. **Regardez les logs** dans Vercel : Functions > Logs
4. **Vérifiez votre quota** Brevo (300 emails/jour en gratuit)

### L'email arrive en spam

1. Vérifiez votre domaine dans Brevo
2. Ajoutez les enregistrements SPF/DKIM
3. Utilisez un email professionnel (pas @gmail.com)

### Erreur 401 Unauthorized

- Votre clé API Brevo est incorrecte
- Vérifiez qu'elle est bien copiée dans Vercel

---

## 📈 Limites du plan gratuit Brevo

- ✅ 300 emails/jour
- ✅ Illimité de contacts
- ✅ API complète
- ✅ Templates HTML

Pour plus : https://www.brevo.com/pricing/

---

## 🎯 Prêt !

Une fois configuré, chaque demande de devis enverra automatiquement les 2 emails ! 🚀

