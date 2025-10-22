// API Serverless pour envoyer l'email via Brevo
export default async function handler(req, res) {
  // Autoriser les requêtes CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, formData } = req.body;

    // Calcul du prix
    let basePrice = 500;
    let additionalCosts = 0;
    
    if (formData.projectType === 'refonte') additionalCosts += 300;
    else if (formData.projectType === 'creation') additionalCosts += 500;
    
    if (formData.logo === 'modernize') additionalCosts += 500;
    else if (formData.logo === 'custom') additionalCosts += 750;
    
    if (formData.colorPalette === 'simple') additionalCosts += 200;
    else if (formData.colorPalette === 'complete') additionalCosts += 350;
    
    if (formData.typography === 'simple') additionalCosts += 150;
    else if (formData.typography === 'complete') additionalCosts += 250;
    
    if (formData.iconography === 'few') additionalCosts += 150;
    else if (formData.iconography === 'medium') additionalCosts += 300;
    else if (formData.iconography === 'complete') additionalCosts += 800;
    
    if (formData.images === 'web') additionalCosts += 150;
    else if (formData.images === 'complete') additionalCosts += 300;
    
    if (formData.charteGraphique === 'complete') additionalCosts += 500;
    
    if (formData.deliverables === 'yes') additionalCosts += 500;
    
    if (formData.clientType === 'pme') additionalCosts *= 1.5;
    
    const totalPrice = basePrice + additionalCosts;

    // Labels pour l'affichage
    const getLabel = (field, value) => {
      const labels = {
        clientType: { independant: 'Indépendant', pme: 'PME / Startup' },
        projectType: { refonte: 'Refonte (+300 €)', creation: 'Création complète (+500 €)' },
        logo: { existing: 'J\'ai déjà un logo', modernize: 'Moderniser le logo (+500 €)', custom: 'Logo sur mesure (+750 €)' },
        colorPalette: { none: 'J\'ai déjà mes couleurs', simple: 'Palette simple (+200 €)', complete: 'Palette complète (+350 €)' },
        typography: { none: 'Je garde mes polices', simple: 'Recommandation simple (+150 €)', complete: 'Hiérarchie complète (+250 €)' },
        iconography: { none: 'Aucun', few: '1 à 5 pictos (+150 €)', medium: '5 à 10 pictos (+300 €)', complete: 'Univers complet (+800 €)' },
        images: { none: 'Non', web: 'Sélection web/réseaux (+150 €)', complete: 'Banque complète (+300 €)' },
        charteGraphique: { essential: 'Version essentielle (8-12 pages)', complete: 'Charte complète 25 pages (+500 €)' },
        deliverables: { none: 'Non', yes: 'Oui, kit complet (+500 €)' }
      };
      return labels[field]?.[value] || value;
    };

    // HTML de l'email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #000; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .section { margin-bottom: 20px; }
          .section h3 { color: #000; border-bottom: 2px solid #000; padding-bottom: 5px; }
          .info-line { padding: 8px 0; border-bottom: 1px solid #ddd; }
          .info-line strong { display: inline-block; width: 200px; }
          .price-box { background: #000; color: white; padding: 20px; text-align: center; border-radius: 8px; margin: 20px 0; }
          .price { font-size: 36px; font-weight: bold; }
          .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎨 Simulateur de Charte Graphique</h1>
            <p>Nouvelle demande de devis</p>
          </div>
          
          <div class="content">
            <div class="section">
              <h3>📧 Contact</h3>
              <div class="info-line"><strong>Email :</strong> ${email}</div>
            </div>

            <div class="section">
              <h3>📋 Détails du projet</h3>
              <div class="info-line"><strong>Type de client :</strong> ${getLabel('clientType', formData.clientType)}</div>
              <div class="info-line"><strong>Type de projet :</strong> ${getLabel('projectType', formData.projectType)}</div>
              <div class="info-line"><strong>Logo :</strong> ${getLabel('logo', formData.logo)}</div>
              <div class="info-line"><strong>Palette de couleurs :</strong> ${getLabel('colorPalette', formData.colorPalette)}</div>
              <div class="info-line"><strong>Typographies :</strong> ${getLabel('typography', formData.typography)}</div>
              <div class="info-line"><strong>Iconographie :</strong> ${getLabel('iconography', formData.iconography)}</div>
              <div class="info-line"><strong>Images :</strong> ${getLabel('images', formData.images)}</div>
              <div class="info-line"><strong>Charte graphique :</strong> ${getLabel('charteGraphique', formData.charteGraphique)}</div>
              <div class="info-line"><strong>Livrables :</strong> ${getLabel('deliverables', formData.deliverables)}</div>
            </div>

            <div class="price-box">
              <div style="font-size: 14px; margin-bottom: 10px;">ESTIMATION TOTALE</div>
              <div class="price">${totalPrice.toLocaleString('fr-FR')} €</div>
              <div style="font-size: 12px; margin-top: 10px; opacity: 0.8;">Prix indicatif HT</div>
            </div>

            <div class="footer">
              <p>Cette estimation est indicative et peut varier selon les spécifications finales du projet.</p>
              <p>Date : ${new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Envoi via Brevo
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: {
          name: "Simulateur Charte Graphique",
          email: process.env.SENDER_EMAIL || "noreply@votresite.com"
        },
        to: [
          {
            email: process.env.ADMIN_EMAIL || "votre@email.com",
            name: "Admin"
          }
        ],
        replyTo: {
          email: email
        },
        subject: `🎨 Nouveau devis - ${email}`,
        htmlContent: htmlContent
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Brevo error:', error);
      throw new Error('Erreur lors de l\'envoi de l\'email');
    }

    // Email de confirmation au client
    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #000; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .price-box { background: #000; color: white; padding: 20px; text-align: center; border-radius: 8px; margin: 20px 0; }
          .price { font-size: 36px; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎨 Merci pour votre demande !</h1>
          </div>
          
          <div class="content">
            <p>Bonjour,</p>
            <p>Nous avons bien reçu votre demande de devis pour votre charte graphique.</p>
            
            <div class="price-box">
              <div style="font-size: 14px; margin-bottom: 10px;">VOTRE ESTIMATION</div>
              <div class="price">${totalPrice.toLocaleString('fr-FR')} €</div>
              <div style="font-size: 12px; margin-top: 10px; opacity: 0.8;">Prix indicatif HT</div>
            </div>

            <p>Nous reviendrons vers vous très rapidement avec une estimation détaillée et personnalisée.</p>
            
            <p>À très bientôt,<br>L'équipe</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: {
          name: "Simulateur Charte Graphique",
          email: process.env.SENDER_EMAIL || "noreply@votresite.com"
        },
        to: [
          {
            email: email
          }
        ],
        subject: "✅ Votre demande de devis a été reçue",
        htmlContent: confirmationHtml
      })
    });

    return res.status(200).json({ success: true, message: 'Emails envoyés avec succès' });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      error: 'Erreur lors de l\'envoi de l\'email',
      details: error.message 
    });
  }
}

