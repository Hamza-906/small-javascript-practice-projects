const questions = [
    {
        'que' : 'Which one following is a markup languages?',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'JavaScript',
        'd' : 'PHP',
        'correct' : 'a'
    },
    {
        'que' : 'Which of the following is NOT a JavaScript framework?',
        'a' : 'React',
        'b' : 'Angular',
        'c' : 'Vue',
        'd' : 'Laravel',
        'correct' : 'a'
    },
    {
        'que' : 'Which CSS property is used to change the text color?',
        'a' : 'font-color',
        'b' : 'color',
        'c' : 'background-color',
        'd' : 'text-style',
        'correct' : 'b'
    },
    {
        'que' : 'Which symbol is used for comments in JavaScript?',
        'a' : '//',
        'b' : '<!-- -->',
        'c' : '#',
        'd' : '/* */',
        'correct' : 'a'
    }
];

let index = 0;
let right = 0, wrong = 0;
let total = questions.length;
let selectedQuizes = 0;

const queBox = document.getElementById('quebox');
const optionInputs = document.querySelectorAll('.options');

const loadQuestions = () => {
    if(index === total && selectedQuizes === total){
        return endQuiz();
    }
    else{
        reset();
    }
    const data = questions[index];
    queBox.innerText = `${index+1}- ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
        if (ans === data.correct){
            right++;
        } else {
            wrong++;
        }
    index++;
    loadQuestions();
    return;
}

const nextQuiz = () => {
    if (index < total - 1) {
        index++;
        loadQuestions();
    } else {
        // stay on last question
        alert("You are already on the last question.");
    }
    return;
}

const previousQuiz = () => {
    if (index > 0) {
        index--;
        loadQuestions();
    } else {
        // stay on first question
        alert("You are already on the first question.");
    }
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if(input.checked){
            answer = input.value;
            selectedQuizes++
        }
    });
    return answer;
};

const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    });
};

const refreshPage= () => {
    location.reload(true);
}

const endQuiz = () => {
    document.getElementById('box').innerHTML = `
    <h3 class="endNote">Thank you for completing!</h3>
    <h2 class="endScore">${right} option is correct.</h2>
    <button class="btn2" onclick="refreshPage()">Restart</button>
    `;
};

loadQuestions();
