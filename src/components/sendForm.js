// Отправка данных формы на сервер
const sendForm = formName => {
  // сообщения о статусе отправки
  const errorMessage = 'Что-то пошло не так...';
  const loadMessage = 'Загрузка...';
  const successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

  // сообщение о статусе отправки данных
  const message = document.createElement('div');

  // форма
  const form = document.getElementById(formName);

  // все инпуты внутри формы
  const inputs = [
    ...document.querySelectorAll(`#${formName}>.form-group input`),
    ...document.querySelectorAll(`#${formName}>.form-group textarea`)
  ];

  // функция отправки данных на сервер
  const postData = body  => fetch('./server.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  // Отправка данных
  form.addEventListener('submit', e => {
    e.preventDefault();

    // добавляем сообщение в документ
    form.append(message);
    message.textContent = loadMessage;

    // создаем объект Form
    const formData = new FormData(form);

    // готовим тело запроса для отправки
    const body = {};
    for (const [key, value] of formData) { body[key] = value; }

    // отправляем данные на сервер
    postData(body)
      .then(response => {
        if (response.status !== 200) { throw new Error('Response status code is not 200'); }
        message.textContent = successMessage;
      })
      .catch(error => {
        message.textContent = errorMessage;
        console.error(error);
      })
      .finally(() => {
        // очистка инптутов
        inputs.forEach(item => item.value = '');
        // удаление сообщения о статусе отправки
        setTimeout(() => message.remove(), 4000);
      });
  });

  // Валидация данных
  form.addEventListener('input', e => {
    const target = e.target;
    // Валидация данных при вводе телефона
    if (target.matches('input[name="tel"]')) {
      target.setAttribute('pattern', '^[0-9+]{11,12}$');
      target.value = target.value.replace(/[^\d+]/g, '');
    }
    // Валидация данных при вводе имени
    if (target.matches('input[name="fio"]')) {
      target.setAttribute('pattern', '[А-Яа-яЁё-]{2,25}');
      target.value = target.value.replace(/[^А-Яа-яЁё\s-]|/g, '');
    }
    // Валидация данных при вводе сообщения
    if (target.matches('textarea[name="message"]')) {
      target.setAttribute('type', 'text');
      target.value = target.value.replace(/[^А-Яа-яЁё\s().,!?'";:-]/g, '');
    }
  });
};

export default sendForm;
