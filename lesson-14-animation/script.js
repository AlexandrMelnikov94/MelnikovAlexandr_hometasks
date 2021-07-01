(function () {
  var fieldWidth = 1000;//ширина поля
  var fieldHeight = 700;//высота поля
  var ballWidth = 50;//ширина мяча
  var ballHeight = 50;//высота мяча
  var rocketHeight = 150;//высота рокетки
  var rocketWidth = 10;//ширина рокетки

  var startButton = document.getElementById('start');
  var leftPlayer = document.getElementById('left-player');
  var rightPlayer = document.getElementById('right-player');
  var ball = document.getElementById('ball');
  var playerScore = document.getElementById('score');

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
    this.score = 0;
    this.speedRocketY = 0;
    player.style.top = fieldHeight / 2 - rocketHeight / 2 + 'px';
    this.Update = function () {
      player.style.top = player.offsetTop + this.speedRocketY + 'px';
      if (player.offsetTop <= 0) {
        player.style.top = '0px';
      } else if (player.offsetTop >= fieldHeight - rocketHeight) {
        player.style.top = fieldHeight - rocketHeight + 'px';
      }
    }
  }

  function moveRocket(e) {
    if (e.keyCode === 16) {
      leftPlayerRocket.speedRocketY = -10;
    }
    if (e.keyCode === 17) {
      leftPlayerRocket.speedRocketY = 10;
    }
    if (e.keyCode === 38) {
      rightPlayerRocket.speedRocketY = -10;
    }
    if (e.keyCode === 40) {
      rightPlayerRocket.speedRocketY = 10;
    }
  }

  function stopMoveRocket() {
    leftPlayerRocket.speedRocketY = 0;
    rightPlayerRocket.speedRocketY = 0;
  }

//МЯЧИК --------------------------------------------------------------------------------------------------------------
  function Ball(ball) {
    ball.style.left = fieldWidth / 2 - ballWidth / 2 + 'px';
    ball.style.top = fieldHeight / 2 - ballHeight / 2 + 'px';

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
      if (ball.offsetLeft + ballWidth + 3 > Area.Width) {
        if (!!this.speedX || !!this.speedY) {
          this.speedX = 0;
          this.speedY = 0;
          leftPlayerRocket.score++;
          playerScore.textContent = leftPlayerRocket.score + ':' + rightPlayerRocket.score;
        }
      }
      if (ball.offsetLeft < 0) {
        if (!!this.speedX || !!this.speedY) {
          this.speedX = 0;
          this.speedY = 0;
          rightPlayerRocket.score++;
          playerScore.textContent = leftPlayerRocket.score + ':' + rightPlayerRocket.score;
        }
      }
    }

    this.meetWithRocket = function () {
      if (ball.offsetLeft + rocketWidth + ballWidth + 3 > Area.Width) {
        if (ball.offsetTop + ballWidth > rightPlayer.offsetTop) {
          if (ball.offsetTop + ballWidth < rightPlayer.offsetTop + rocketHeight) {
            this.speedX = -this.speedX;

          }
        }
      }
      if (ball.offsetLeft - rocketWidth < 0) {
        if (ball.offsetTop + ballWidth > leftPlayer.offsetTop) {
          if (ball.offsetTop + ballWidth < leftPlayer.offsetTop + rocketHeight) {
            this.speedX = -this.speedX;
          }
        }
      }
    }

    this.startBallPosition = function () {
      ball.style.left = fieldWidth / 2 - ballWidth / 2 + 'px';
      ball.style.top = fieldHeight / 2 - ballHeight / 2 + 'px';
    }

    this.startBallMove = function () {
      var randomNumber = Math.random();
      if (randomNumber > 0.5) {
        this.speedX = ((Math.floor(Math.random() * (1 - (-1) + 1)) + (-1)) * 3) + 6;
        this.speedY = ((Math.floor(Math.random() * (1 - (-1) + 1)) + (-1)) * 3) + 4;
      }
      if (randomNumber <= 0.5) {
        this.speedX = ((Math.floor(Math.random() * (1 - (-1) + 1)) + (-1)) * 3) - 6;
        this.speedY = ((Math.floor(Math.random() * (1 - (-1) + 1)) + (-1)) * 3) - 4;
      }

    }
    this.UpdateSpeed = function () {
      this.speedX = 0;
      this.speedY = 0;
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
    newBall.touchTopDown();
    newBall.touchLeftRight();
    newBall.meetWithRocket();
    leftPlayerRocket.Update();
    rightPlayerRocket.Update();
    RequestAnimationFrame(Start);
  }

  function StartBall() {
    newBall.startBallMove();
    newBall.startBallPosition();
  }

  function initGame() {
    RequestAnimationFrame(Start);
  }

  window.onload = initGame;
  startButton.onclick = StartBall;
  window.onkeydown = moveRocket;
  window.onkeyup = stopMoveRocket;
}());
