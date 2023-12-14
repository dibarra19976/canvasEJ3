let canvas;
let context;
let sound = document.querySelector("#boing");
let interval;

var ballX = 60;
var ballY = 60;
var directionX = 2;
var directionY = 2;
var color = "#FF8C42";
const speedX = document.getElementById("speedX");
const speedY = document.getElementById("speedY");
const stop = document.getElementById("stop");
const start = document.getElementById("start");
const colorElement = document.getElementById("color");
const sound1 = document.getElementById("sound1");
const sound2 = document.getElementById("sound2");

canvas = document.getElementById('2d-animation-canvas');
context = canvas.getContext('2d');

function draw(x, y) {
  context.fillStyle = color;
  context.beginPath();
  context.arc(x,y,10,0,Math.PI * 2,true);
  context.fill();
}

function clearCanvas() {
  canvas.width = canvas.width;
}

function animation (){
  if (ballX > 1000 || ballX < 0){
    directionX *= -1;
    sound.play();
  }

  if (ballY < 0 || ballY > 300){
    directionY *= -1;
    sound.play();
  }

  ballX += directionX;
  ballY += directionY;
  clearCanvas();
  draw(ballX, ballY);
}

stop.addEventListener("click", (e) => {
  clearInterval(interval);
  start.disabled = false;
  stop.disabled = true;

});

start.addEventListener("click", (e) => {
  interval = setInterval(animation, 10);
  stop.disabled = false;
  start.disabled = true;
});

speedY.addEventListener("change", (e) => {
  directionY = parseInt(speedY.value );
  
});
speedX.addEventListener("change", (e) => {
  directionX = parseInt(speedX.value );
});

colorElement.addEventListener("change", (e) => {
  color = colorElement.value;
  draw(ballX, ballY);
});

sound1.addEventListener("change", (e) => {
  if(sound1.checked == true){
    sound.setAttribute("src", "audio/jews_harp_boing-7111.mp3");
  }
});

sound2.addEventListener("change", (e) => {
  if(sound2.checked == true){
    sound.setAttribute("src", "audio/metalpipe.mp3");
  }
});

draw(ballX, ballY);

sound1.checked = true;
directionY = parseInt(speedY.value );
directionX = parseInt(speedX.value );
interval = setInterval(animation, 10);
