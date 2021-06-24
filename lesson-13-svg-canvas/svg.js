(function () {
  var radius = 300;
  var radiusNumberCircle = 20;

  var clock = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  clock.setAttribute('width', 600);
  clock.setAttribute('height', 600);

  var clockFace = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  clockFace.setAttribute('cx', 250);
  clockFace.setAttribute('cy', 250);
  clockFace.setAttribute('r', 150);
  clockFace.setAttribute('stroke', 'lightgrey');
  clockFace.setAttribute('stroke-width', 10);
  clockFace.setAttribute('fill', 'white');
  clock.appendChild(clockFace);

  function createClockFaceCircles() {
    for (var i = 1; i <= 12; i++) {
      var numberCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      var numbers = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      var group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      var degrees = (30 * i) / 180 * Math.PI;
      var innerRadius = radius / 2 - radiusNumberCircle * 1.5;
      var numberCircleX = radius / 2 + innerRadius * Math.sin(degrees) + 100;
      var numberCircleY = radius / 2 - innerRadius * Math.cos(degrees) + 100;
      numberCircle.setAttribute('cx', Math.round(numberCircleX));
      numberCircle.setAttribute('cy', Math.round(numberCircleY));
      numberCircle.setAttribute('r', radiusNumberCircle);
      numberCircle.setAttribute('fill', 'white');
      numberCircle.setAttribute('stroke', 'lightgrey');
      numberCircle.setAttribute('stroke-width', '3');
      numbers.setAttribute('x', Math.round(numberCircleX) - 4);
      numbers.setAttribute('y', Math.round(numberCircleY) + 5);
      if (i >= 10) {
        numbers.setAttribute('x', Math.round(numberCircleX) - 8);
      }
      numbers.innerHTML = i;
      group.appendChild(numberCircle);
      group.appendChild(numbers);
      clock.appendChild(group);
    }
  }

  createClockFaceCircles();

  var secondArrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  secondArrow.setAttribute('x1', 250);
  secondArrow.setAttribute('y1', 250);
  secondArrow.setAttribute('x2', 250);
  secondArrow.setAttribute('y2', 120);
  secondArrow.setAttribute('stroke', 'red');
  secondArrow.setAttribute('stroke-width', '3');
  clock.appendChild(secondArrow);

  var minArrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  minArrow.setAttribute('x1', 250);
  minArrow.setAttribute('y1', 250);
  minArrow.setAttribute('x2', 250);
  minArrow.setAttribute('y2', 130);
  minArrow.setAttribute('stroke', 'black');
  minArrow.setAttribute('stroke-width', '5');
  clock.appendChild(minArrow);

  var hourArrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  hourArrow.setAttribute('x1', 250);
  hourArrow.setAttribute('y1', 250);
  hourArrow.setAttribute('x2', 250);
  hourArrow.setAttribute('y2', 150);
  hourArrow.setAttribute('stroke', 'black');
  hourArrow.setAttribute('stroke-width', '7');
  clock.appendChild(hourArrow);

  var smallCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  smallCircle.setAttribute('cx', 250);
  smallCircle.setAttribute('cy', 250);
  smallCircle.setAttribute('r', 5);
  smallCircle.setAttribute('fill', 'black');
  clock.appendChild(smallCircle);

  var digitalClock = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  digitalClock.setAttribute('x', 220);
  digitalClock.setAttribute('y', 330);
  digitalClock.setAttribute('stroke', 'black');
  digitalClock.setAttribute('font-size', '20');
  clock.appendChild(digitalClock);

  function rotateSecondArrow(deg) {
    secondArrow.setAttribute('transform', 'rotate(' + deg + ' 250 250)')
  }

  function rotateMinArrow(deg) {
    minArrow.setAttribute('transform', 'rotate(' + deg + ' 250 250)')
  }

  function rotateHourArrow(deg) {
    hourArrow.setAttribute('transform', 'rotate(' + deg + ' 250 250)')
  }

  function addZero(time) {
    return (`${time}`.length < 2) ? (`0${time}`) : time;
  }

  document.getElementById('wrapper').appendChild(clock);

  function updateTime() {
    var data = new Date();
    rotateSecondArrow(6 * data.getSeconds());
    rotateMinArrow(6 * data.getMinutes());
    rotateHourArrow(30 * (data.getHours() % 12) + data.getMinutes() / 2);

    var second = addZero(data.getSeconds());
    var min = addZero(data.getMinutes());
    var hour = addZero(data.getHours());
    digitalClock.innerHTML = hour + ':' + min + ':' + second;
  }

  updateTime();

  setInterval(updateTime, 1000);
})();