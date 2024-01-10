document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here


    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
    const plusIcon = question.querySelector('.plus-icon');
    const minusIcon = question.querySelector('.minus-icon');
    const answer = question.querySelector('p');

    plusIcon.addEventListener('click', () => {
        // Toggle visibility of answer paragraph
        answer.style.display = 'block';
        // Toggle visibility of plus and minus icons
        plusIcon.style.display = 'none';
        minusIcon.style.display = 'inline-block';
    });

    minusIcon.addEventListener('click', () => {
        // Toggle visibility of answer paragraph
            answer.style.display = 'none';
        // Toggle visibility of plus and minus icons
        plusIcon.style.display = 'inline-block';
        minusIcon.style.display = 'none';
        });
    });

});