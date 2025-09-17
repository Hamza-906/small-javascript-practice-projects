const passwordBox = document.getElementById('password');
const generateBtn = document.querySelector('.container button');
const copyBtn = document.querySelector('.display img');

const lenght = 12;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!@#$%^&*()_+|~[]{}<>?./=_';
const allChars = upperCase + lowerCase + number + symbol;

const createPassword = () => {
    let password = '';

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

generateBtn.addEventListener('click', (e)=> {
    createPassword();
    e.preventDefault;
});

copyBtn.addEventListener('click', ()=> {
    window.navigator.clipboard.writeText(passwordBox.value);
    copyBtn.classList.add("fade-out");

  // Wait for fade-out to finish before changing image
  setTimeout(() => {
    copyBtn.src = "images/copied.png"; // new image
    copyBtn.classList.remove("fade-out"); // fade back in
  }, 400); // same as transition duration

    setTimeout(() => {
    copyBtn.src = "images/copy.png"; // new image
  }, 2000);
});