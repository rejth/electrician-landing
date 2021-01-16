const slider = () => {
  const sliderContainer = document.querySelector('.top-slider');
  const slides = document.querySelectorAll('.item');

  let currentSlide = 0;
  let idInterval;

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
  const startAutoPlay = () => { idInterval = setInterval(autoPlaySlider, 3000); };
  startAutoPlay();

  // функция остановки слайдшоу
  const stopAutoPlay = () => { clearInterval(idInterval); };

  // останов слайдшоу при наведении мыши на слайдер
  sliderContainer.addEventListener('mouseover', e => {
    if (e.target.matches('.top-slider')) { stopAutoPlay(); }
  });

  // запуск слайдшоу в иных случаях
  sliderContainer.addEventListener('mouseout', e => {
    if (e.target.matches('.top-slider')) { startAutoPlay(); }
  });
};

export default slider;
