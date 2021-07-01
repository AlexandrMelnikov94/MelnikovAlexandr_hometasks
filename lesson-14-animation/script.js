(function () {
  var fieldWidth = 1000;
  var fieldHeight = 700;
  var ballWidth = 50;
  var ballHeight = 50;
  var rocketHeight = 150;
  var rocketWidth = 10;

  var startButton = document.getElementById('start');
  var leftPlayer = document.getElementById('left-player');
  var rightPlayer = document.getElementById('right-player');
  var ball = document.getElementById('ball');

  var leftPlayerRocket = new Player(leftPlayer);
  var rightPlayerRocket = new Player(rightPlayer);
  var newBall = new Ball(ball);

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
      } else if (player.offsetTop >= fieldHeight - rocketHeight) {
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
  function Ball(ball) {
    ball.style.left = fieldWidth / 2 - ballWidth / 2 + 'px';
    ball.style.top = fieldHeight / 2 - ballHeight / 2 + 'px';
    this.speedX = ((Math.floor(Math.random() * (1 - (-1) + 1)) + (-1)) * 3) + 6;
    this.speedY = ((Math.floor(Math.random() * (1 - (-1) + 1)) + (-1)) * 3) + 4;

    this.Update = function () {
      ball.style.left = ball.offsetLeft + this.speedX + 'px';
      ball.style.top = ball.offsetTop + this.speedY + 'px';
    };

    this.touchTopDown = function () {
      if (ball.offsetTop + ballWidth + 3 > Area.Height) {
        this.speedY = -this.speedY;
      } else if (ball.offsetTop < 0) {
        ball.style.top = '0px';
        this.speedY = -this.speedY;
      }
    }

    this.touchLeftRight = function () {
      // if (ball.offsetLeft + ballWidth + 5 > Area.Width ) {
      //   this.speedX = - this.speedX;
      // }
      // if (ball.offsetLeft < 0) {
      //   ball.style.left = '0px';
      //   this.speedX = -this.speedX;
      // }
    }

    this.meetWithRocket = function () {
      if (ball.offsetLeft + rocketWidth + ballWidth > Area.Width) {
        if (ball.offsetTop + ballWidth > rightPlayer.offsetTop) {
          if (ball.offsetTop + ballWidth < rightPlayer.offsetTop + rocketHeight) {
            console.log('Touch');
            this.speedX = -this.speedX;
          }
        }
      }
      if (ball.offsetLeft - rocketWidth < 0) {
        if (ball.offsetTop + ballWidth > leftPlayer.offsetTop){
          if (ball.offsetTop + ballWidth < leftPlayer.offsetTop + rocketHeight) {
            console.log('Touch2');
            this.speedX = -this.speedX;
          }
        }
      }
    }
  }

// Поле
  var Area = {
    Width: fieldWidth,
    Height: fieldHeight,
  }


  // ФУНКЦИОНАЛ ----------------------------------------------------------------------------------------------------
  function Start() {
    newBall.Update();
    leftPlayerRocket.Update();
    rightPlayerRocket.Update();
    newBall.touchTopDown();
    newBall.touchLeftRight();
    newBall.meetWithRocket(rightPlayerRocket);
    RequestAnimationFrame(Start);
  }

  function initGame() {
    RequestAnimationFrame(Start);
  }

  startButton.onclick = initGame;
  window.onkeydown = moveRocket;
  window.onkeyup = stopMoveRocket;
}());
