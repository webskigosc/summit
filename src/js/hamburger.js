export function initHamburgerMenu() {
  const menuButton = document.querySelector('.js-button-menu');
  const menuContainer = document.querySelector('.main-header');

  function closeMenu() {
    menuButton.setAttribute('aria-expanded', 'false');
    menuContainer.classList.remove('menu-open');
  }

  function openMenu() {
    menuButton.setAttribute('aria-expanded', 'true');
    menuContainer.classList.add('menu-open');
  }

  menuButton.addEventListener('click', function () {
    if (menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    } else {
      openMenu();
    }
  }, false);

  closeMenu();
}
