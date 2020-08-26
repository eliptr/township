var canvasMain = document.getElementById('canvas');
var ctx = canvasMain.getContext('2d');

function onload() {
  console.log("shit");
  document.addEventListener("deviceready", onDeviceReady, false);
}


function onDeviceReady() {
  console.log("ready");
  document.addEventListener("pause", onPause, false);
  document.addEventListener("resume", onResume, false);
  test()
}

function onPause() {
  console.log("pause");
  // onpaus things...
}

function onResume() {
  console.log("steady");
    test()
}

//variabels
var windowWidth = window.innerWidth * 2;
var windowHeight = window.innerHeight;
var pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device

// load images

var bg = new Image();
var feedtest = new Image();
var feed1 = new Image();
var feed2 = new Image();
var feed3 = new Image();
var feed4 = new Image();
var feed5 = new Image();
var feed6 = new Image();

bg.src = "transempty.png";
feedtest.src = "feedtest.png";
feed1.src = "Feed1.png";
feed2.src = "Feed2.png";
feed3.src = "Feed3.png";
feed4.src = "Feed4.png";
feed5.src = "Feed5.png";
feed6.src = "Feed6.png";


// onlaod runs one time and in the end runs draw with requestAnimationFrame
function test() {
  console.log("test");
  // fixed canvas resolution
  canvasMain.width = windowWidth * pixelRatio;   /// resolution of canvas
  canvasMain.height = windowHeight * pixelRatio;
  canvasMain.style.width = windowWidth + 'px';   /// CSS size of canvas
  canvasMain.style.height = windowHeight + 'px';

  //positions var

 draw()
}

// runs after test is finished and has an requestAnimationFrame
function draw() {

  canvasMain.width = windowWidth * pixelRatio;   /// resolution of canvas
  canvasMain.height = windowHeight * pixelRatio;
  canvasMain.style.width = windowWidth + 'px';   /// CSS size of canvas
  canvasMain.style.height = windowHeight + 'px';


  //drawImage
  ctx.drawImage(bg, 0, 0);
  ctx.drawImage(feed1, 0, 0);
  ctx.drawImage(feed2, 0, 0);
  ctx.drawImage(feed3, 0, 0);
  ctx.drawImage(feed4, 0, 0);
  ctx.drawImage(feed5, 0, 0);
  ctx.drawImage(feed6, 0, 0);


  //requestAnimationFrame
  requestAnimationFrame(draw, 10);
}

function field1bt() {
  document.querySelector('.fieldt').classList.remove('scropsclass');
  document.querySelector('.fieldt').offsetWidth = document.querySelector('.fieldt').offsetWidth;
  document.querySelector('.fieldt').classList.add('scropsclass');
}
