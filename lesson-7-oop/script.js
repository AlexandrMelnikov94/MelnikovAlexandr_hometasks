(function() {
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.showQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.chekAnswer = function (answer) {
        if (answer === this.correctAnswer) {
            console.log('Your are right!!!');
        } else {
            console.log('Wrong answer!');
        }
    }

    var questionOne = new Question('Were are yo live?', ['Grondo', 'Minsk', 'Gomel', 'Vitebsk'], 0);
    var questionTwo = new Question('Capital of GB?', ['Moscow', 'Minsk', 'London', 'Paris'], 2);
    var questionThree = new Question('Capital of USA?', ['Moscow', 'London', 'NewYork', 'Washington'], 3);

    var questionsPull = [questionOne, questionTwo, questionThree];
    var whatQuestion = Math.floor(Math.random() * questionsPull.length);
    questionsPull[whatQuestion].showQuestion();

    var yourAnswer = parseInt(prompt('Choose answer'));
    questionsPull[whatQuestion].chekAnswer(yourAnswer);
})();