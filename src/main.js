document.addEventListener('DOMContentLoaded', () => {

  const refs_menu = {
    // Додати атрибут data-menu-open на кнопку відкриття
    openModalBtns: document.querySelectorAll('[data-menu-open]'),
    // Додати атрибут data-menu-close на кнопку закриття
    closeModalBtns: document.querySelectorAll('[data-menu-close]'),
    // Додати атрибут data-menu на бекдроп модалки
    menu: document.querySelector('[data-menu]'),
  };

  refs_menu.openModalBtns.forEach(btn => btn.addEventListener('click', toggleMenu));
  refs_menu.closeModalBtns.forEach(btn => btn.addEventListener('click', toggleMenu));

  function toggleMenu() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs_menu.menu.classList.toggle('is-open');
  }

  // === Встановлення активного класу для посилань меню залежно від URL ===
  function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.main-nav-link');
    // Отримуємо поточний хеш
    let currentHash = window.location.hash;
    if (currentHash === '') return;
      
    // Перебираємо всі посилання і оновлюємо клас
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === currentHash) {
        link.classList.add('active');
      }
    });
  }

  // Викликаємо функцію одразу при завантаженні
  updateActiveNavLink();

  // Відстежуємо подальші зміни URL (при кліках по пунктах меню)
  window.addEventListener('hashchange', updateActiveNavLink);

});
