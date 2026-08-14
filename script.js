const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  });
});

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
