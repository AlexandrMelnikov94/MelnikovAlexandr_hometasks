var clockRadius = 500;
var numberRadius = 50;
var container = document.querySelector('.container');

container.appendChild(createClock());

function createClock() {
    var clock = document.createElement('div');
    clock.className = 'clock';
    clock.appendChild(createFace());
    clock.appendChild(createHands('second-hand'));
    clock.appendChild(createHands('min-hand'));
    clock.appendChild(createHands('hour-hand'));
    clock.appendChild(createDigitalClock());
    return clock;
}

function createFace() {
    var clockFace = document.createDocumentFragment();
    for (var i = 1; i <= 12; i++) {
        var degrees = (30 * i) / 180 * Math.PI;
        var x = ((clockRadius - numberRadius) / 2) + Math.round(Math.sin(degrees) * 500 / 2.5);
        var y = ((clockRadius - numberRadius) / 2) - Math.round(Math.cos(degrees) * 500 / 2.5);
        clockFace.appendChild(createHourNumbers(x, y, i));
    }
    return clockFace;
}

function createHourNumbers(hoursNumberX, hoursNumberY, number) {
    var hoursNumber = document.createElement('span');
    hoursNumber.className = 'hour-number';
    hoursNumber.style.left = hoursNumberX + 'px';
    hoursNumber.style.top = hoursNumberY + 'px';
    hoursNumber.appendChild(document.createTextNode(number));
    return hoursNumber;
}

function createHands(typeOfHand) {
    var hand = document.createElement('div');
    hand.className = 'hand' + ' ' + typeOfHand;
    return hand;
}

function createDigitalClock() {
    var digital = document.createElement('div');
    digital.className = 'digital';
    digital.appendChild(digitalTime());
    return digital;
}

function digitalTime() {
    var digitalTime = document.createElement('span');
    digitalTime.className = 'digital-time';
    return digitalTime;
}

var hourHand = document.querySelector('.hour-hand');
var minHand = document.querySelector('.min-hand');
var secondHand = document.querySelector('.second-hand');
var digital = document.querySelector('.digital-time');

function addO(time) {
    return (`${time}`.length < 2) ? (`0${time}`) : time;
}

function setTime() {
    var now = new Date();

    var second = now.getSeconds();
    var secondsDegrees = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    var min = now.getMinutes();
    var minDegrees = ((min / 60) * 360) + ((second / 60) * 6) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    var hour = now.getHours();
    var hourDegrees = ((hour / 12) * 360) + ((min / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    digital.innerHTML = addO(hour) + ':' + addO(min) + ':' + addO(second);
}

setInterval(setTime, 1000);
setTime();