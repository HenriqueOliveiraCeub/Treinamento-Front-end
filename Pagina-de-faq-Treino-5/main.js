document.addEventListener("DOMContentLoaded", function () {
    var answers = document.querySelectorAll('.answer');
    answers.forEach(function (answer) {
        answer.style.display = 'none';
    });
});

function toggleAnswer(cardNumber) {
    var answerId = "answer" + cardNumber;
    var answerElement = document.getElementById(answerId);
    var iconElementId = "icon-plus-" + cardNumber;
    var iconElement = document.getElementById(iconElementId);

    if (answerElement.style.display === "none" || answerElement.style.display === "") {
        answerElement.style.display = "block";
        // Trocar para o ícone de menos quando a resposta estiver visível
        iconElement.src = "asserts/img/icon-minus.svg";
    } else {
        answerElement.style.display = "none";
        // Trocar de volta para o ícone de mais quando a resposta estiver oculta
        iconElement.src = "asserts/img/icon-plus.svg";
    }
}