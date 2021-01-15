const modalWindow = () => {
  const modalWindow = document.querySelector('.modal-callback');
  const modalOverlay = document.querySelector('.modal-overlay');

  document.addEventListener('click', e => {
    // открытие окна
    if (e.target.matches('.callback-btn') ||
        e.target.closest('.mob-menu-btn') ||
        e.target.matches('.button-services') ||
        e.target.matches('.services-elements a')) {
      modalWindow.style.display = 'block';
      modalOverlay.style.display = 'block';
    }
    // закрытие окна
    if (e.target.closest('.modal-close') || e.target.matches('.modal-overlay')) {
      modalWindow.style.display = 'none';
      modalOverlay.style.display = 'none';
    }
  });
};

export default modalWindow;
