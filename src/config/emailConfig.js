// Configuration EmailJS
// Pour utiliser EmailJS, créez un compte sur https://www.emailjs.com/
// Puis remplacez ces valeurs par vos propres clés

export const EMAIL_CONFIG = {
  // Votre Public Key EmailJS (trouvée dans Account > General)
  PUBLIC_KEY: 'VOTRE_PUBLIC_KEY',
  
  // Votre Service ID (trouvé dans Email Services)
  SERVICE_ID: 'VOTRE_SERVICE_ID',
  
  // Votre Template ID (trouvé dans Email Templates)
  TEMPLATE_ID: 'VOTRE_TEMPLATE_ID'
}

// Instructions pour configurer EmailJS :
// 1. Créez un compte sur https://www.emailjs.com/
// 2. Ajoutez un service email (Gmail, Outlook, etc.)
// 3. Créez un template d'email avec les variables suivantes :
//    - {{firstName}}
//    - {{lastName}}
//    - {{email}}
//    - {{projectType}}
//    - {{websiteType}}
//    - {{designLevel}}
//    - {{timeline}}
//    - {{totalFixed}}
//    - {{totalMonthly}}
//    - {{features}}
//    - {{additionalServices}}
//    - {{additionalInfo}}
// 4. Copiez vos clés et IDs ci-dessus


