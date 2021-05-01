do {
    var lastName = prompt("Введите вашу фамилию", '');
} while (lastName === '');

do {
    var firstName = prompt('Введите вашe имя:', '');
} while (firstName === '');

do {
    var secondName = prompt('Введите ваше отчество:', '');
} while (secondName === '');

do {
    var fullYears = parseInt(prompt('Сколько вам лет:', ''), 10);
} while (isNaN(fullYears));

var gender = confirm('Ваш пол - мужской?');
var pension = false;



if (gender && (fullYears >= 63)) {
    pension = true;
} else if (!gender && (fullYears >= 58)) {
    pension = true;
}

var fullName = firstName + ' ' + secondName + ' ' + lastName;
var ageInDays = Math.floor(fullYears * 365.2425);
var futureYears = fullYears + 5;

gender = (gender) ? 'мужской' : 'женский';
pension = (pension) ? 'да' : 'нет';

var finalMessage = 'ваше ФИО: ' + fullName + '\n' +
    'ваш возраст в годах: ' + fullYears + '\n' +
    'ваш возраст в днях: ' + ageInDays + '\n' +
    'через 5 лет вам будет: ' + futureYears + '\n' +
    'ваш пол: ' + gender + '\n' +
    'вы на пенсии: ' + pension;

alert(finalMessage);