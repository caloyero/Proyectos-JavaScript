const questionBtn = document.querySelector('.question-btn');
const questionText = document.querySelector('.question-title');

questionBtn.addEventListener('click', function () {
    questionText.classList.toggle('show-text');
});


//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");
    // console.log(btn);

    btn.addEventListener("click", function () {
        // console.log(question);

        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");
    });
});