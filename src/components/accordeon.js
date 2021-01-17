const accordeon = () => {
  const accordeonContainer = document.querySelector('.accordeon');
  console.log(accordeonContainer);

  const accordeonElements = document.querySelectorAll('.accordeon .element');
  console.log(accordeonElements);

  const elementTitles = document.querySelectorAll('.accordeon .title');
  console.log(elementTitles);

  const elementContents = document.querySelectorAll('.accordeon .element-content');
  console.log(elementContents);

  accordeonContainer.addEventListener('click', e => {
    if (e.target.closest('.accordeon .element')) {
      console.log('Clicked!');

      e.target.parentNode.classList.toggle('active');
      e.target.parentNode.childNodes[3].style.display = 'block';

      if (e.target.parentNode.classList.contains('active')) {
        console.log('Active!');

        const otherAccordeonElements = [...accordeonElements].filter(item => item !== e.target.parentNode);
        console.log(otherAccordeonElements);

        otherAccordeonElements.forEach(item => {
          if (item.classList.contains('active')) {
            item.classList.remove('active');
            item.childNodes[3].style.display = 'none';
          } else {
            return;
          }
        });
      }
    }
  });
};

export default accordeon;
