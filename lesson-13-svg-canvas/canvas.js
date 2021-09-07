(function () {
  var canvas = document.getElementById('wrapper');
  var context = canvas.getContext('2d');
  context.translate(250, 250);
  var clockWidth = 10; // ширина внешнего круга часов
  var clockRadius = 150; // радиус часов
  var secondArrowLength = 120; // длина секндной стрелки
  var minArrowLength = 110; // длина минутной стелки
  var hourArrowLength = 90; // длинна часовой стелки
  var littleRadius = 3; // радиус кружка по центру часов
  var radiusNumberCircle = 20; // радиус кружков цифр

  setInterval(createClock, 1000);

  // createClock();
  function createClock() {
    context.clearRect(-250, -250, 600, 600);
    createClockFaceCircles();
    createMainCircle();
    createDigitalCLock();
    updateTime();
    createLittleCircle();
  }

  //clock
  function createMainCircle() {
    context.strokeStyle = 'lightgrey';
    context.lineWidth = clockWidth;
    context.beginPath();
    context.arc(0, 0, clockRadius, 0, Math.PI * 2, false);
    context.stroke();
  }

  //second arrow
  function createSecondArrow(deg) {
    context.save();
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 3;
    context.moveTo(0, 0);
    context.rotate(deg);
    context.lineTo(0, -secondArrowLength);
    context.stroke();
    context.rotate(-deg);
    context.restore();
  }

  //min arrow
  function createMinArrow(deg) {
    context.save();
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 5;
    context.moveTo(0, 0);
    context.rotate(deg);
    context.lineTo(0, -minArrowLength);
    context.stroke();
    context.rotate(-deg);
    context.restore();
  }

  //hour arrow
  function createHourArrow(deg) {
    context.save();
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 7;
    context.moveTo(0, 0);
    context.rotate(deg);
    context.lineTo(0, -hourArrowLength);
    context.stroke();
    context.rotate(-deg);
    context.restore();
  }

  //small circle
  function createLittleCircle() {
    context.strokeStyle = 'black';
    context.fillStyle = 'black';
    context.beginPath();
    context.arc(0, 0, littleRadius, 0, Math.PI * 2, false);
    context.fill();
    context.stroke();
  }

  //clock numbers
  function createClockFaceCircles() {
    for (var i = 1; i <= 12; i++) {
      var degrees = (30 * i) / 180 * Math.PI;
      var innerRadius = clockRadius - radiusNumberCircle * 1.5;
      var numberCircleX = innerRadius * Math.sin(degrees);
      var numberCircleY = -innerRadius * Math.cos(degrees);
      context.strokeStyle = 'lightgrey';
      context.lineWidth = '3';
      context.beginPath();
      context.arc(numberCircleX, numberCircleY, radiusNumberCircle, 0, Math.PI * 2, false);
      context.stroke();
      context.fillStyle = 'black';
      context.font = 'normal 15px Arial';
      if (i >= 10) {
        context.fillText(i, numberCircleX - 8, numberCircleY + 5);
      } else {
        context.fillText(i, numberCircleX - 4, numberCircleY + 5);
      }
    }
  }

  function createDigitalCLock() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    context.font = 'normal 15px Arial';
    context.fillText(time, -25, 40);
  }

  function updateTime() {
    var date = new Date();
    var second = date.getSeconds();
    var min = date.getMinutes();
    var hour = date.getHours();

    var rotateSecondArrow = second * Math.PI / 30;
    createSecondArrow(rotateSecondArrow);

    var rotateMinArrow = min * Math.PI / 30;
    createMinArrow(rotateMinArrow);

    var rotateHourArrow = (hour * Math.PI / 6) + (min * Math.PI / (6 * 60));
    createHourArrow(rotateHourArrow);
  }
})();
