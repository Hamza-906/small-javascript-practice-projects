const okBtn = document.querySelector('.popup button');
const submitBtn = document.querySelector('.container .btn');
const popup = document.getElementById('popup');

const openPopup = () => {
    popup.classList.add('open-popup');
};

const closePopup = () => {
    popup.classList.remove('open-popup');
};

okBtn.addEventListener('click', () => {
    closePopup();
});

submitBtn.addEventListener('click', () => {
    openPopup();
});