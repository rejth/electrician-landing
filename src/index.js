import modalWindow from './components/modalWindow';
import scroll from './components/scroll';
import sendForm from './components/sendForm';

// Модальное окно
modalWindow();

// Скролл от якорных ссылок до соответстбущих блоков
scroll();

// Отправка данных на сервер
sendForm('form-callback');
sendForm('form-feedback');
sendForm('form-application');
