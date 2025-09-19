const URL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

const userInput = document.querySelector('.container input');
const generateBtn = document.querySelector('.container button');
const QR_Img = document.querySelector('.QR-code .QR-img');
const QR_code = document.querySelector('.QR-code');

const showQRCode = () => {
    if(userInput.value.length > 0) {
       const QR_Url = `${URL}${userInput.value}`;
       QR_Img.src = QR_Url;
       QR_code.classList.add('show-img');
    } else {
        userInput.classList.add('error');
        setTimeout(() => {
        userInput.classList.remove('error');
        }, 2000)
    }
}

generateBtn.addEventListener('click', () => {
    showQRCode();
});