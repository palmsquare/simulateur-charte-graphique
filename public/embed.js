(function() {
  // Configuration
  const SIMULATOR_URL = window.SIMULATOR_CONFIG?.url || 'https://votre-url-vercel.vercel.app';
  
  // Trouve le conteneur
  const containers = document.querySelectorAll('.simulateur-charte-graphique');
  
  containers.forEach(container => {
    // Crée l'iframe optimisée
    const iframe = document.createElement('iframe');
    iframe.src = SIMULATOR_URL;
    iframe.style.cssText = `
      width: 100%;
      height: 500px;
      border: none;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      display: block;
    `;
    iframe.setAttribute('title', 'Simulateur de Charte Graphique');
    iframe.setAttribute('loading', 'lazy');
    
    // Responsive height adjustment
    function adjustHeight() {
      if (window.innerWidth < 768) {
        iframe.style.height = '550px';
      } else {
        iframe.style.height = '500px';
      }
    }
    
    adjustHeight();
    window.addEventListener('resize', adjustHeight);
    
    // Injecte l'iframe
    container.innerHTML = '';
    container.appendChild(iframe);
  });
})();

