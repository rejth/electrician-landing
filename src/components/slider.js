const slider = () => {
  const slides = document.querySelectorAll('.item');

  let currentSlide = 0;

  // функция удаления активного класса у текущего элемента слайдера
  const prevSlide = (element, index, strClass) => {
    element[index].classList.remove(strClass);
  };

  // функция добавления активного класса следующему элементу слайдера
  const nextSlide = (element, index, strClass) => {
    element[index].classList.add(strClass);
  };

  // функция автоматического переключения слайдов
  const autoPlaySlider = () => {
    prevSlide(slides, currentSlide, 'item-active'); // скрываем текущий слайд
    currentSlide++;

    if (currentSlide === slides.length) { currentSlide = 0; }

    nextSlide(slides, currentSlide, 'item-active'); // делаем видимым следующий слайд
  };

  // функция запуска слайдшоу
  const startAutoPlay = () => { setInterval(autoPlaySlider, 3000); };
  startAutoPlay();
};

export default slider;
