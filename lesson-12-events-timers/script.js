var hourHand = document.querySelector('.hour-hand');
var minHand = document.querySelector('.min-hand');
var secondHand = document.querySelector('.second-hand');

var digital = document.querySelector('.digital__time');

function setTime() {
    var now = new Date();

    var second = now.getSeconds();
    var secondsDegrees = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    var min = now.getMinutes();
    var minDegrees = ((min / 60) * 360) + ((second/60) * 6) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    var hour = now.getHours();
    var hourDegrees = ((hour / 12) * 360) + ((min / 60) *30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    digital.innerHTML = hour + ':' + min + ':' + second;
}

setInterval(setTime, 1000);
setTime();