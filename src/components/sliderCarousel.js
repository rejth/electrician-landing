export default class SliderCarousel {
  constructor() {
    this.servicesMain = document.querySelector('.our-services'); // main container (+ buttons)
    this.carouselWrapper = document.querySelector('.services-carousel'); // carousel wrapper
    this.slides = document.querySelectorAll('.services-carousel .element'); // слайды

    this.prev = document.querySelector('.services-arrow .arrow-left'); // кнопка назад
    this.next = document.querySelector('.services-arrow .arrow-right'); // кнопка вперед

    this.slidesToShow = 3;

    this.options = {
      position: 0,
      widthSlide: 100 / Math.floor(this.slidesToShow),
      infinity: Infinity,
      maxPosition: this.slides.length - this.slidesToShow
    };

    this.responsive = [
      {
        breakpoint: 1024,
        slideToShow: 3
      },
      {
        breakpoint: 768,
        slideToShow: 2
      },
      {
        breakpoint: 576,
        slideToShow: 1
      }
    ];
  }

  init() {
    this.addCustomClass();
    this.addCustomStyle();
    this.constrolSlider();
    this.responsiveInit();
  }

  responsiveInit() {
    const slidesToShowDefault = this.slidesToShow;
    const allResponse = this.responsive.map(item => item.breakpoint);
    const maxResponse = Math.max(...allResponse);

  }


  constrolSlider() {
    this.prev.addEventListener('click', () => this.prevSlide());
    this.next.addEventListener('click', () => this.nextSlide());
  }

  prevSlide() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      if (this.options.position < 0) {
        this.options.position = this.options.maxPosition;
      }
      this.carouselWrapper.style.transform = `translateX(-${this.options.widthSlide * this.options.position}%)`;
    }
  }

  nextSlide() {
    if (this.options.infinity || this.options.position < this.options.maxPosition) {
      ++this.options.position;
      if (this.options.position > this.options.maxPosition) {
        this.options.position = 0;
      }
      this.carouselWrapper.style.transform = `translateX(-${this.options.widthSlide * this.options.position}%)`;
    }
  }

  addCustomClass() {
    this.servicesMain.classList.add('our-services-custom');
    this.carouselWrapper.classList.add('services-carousel-custom');
    this.slides.forEach(item => item.classList.add('element-custom'));
  }

  addCustomStyle() {
    // создаем тэг style с id
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

    document.head.append(style);
  }
}
