// Скролл от якорных ссылок в навигации до целевых элементов
const scroll = () => {
  const anchorLinks = document.querySelectorAll('.top-menu>ul>li>a');

  // функция плавного скролла
  const scrollDown = offsetPosition => {
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
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

      scrollDown(offsetPosition);
    });
  });
};

export default scroll;
