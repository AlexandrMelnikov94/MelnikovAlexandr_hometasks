(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans, result) {
        var score = 0;
        if (ans === this.correct) {
            score = result(true);
            console.log('Correct answer!' + ' Score: ' + score);
        } else {
            score = result(false);
            console.log('Wrong answer. Try again :)' + 'Score ' + score);
        }

        this.displayScore(score);
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
        ['Yes', 'No'],
        0);

    var q2 = new Question('What is the name of this course\'s teacher?',
        ['John', 'Micheal', 'Jonas'],
        2);

    var q3 = new Question('What does best describe coding?',
        ['Boring', 'Hard', 'Fun', 'Tediuos'],
        2);

    var questions = [q1, q2, q3];

    function scoreCounter() {
        var n = 0;
        return function (correct) {
            if (correct) {
                n++;
            }
            return n;
        }
    }

    var totalScore = scoreCounter();

    Question.prototype.displayScore = function (score) {
    }
    
    function repeatQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer.');
        if (answer !== null && answer.toLowerCase() !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), totalScore);
            repeatQuestion();
        } else {
            console.log('Final score: ' + totalScore());
        }
    }

    repeatQuestion();
})();