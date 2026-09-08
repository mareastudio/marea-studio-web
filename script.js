const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const menuLabel = menuButton?.querySelector('.sr-only');
const siteHeader = document.querySelector('.site-header');

const closeMenu = () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  navigation?.classList.remove('is-open');
  if (menuLabel) menuLabel.textContent = 'Abrir menú';
  document.body.classList.remove('menu-open');
};

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
  if (menuLabel) menuLabel.textContent = isOpen ? 'Abrir menú' : 'Cerrar menú';
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 760) closeMenu();
});

document.addEventListener('click', (event) => {
  if (menuButton?.getAttribute('aria-expanded') !== 'true') return;
  if (!navigation?.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});

const updateHeader = () => siteHeader?.classList.toggle('is-scrolled', window.scrollY > 16);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = `Consulta web — ${data.get('marca') || data.get('nombre')}`;
  const body = [
    `Nombre: ${data.get('nombre')}`,
    `Negocio / marca: ${data.get('marca') || 'No indicado'}`,
    `Email: ${data.get('email')}`,
    `Instagram o web: ${data.get('web') || 'No indicado'}`,
    `Qué necesita: ${data.get('necesidad')}`,
    '',
    'Idea:',
    data.get('idea'),
  ].join('\n');

  window.location.href = `mailto:marea.studioweb@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
