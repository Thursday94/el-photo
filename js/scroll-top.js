(function () {
    const scrollBtn = document.querySelector('.scroll-top');

    if (!scrollBtn) return;

    function updateScrollProgress() {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;

      const progress = scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;

      // обновляем заполнение кольца
      document.documentElement.style.setProperty(
        '--scroll-progress',
        progress + '%'
      );

      // показываем кнопку после, например, 300px скролла
      if (scrollTop > 300) {
        scrollBtn.classList.add('scroll-top--visible');
      } else {
        scrollBtn.classList.remove('scroll-top--visible');
      }
    }

    // обновляем при загрузке и при скролле
    window.addEventListener('scroll', updateScrollProgress);
    window.addEventListener('load', updateScrollProgress);

    // клик — плавно наверх
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  })();
