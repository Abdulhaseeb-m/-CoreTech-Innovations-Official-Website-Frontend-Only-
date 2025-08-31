// Activate AOS animations
AOS.init({ once: true, duration: 700, easing: 'ease-out-quint' });

// Bootstrap form validation
(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

// Highlight active nav link
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar .nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === path) {
    link.classList.add('active');
  }
});
