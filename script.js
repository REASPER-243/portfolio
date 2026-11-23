(() => {
  const langButton = document.querySelector('.lang-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  let language = 'fr';

  function setLanguage(next) {
    language = next;
    document.documentElement.lang = next;
    document.querySelectorAll('[data-fr][data-en]').forEach((element) => {
      const value = element.dataset[next];
      if (value !== undefined) element.innerHTML = value;
    });
    langButton.textContent = next === 'fr' ? 'EN' : 'FR';
    langButton.setAttribute('aria-label', next === 'fr' ? 'Switch to English' : 'Passer en français');
    document.title = next === 'fr' ? 'Théophile Kibonge Ndobo — Portfolio' : 'Théophile Kibonge Ndobo — Portfolio';
  }
  langButton.addEventListener('click', () => setLanguage(language === 'fr' ? 'en' : 'fr'));
  menuButton.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(opened));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  document.getElementById('year').textContent = new Date().getFullYear();
})();
