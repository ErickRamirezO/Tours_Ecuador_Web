var i18next = window.i18next || {};
var LanguageDetector = window.i18nextBrowserLanguageDetector;

i18next
  .use(LanguageDetector)
  .init({
    fallbackLng: 'es', // Idioma predeterminado en español
    debug: true // Modo de depuración 
  });
