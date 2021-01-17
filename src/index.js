import modalWindow from './components/modalWindow';
import scroll from './components/scroll';
import sendForm from './components/sendForm';
import slider from './components/slider';
import accordeon from './components/accordeon';
import SliderCarousel from './components/sliderCarousel';

// Модальное окно
modalWindow();

// Плавный скролл
scroll();

// Отправка данных формы на сервер
sendForm('form-callback');
sendForm('form-feedback');
sendForm('form-application');

// Слайдер
slider();

// Аккордеон
accordeon();

// Сладер-карусель
const carousel = new SliderCarousel();
carousel.init();
