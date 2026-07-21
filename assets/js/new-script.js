// ── Dot Navigation — highlight active section on scroll ──
const dots = document.querySelectorAll('.dot-nav .dot');
const sections = document.querySelectorAll('.section');

const observerOptions = {
  root: null,
  rootMargin: '-40% 0px -40% 0px',
  threshold: 0,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      dots.forEach((dot) => {
        dot.classList.toggle('active', dot.getAttribute('href') === `#${id}`);
      });
    }
  });
}, observerOptions);

sections.forEach((section) => sectionObserver.observe(section));

// ── FAQ accordion ──
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((btn) => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    const answer = btn.nextElementSibling;

    // close all
    faqQuestions.forEach((other) => {
      other.setAttribute('aria-expanded', 'false');
      other.nextElementSibling.classList.remove('open');
    });

    // open clicked (if it was closed)
    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      answer.classList.add('open');
    }
  });
});
