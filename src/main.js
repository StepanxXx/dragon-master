(() => {

  const refs_menu = {
    // Додати атрибут data-menu-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-menu-open]'),
    // Додати атрибут data-menu-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-menu-close]'),
    // Додати атрибут data-menu на бекдроп модалки
    menu: document.querySelector('[data-menu]'),
  };

  refs_menu.openModalBtn?.addEventListener('click', toggleMenu);
  refs_menu.closeModalBtn?.addEventListener('click', toggleMenu);

  function toggleMenu() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs_menu.menu.classList.toggle('is-open');
  }

})();