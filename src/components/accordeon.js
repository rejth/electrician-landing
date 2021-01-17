const accordeon = () => {
  const accordeonElements = document.querySelectorAll('.accordeon .element');

  // функция переключения элемента
  const toggleElement = (element, elementContent)  => {
    element.classList.toggle('active'); // включаем стили активного элемента
    if (element.classList.contains('active')) {
      elementContent.style.display = 'block'; // показываем контент
    } else {
      elementContent.style.display = 'none'; // скрываем контент
    }
  };

  // функция скрытия других элементов при клике на выбранный
  const hideElements = element => {
    // массив элементов, кроме элемента, кликнутого пользователем
    const notClickedElements = [...accordeonElements].filter(item => item !== element);
    // скрываем элементы
    notClickedElements.forEach(item => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
        item.childNodes[3].style.display = 'none';
      }
    });
  };

  accordeonElements.forEach(element => {
    const elementContent = element.childNodes[3];

    element.addEventListener('click', e => {
      if (e.target.closest('.accordeon .element')) {
        toggleElement(element, elementContent);

        if (element.classList.contains('active')) {
          hideElements(element);
        }
      }
    });
  });
};

export default accordeon;
