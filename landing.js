// landing.js: alternar tema claro/oscuro con tecla T
(function() {
  const root = document.documentElement;
  const logo = document.querySelector('.logo');
  const lightLogo = 'assets/ZXY Logos/ZXY_Ventures_Logo_02_Black.svg';
  const darkLogo = 'assets/ZXY Logos/ZXY_Ventures_Logo_02_White.svg';

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (logo) {
      logo.src = theme === 'dark' ? darkLogo : lightLogo;
    }
  }

  const media = window.matchMedia('(prefers-color-scheme: dark)');
  // Tema inicial
  applyTheme(media.matches ? 'dark' : 'light');

  // Escuchar cambios de preferencia
  media.addEventListener('change', e => {
    applyTheme(e.matches ? 'dark' : 'light');
  });
})();
