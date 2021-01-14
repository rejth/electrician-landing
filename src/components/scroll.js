// Скролл от якорных ссылок в навигации до целевых элементов
const scroll = () => {
  const anchorLinks = document.querySelectorAll('.top-menu>ul>li>a');
  const upButton = document.querySelector('.up');
  console.log(upButton);

  // функция плавного скролла для header
  const toggleHeaderScroll = offsetPosition => {
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  // функция плавного скролла вверх от элемента .up
  const toggleShevronScroll = target => {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  anchorLinks.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();

      const targetLink = e.target.getAttribute('href'); // ссылка на элемент
      const scrollTarget = document.querySelector(targetLink); // целевой элемент

      // высота header для отступа сверху
      const topOffset = document.querySelector('.header').offsetHeight;

      // позиция целевого элемента относительно видимой части страницы
      // scrollTarget.getBoundingClientRect() - возвращает объект со свойствами
      // визуально это прямоугольник, в котором содержится целевой элемент
      // свойство top - считает расстояние от верхнего левого угла window до целевого элемента
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      // от общей высоты документа отнимем высоту header и получим необходимое смещение в пикселях по оси Y.
      // это количество пикселей для прокрутки по оси Y
      const offsetPosition = elementPosition - topOffset;

      toggleHeaderScroll(offsetPosition);
    });
  });

  upButton.addEventListener('click', e => {
    e.preventDefault();
    const scrollTarget = document.querySelector('.main-wrapper');
    toggleShevronScroll(scrollTarget);
  });

  window.addEventListener('scroll', e => {
    if (e.target.matches('.services-section')) {
      upButton.style.display = 'none';
    } else {
      upButton.style.display = 'fixed';
    }
  });

};

export default scroll;
