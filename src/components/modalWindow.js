const modalWindow = () => {
  const modalWindow = document.querySelector('.modal-callback');
  const modalOverlay = document.querySelector('.modal-overlay');

  document.addEventListener('click', e => {
    e.preventDefault();

    // открытие окна
    if (e.target.matches('.callback-btn')) {
      modalWindow.style.display = 'block';
      modalOverlay.style.display = 'block';
    }
    // закрытие окна
    if (e.target.closest('.modal-close') || e.target.closest('.modal-overlay')) {
      modalWindow.style.display = 'none';
      modalOverlay.style.display = 'none';
    }
  });
};

export default modalWindow;
