const overlay = document.querySelector('.overlay');

const popup = document.querySelector('.popup');

const form = document.querySelector('form');

const closePopupButton = document.querySelector('.close-button');

const togglePopup = (e) => {
  e.preventDefault();

  overlay.classList.toggle('overlay--active');

  popup.classList.toggle('popup--active');
};

form.addEventListener('submit', togglePopup);

closePopupButton.addEventListener('click', togglePopup);
