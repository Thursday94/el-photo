
(function(){
  document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav') || document.querySelector('nav');
    if (!burger || !nav) return;

    // сбросим любые стартовые "open"
    nav.classList.remove('nav--open','open','menu--open');
    burger.classList.remove('burger--active');
    burger.setAttribute('aria-expanded','false');
    document.body.classList.remove('no-scroll');

    burger.addEventListener('click', (e) => {
      const isOpen = nav.classList.toggle('nav--open');
      burger.classList.toggle('burger--active', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('no-scroll', isOpen);
    });

    // закрытие при клике вне меню
    document.addEventListener('click', (e) => {
      if (!nav.classList.contains('nav--open')) return;
      if (e.target.closest('.nav') || e.target.closest('.burger')) return;
      nav.classList.remove('nav--open');
      burger.classList.remove('burger--active');
      burger.setAttribute('aria-expanded','false');
      document.body.classList.remove('no-scroll');
    });

    // сброс при ресайзе
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        nav.classList.remove('nav--open','open','menu--open');
        burger.classList.remove('burger--active');
        burger.setAttribute('aria-expanded','false');
        document.body.classList.remove('no-scroll');
      }
    });
  });
})();

