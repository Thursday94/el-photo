
(function(){
  document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav') || document.querySelector('nav');
    if (!burger || !nav) return;

    // ссылки внутри навигации (фильтруем реальные <a>)
    const links = Array.from(nav.querySelectorAll('a'));

    // Сброс начальных состояний
    nav.classList.remove('nav--open', 'open', 'menu--open');
    burger.classList.remove('burger--active', 'is-open');
    burger.setAttribute('aria-expanded', 'false');
    nav.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');

    // Открыть меню
    function openMenu() {
      nav.classList.add('nav--open');
      nav.setAttribute('aria-hidden', 'false');
      burger.classList.add('burger--active');
      burger.setAttribute('aria-expanded', 'true');
      document.body.classList.add('no-scroll');
    }

    // Закрыть меню
    function closeMenu() {
      nav.classList.remove('nav--open', 'open', 'menu--open');
      nav.setAttribute('aria-hidden', 'true');
      burger.classList.remove('burger--active', 'is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
    }

    // Toggle on burger click
    burger.addEventListener('click', (e) => {
      const isOpen = nav.classList.toggle('nav--open');
      if (isOpen) {
        openMenu();
      } else {
        closeMenu();
      }
    });

    // Закрыть при клике на любую ссылку в меню
    links.forEach(link => {
      link.addEventListener('click', () => {
        // если ссылка ведёт на якорь на той же странице, даём ей время на скролл — но можно сразу закрывать
        closeMenu();
      });
    });

    // Закрыть клавишей Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && burger.classList.contains('burger--active')) {
        closeMenu();
      }
    });

    // Закрытие при клике вне меню
    document.addEventListener('click', (e) => {
      if (!nav.classList.contains('nav--open')) return;
      if (e.target.closest('.nav')) return;
      if (e.target.closest('.burger')) return;
      closeMenu();
    });

    // Сброс при ресайзе (например, при переходе на desktop)
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  });
})();

