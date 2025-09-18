const URL = 'https://quotes-api-self.vercel.app/quote';

const quoteNote = document.querySelector('.quote-box blockquote');
const generateBtn = document.querySelector('.quote-box #generate-btn');
const tweetBtn = document.querySelector('.quote-box #tweet');
const quoteAurthor = document.querySelector('.quote-box span');

const generateQuote = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    quoteNote.innerText = data.quote;
    quoteAurthor.innerText = data.author;
}

const tweet = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quoteNote.innerText} ---by ${quoteAurthor.innerText}`, 'Tweet Window', 'width:600', 'height:300');
}

generateBtn.addEventListener('click', () => {
    generateQuote();
});
tweetBtn.addEventListener('click', () => {
    tweet();
});
