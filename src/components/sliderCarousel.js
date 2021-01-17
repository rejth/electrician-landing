export default class SliderCarousel {
  constructor() {
    this.servicesMain = document.querySelector('.services-elements'); // main container
    this.carouselWrapper = document.querySelector('.services-carousel'); // carousel wrapper
    this.slides = this.carouselWrapper.children; // слайды карусели

    this.prev = document.querySelector('.services-arrow .arrow-left'); // кнопка назад
    this.next = document.querySelector('.services-arrow .arrow-right'); // кнопка вперед

    this.slidesToShow = 3; // стандартное количество слайдов на странице

    this.options = {
      position: 0, // позиция слайда при пролистывании
      widthSlide: 100 / Math.floor(this.slidesToShow), // ширина слайда в %
      infinity: Infinity, // опция для бесконечного листания слайдов
      // максимальный позиция слайда при пролситывания (количество кликов по кнопке)
      maxPosition: this.slides.length - this.slidesToShow
    };

    // настройки для адаптива
    this.responsive = [
      {
        breakpoint: 992,
        slideToShow: 2
      },
      {
        breakpoint: 768,
        slideToShow: 1
      }
    ];
  }

  // функция инициализации компонента
  init() {
    this.addCustomClass(); // добавление кастомных классов
    this.addCustomStyle(); // добавление кастомных стилей для карусели
    this.constrolSlider(); // переключение по кнопкам вперед и назад
    this.responsiveInit(); // включение адаптива
  }

  // функция адаптива дял карусели
  responsiveInit() {
    const slidesToShowDefault = this.slidesToShow;
    const allResponsive = this.responsive.map(item => item.breakpoint);
    const maxResponsive = Math.max(...allResponsive);

    const checkResponse = () => {
      const widthWindow = document.documentElement.clientWidth;
      if (widthWindow < maxResponsive) {
        for (let i = 0; i < allResponsive.length; i++) {
          if (widthWindow < allResponsive[i]) {
            this.slidesToShow = this.responsive[i].slideToShow;
            this.options.maxPosition = this.slides.length - this.slidesToShow;
            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
            this.addCustomStyle();
          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
        this.addCustomStyle();
      }
    };
    checkResponse();

    window.addEventListener('resize', () => checkResponse());
  }

  // функция переключения слайдов по кнопкам
  constrolSlider() {
    this.prev.addEventListener('click', () => this.prevSlide());
    this.next.addEventListener('click', () => this.nextSlide());
  }

  // функция перелистывания назад
  prevSlide() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      // автоматическая прокрутка в конец карусели, если пользователь листает назад от 0-го элемента
      if (this.options.position < 0) {
        this.options.position = this.options.maxPosition;
      }
      // перемещение враппера вперед по оси X на -N%
      this.carouselWrapper.style.transform = `translateX(-${this.options.widthSlide * this.options.position}%)`;
    }
  }

  // функция перелистывания вперед
  nextSlide() {
    if (this.options.infinity || this.options.position < this.options.maxPosition) {
      ++this.options.position;
      // автоматическая прокрутка в начало карусели, если пользователь листает вперед от последнего элемента
      if (this.options.position > this.options.maxPosition) {
        this.options.position = 0;
      }
      // перемещение враппера назад по оси X на -N%
      this.carouselWrapper.style.transform = `translateX(-${this.options.widthSlide * this.options.position}%)`;
    }
  }

  // функция добавления классов для стилизации карусели
  addCustomClass() {
    this.servicesMain.classList.add('our-services-custom');
    this.carouselWrapper.classList.add('services-carousel-custom');
    for (const item of this.slides) {
      item.classList.add('element-custom');
    }
  }

  // функция добавления стилей для карусели
  addCustomStyle() {
    const style = document.createElement('style');
    style.id = 'slider-carousel-style';
    style.textContent = `
      .our-services-custom {
        overflow: hidden;
      }
      .services-carousel-custom {
        display: flex;
        transition: transform 0.5s;
      }
      .element-custom {
        flex: 0 0 ${this.options.widthSlide}%;
        margin: 0 0 20px 0;
      }
    `;
    // добавляем тэг style в документ
    document.head.append(style);
  }
}
