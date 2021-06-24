(function () {
  var canvas = document.getElementById('wrapper');
  var context = canvas.getContext('2d');
  console.log(context);
  context.strokeStyle = 'lightgrey';
  context.beginPath();
  context.arc(250, 250, 150, 0, Math.PI * 2, false);
  context.stroke();
})();
