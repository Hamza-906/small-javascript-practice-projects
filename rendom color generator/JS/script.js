const body = document.querySelector('body');
const btn = document.querySelector('#btn');
const dispCode = document.querySelector('p');

const getCode = () => {
    const randNumber = Math.floor(Math.random() * 16777216);
    console.log(randNumber);
    let randColor = '#' + randNumber.toString(16).padStart(6, '0');
    body.style.backgroundColor = randColor;
    dispCode.innerText = randColor;

    navigator.clipboard.writeText(randColor);
}

btn.addEventListener('click', getCode);

getCode();