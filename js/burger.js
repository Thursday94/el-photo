
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('burger--active');  // анимация крестика
      nav.classList.toggle('nav--open');          // показать / скрыть меню
      document.body.classList.toggle('no-scroll'); // блокировка скролла фона
    });

    // Закрываем меню по клику на пункт
    nav.addEventListener('click', (event) => {
      if (event.target.classList.contains('nav__link')) {
        burger.classList.remove('burger--active');
        nav.classList.remove('nav--open');
        document.body.classList.remove('no-scroll');
      }
    });
  }

