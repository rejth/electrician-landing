const slider = () => {
  const sliderContainer = document.querySelector('.top-slider');
  console.log(sliderContainer);
  const dotsContainer = document.querySelector('.slider-dots');
  console.log(dotsContainer);
  const slides = document.querySelectorAll('.slider-item');
  console.log(slides);

  let currentSlide = 0;
  let idInterval;

  // добавляем пагинацию
  slides.forEach((item, index) => {
    const li = document.createElement('li');
    if (index === 0) {
      li.classList.add('dot');
      li.classList.add('dot-active');
    } else {
      li.classList.add('dot');
    }
    dotsContainer.append(li);
  });

  const dots = document.querySelectorAll('.dot');

  // удаляем активный класс у текущего элемента слайдера
  const prevSlide = (element, index, strClass) => {
    element[index].classList.remove(strClass);
  };

  // добавляем активный класс следующему элементу слайдера
  const nextSlide = (element, index, strClass) => {
    element[index].classList.add(strClass);
  };

  // автоматическое переключение слайдов
  const autoPlaySlider = () => {
    prevSlide(slides, currentSlide, 'portfolio-item-active'); // скрываем текущий слайд
    prevSlide(dots, currentSlide, 'dot-active'); // удаляем активный стиль пагинации текущего слайда

    currentSlide++;

    if (currentSlide === slides.length) { currentSlide = 0; }

    nextSlide(slides, currentSlide, 'portfolio-item-active'); // делаем видимым следующий слайд
    nextSlide(dots, currentSlide, 'dot-active'); // добавялем активный стиль пагинации следующего слайда
  };

  // запуск слайдшоу
  const startAutoPlay = () => { idInterval = setInterval(autoPlaySlider, 3000); };
  startAutoPlay();

  // останов слайдшоу
  const stopAutoPlay = () => { clearInterval(idInterval); };

  // останов слайдшоу при наведении на пагинацию
  sliderContainer.addEventListener('mouseover', e => {
    if (e.target.matches('.dot')) { stopAutoPlay(); }
  });

  // запуск слайдшоу в иных случаях
  sliderContainer.addEventListener('mouseout', e => {
    if (e.target.matches('.dot')) { startAutoPlay(); }
  });

  // переключение слайдов по клику на кнопку или пагинацию
  sliderContainer.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target;

    // условие для предовращения влияния клика по слайду на верстку
    if (!target.matches('.dot')) { return; }

    // удаляем стили у текущего слайда и пагинации
    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');

    // обработка клика по пагинации
    if (target.matches('.dot')) {
      dots.forEach((dot, index) => {
        if (dot === target) { currentSlide = index; }
      });
    }

    // добавляем стили следующему слайду и пагинации
    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  });
};

export default slider;
