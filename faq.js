const subcontent = document.querySelectorAll('.subcontent');
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const arrows = document.querySelectorAll('.question-head img');
let container = '';

function handleClick(e) {
    if (e.target.parentElement === e.currentTarget) return

    questions.forEach(quest => {
        quest.style.color = 'var(--dark-grayish-blue)';
    });
    answers.forEach(ans => {
        ans.hidden = 'true';
    });
    arrows.forEach(arrow => {
        arrow.classList.remove('active');
    })

    const sub = e.currentTarget;
    let random = e.currentTarget.id;
    const question = sub.querySelector('.question');
    const arrow = sub.querySelector('.question-head img');
    const answer = sub.querySelector('.answer');

    
    if (container === random) {
        question.style.color = 'var(--dark-grayish-blue)';
        arrow.classList.remove('active');
        answer.hidden = true;
        container = '';
    } else {
        question.style.color = 'var(--very-dark-desaturated-blue)';
        arrow.classList.add('active');
        answer.hidden = false;
        container = random;
    }
};

subcontent.forEach(button => button.addEventListener('click', handleClick));