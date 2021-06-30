(function () {
  var fieldWidth = 1000;
  var fieldHeight = 700;
  var ballWidth = 50;
  var ballHeight = 50;
  var rocketHeight = 150;

  var startButton = document.getElementById('start');
  var leftPlayer = document.getElementById('left-player');
  var rightPlayer = document.getElementById('right-player');

  var leftPlayerRocket = new Player(leftPlayer);
  var rightPlayerRocket = new Player(rightPlayer);

  var RequestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||

    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };

// РОКЕТКА -----------------------------------------------------------------------------------------------------------
  function Player(player) {
    this.speedY = 0;
    player.style.top = fieldHeight / 2 - rocketHeight / 2 + 'px';
    this.Update = function () {
      player.style.top = player.offsetTop + this.speedY + 'px';
      if (player.offsetTop <= 0) {
        player.style.top = '0px';
      } else if (player.offsetTop >= fieldHeight - rocketHeight){
        player.style.top = fieldHeight - rocketHeight + 'px';
      }
    }
  }

  function moveRocket(e) {
    if (e.keyCode === 16) {
      leftPlayerRocket.speedY = -5;
    }
    if (e.keyCode === 17) {
      leftPlayerRocket.speedY = 5;
    }
    if (e.keyCode === 38) {
      rightPlayerRocket.speedY = -5;
    }
    if (e.keyCode === 40) {
      rightPlayerRocket.speedY = 5;
    }
  }

  function stopMoveRocket() {
    leftPlayerRocket.speedY = 0;
    rightPlayerRocket.speedY = 0;
  }

//МЯЧИК --------------------------------------------------------------------------------------------------------------
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

  // ФУНКЦИОНАЛ ----------------------------------------------------------------------------------------------------
  function Start() {
    leftPlayerRocket.Update();
    rightPlayerRocket.Update();
    RequestAnimationFrame(Start);
  }

  function StartBall() {
    RequestAnimationFrame(Tick)
  }

  function initGame() {
    RequestAnimationFrame(Start);
  }

  function Tick() {
    Ball.PosX += Ball.SpeedX;
    if (Ball.PosX + Ball.Width > Area.Width) {
      Ball.SpeedX = -Ball.SpeedX;
    }
    if (Ball.PosX < 0) {
      Ball.SpeedX = -Ball.SpeedX;
      Ball.PosX = 0;
    }

    Ball.PosY += Ball.SpeedY;
    if (Ball.PosY + Ball.Height > Area.Height) {
      Ball.SpeedY = -Ball.SpeedY;
      Ball.PosY = Area.Height - Ball.Height;
    }

    if (Ball.PosY < 0) {
      Ball.SpeedY = -Ball.SpeedY;
      Ball.PosY = 0;
    }

    Ball.Update();

    RequestAnimationFrame(Tick);
  }

  Ball.Update();

  startButton.onclick = StartBall;
  window.onload = initGame;
  window.onkeydown = moveRocket;
  window.onkeyup = stopMoveRocket;
}());
