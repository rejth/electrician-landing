// Скролл от якорных ссылок в навигации до целевых элементов
const scroll = () => {
  const upButton = document.querySelector('.up');
  const serviceSectionBlock = document.querySelector('.services-section');

  // функция плавного скролла для header
  const toggleHeaderScroll = target => {
    const targetLink = target.getAttribute('href'); // ссылка на элемент
    const scrollTarget = document.querySelector(targetLink); // целевой элемент

    // высота header для отступа сверху от целевого элемента
    const topOffset = document.querySelector('.header').offsetHeight;

    // позиция целевого элемента относительно видимой части страницы
    // scrollTarget.getBoundingClientRect() - возвращает объект со свойствами
    // визуально это прямоугольник, в котором содержится целевой элемент
    // свойство top - считает расстояние от верхнего левого угла window до целевого элемента
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    // от общей высоты документа отнимем высоту header
    // получим необходимое смещение в пикселях по оси Y.
    const offsetPosition = elementPosition - topOffset;

    // плавно скроллим до целевого элемента
    window.scrollBy({ top: offsetPosition, behavior: 'smooth' });
  };

  // функция плавного скролла вверх от элемента .up
  const toggleShevronScroll = () => {
    // верхняя точка документа
    const scrollTarget = document.querySelector('.main-wrapper');

    // плавно скроллим до header
    scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  document.addEventListener('click', e => {
    if (e.target.matches('.top-menu>ul>li>a')) {
      e.preventDefault();
      toggleHeaderScroll(e.target);
    }
    if (e.target.matches('.up')) {
      toggleShevronScroll();
    }
  });

  window.addEventListener('scroll', () => {
    // скрываем кнопку .up, когда достигаем верха документа
    if (document.documentElement.scrollTop === 0) {
      upButton.style.visibility = 'hidden';
    }
    // делаем видимой кнопку .up, когда доходим до блока "Наши услуги"
    if (document.documentElement.scrollTop + 300 > serviceSectionBlock.getBoundingClientRect().top) {
      upButton.style.visibility = 'visible';
    }
  });
};

export default scroll;
