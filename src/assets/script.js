
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const serviceCards = document.querySelectorAll('.service-card');

  window.addEventListener('scroll', () => {
    serviceCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        card.classList.add('visible');
      }
    });
  });
  
  // Ejecutar al hacer scroll
window.addEventListener('scroll', checkVisibility);

// Ejecutar al cargar la página o volver al inicio
window.addEventListener('load', checkVisibility);