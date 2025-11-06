// Language Toggle Functionality
let currentLang = localStorage.getItem('language') || 'es';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);

  // Update all elements with data-lang attributes
  document.querySelectorAll('[data-lang-es]').forEach((element) => {
    const text = element.getAttribute(`data-lang-${lang}`);
    if (text) {
      element.innerHTML = text;
    }
  });

  // Update language toggle button
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.innerHTML = `<i class="bi bi-translate"></i> ${
      lang === 'es' ? 'EN' : 'ES'
    }`;
  }

  // Update copy email button text
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn && copyEmailBtn.textContent.includes('Copiado')) {
    copyEmailBtn.textContent = lang === 'es' ? '¡Copiado!' : 'Copied!';
  }

  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function () {
  // Set initial language
  setLanguage(currentLang);

  // Language toggle button
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      const newLang = currentLang === 'es' ? 'en' : 'es';
      setLanguage(newLang);
    });
  }

  // CV Download alert
  const cvBtn = document.querySelector('a[download]');
  if (cvBtn) {
    cvBtn.addEventListener('click', function () {
      const message =
        currentLang === 'es'
          ? '¡Gracias por descargar mi CV!'
          : 'Thank you for downloading my CV!';
      alert(message);
    });
  }
});
