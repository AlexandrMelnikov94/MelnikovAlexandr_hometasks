var fieldWidth = 1000;
var fieldHeight = 700;
var ballWidth = 50;
var ballHeight = 50;
var rocketHeight = 150;

var RequestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||

  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

var Ball = {
  PosX: fieldWidth / 2 - ballWidth / 2,
  PosY: fieldHeight / 2 - ballHeight / 2,
  SpeedX: ((Math.floor(Math.random() * (1 - (-1) + 1)) + (-1)) * 3) + 6,
  SpeedY: ((Math.floor(Math.random() * (1 - (-1) + 1)) + (-1)) * 3) + 4,
  Width: ballWidth,
  Height: ballHeight,

  Update: function () {
    var BallObj = document.getElementById('ball');
    BallObj.style.left = this.PosX + 'px';
    BallObj.style.top = this.PosY + 'px';
  }
}

var Area = {
  Width: fieldWidth,
  Height: fieldHeight,
}

function Start() {
 RequestAnimationFrame(Tick);
}

function Tick() {
  //рокетка
  // PlayerLeft.update();
  // PlayerLeft.PosY += PlayerLeft.SpeedY;
  //мячик
  Ball.PosX += Ball.SpeedX;
  if (Ball.PosX + Ball.Width > Area.Width) {
    Ball.SpeedX = - Ball.SpeedX;
  }
  if (Ball.PosX < 0) {
    Ball.SpeedX = -Ball.SpeedX;
    Ball.PosX = 0;
  }

  Ball.PosY += Ball.SpeedY;
  if (Ball.PosY + Ball.Height > Area.Height) {
    Ball.SpeedY = - Ball.SpeedY;
    Ball.PosY = Area.Height -Ball.Height;
  }

  if (Ball.PosY < 0) {
    Ball.SpeedY = - Ball.SpeedY;
    Ball.PosY = 0;
  }

  Ball.Update();

  RequestAnimationFrame(Tick);
}

Ball.Update();

var leftRocketElement = document.getElementById('left-player');

PlayerLeft = {
  PosY: fieldHeight / 2 - rocketHeight /2,
  SpeedY : 5,

  Update: function () {
    leftRocketElement.style.top = this.PosY + 'px';
  }
}

PlayerLeft.Update();

window.addEventListener('keydown' , function (e) {
  e = e || window.event;
  e.preventDefault();
  if (e.keyCode === 16) {
    PlayerLeft.speedY = -5;
  }
  if (e.keyCode === 17) {
    PlayerLeft.speedY = 5;
  }
});
// function moveLeftRocket(e) {
//   e = e || window.event;
//   e.preventDefault();
//   if (e.keyCode === 16) {
//     PlayerLeft.speedY = -5;
//   }
//   if (e.keyCode === 17) {
//     PlayerLeft.speedY = 5;
//   }
// }


// window.onkeydown = moveLeftRocket;
