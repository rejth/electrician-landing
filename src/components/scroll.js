// Скролл от якорных ссылок в навигации до целевых элементов
const scroll = () => {
  const anchorLinks = document.querySelectorAll('.top-menu>ul>li>a');

  // функция плавного скролла
  const scrollDown = target => {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  anchorLinks.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const targetLink = e.target.getAttribute('href');
      const scrollTarget = document.querySelector(targetLink);
      scrollDown(scrollTarget);
    });
  });
};

export default scroll;
