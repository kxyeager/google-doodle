// GSAP included in `index.html`
console.log("OK");

// Animate with GSAP

//
// gsap.from('#o', {rotation: 360, duration: 5, transformOrigin: "50% 50%", repeat: -1 });

// gsap.to('#o', {
//   scale: 100,
//   borderRadius: 50,
//   // background: 'coral'
// });

// gsap.to('#o', {
//   scale: 1.5,
//   duration: 2,
//   repeat: -1,
//   yoyo: true,
//   transformOrigin: '50% 50%'
// });

// gsap.from( '#o', {
//   opacity: 0,
//   duration: 3,
//   repeat: 5
// });

//

// DOM selectors
const stars = document.getElementById("stars");
const starsCtx = stars.getContext("2d");
const slider = document.querySelector(".slider input");
const output = document.querySelector("#speed");

// global variables
let screen,
  starsElements,
  starsParams = { speed: 2, number: 300, extinction: 4 };

// run stars
setupStars();
updateStars();

// handle slider
output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
  starsParams.speed = this.value;
};

// update stars on resize to keep them centered
window.onresize = function () {
  setupStars();
};

// star constructor
function Star() {
  this.x = Math.random() * stars.width;
  this.y = Math.random() * stars.height;
  this.z = Math.random() * stars.width;

  this.move = function () {
    this.z -= starsParams.speed;
    if (this.z <= 0) {
      this.z = stars.width;
    }
  };

  this.show = function () {
    let x, y, rad, opacity;
    x = (this.x - screen.c[0]) * (stars.width / this.z);
    x = x + screen.c[0];
    y = (this.y - screen.c[1]) * (stars.width / this.z);
    y = y + screen.c[1];
    rad = stars.width / this.z;
    opacity =
      rad > starsParams.extinction
        ? 1.5 * (2 - rad / starsParams.extinction): 1;

    starsCtx.beginPath();
    starsCtx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
    starsCtx.arc(x, y, rad, 0, Math.PI * 2);
    starsCtx.fill();
  };
}

// setup <canvas>, create all the starts
function setupStars() {
  screen = {
    w: window.innerWidth,
    h: window.innerHeight,
    c: [window.innerWidth * 0.5, window.innerHeight * 0.5]
  };
  window.cancelAnimationFrame(updateStars);
  stars.width = screen.w;
  stars.height = screen.h;
  starsElements = [];
  for (let i = 0; i < starsParams.number; i++) {
    starsElements[i] = new Star();
  }
}

// redraw the fe
function updateStars() {
  starsCtx.fillStyle = "black";
  starsCtx.fillRect(0, 0, stars.width, stars.height);
  starsElements.forEach(function (s) {
    s.show();
    s.move();
  });
  window.requestAnimationFrame(updateStars);
}

gsap.fromTo(
  ".meteor",
  { x: -100, y: -100, transformOrigin: "50% 50%" },
  { x: 600, y: 300, duration: 6.5, repeat: -1, repeatDelay: 4 }
);

gsap.fromTo(
  ".ufo",
  {
    opacity: 1,
    scale: 0,
    y: 20,
    rotate: 5,
    transformOrigin: "50% 50%"
  },
  { opacity: 1, scale: 1.5, x: 500, y: -10, rotate: 360, duration: 7.5, repeat: -1, repeatDelay: 6}
);



gsap.fromTo(
  ".meteor1",
  { x: -100, y: -10, transformOrigin: "50% 50%" },
  { x: 600, y: 350, duration: 3, repeat: -1, repeatDelay: 3.25 }
);



function animate() {
  TweenMax.to(".meteor1", 1.5, {fill:getRandomColor(), stroke:getRandomColor(), delay:1, onComplete:animate});
}
animate();

function getRandomColor() {
  return "rgb(" + random(0,255) + "," + random(0,255) + "," + random(0,255) +")";
}

function random(min, max) {
  return min + Math.floor( Math.random() * (max - min));
}


function animate() {
  TweenMax.to(".meteor1", 1.5, {fill:getRandomColor(), stroke:getRandomColor(), delay:1, onComplete:animate});
}
animate();

function getRandomColor() {
  return "rgb(" + random(0,255) + "," + random(0,255) + "," + random(0,255) +")";
}

function random(min, max) {
  return min + Math.floor( Math.random() * (max - min));
}


function animate() {
  TweenMax.to(".meteor1", 1.5, {fill:getRandomColor(), stroke:getRandomColor(), delay:1, onComplete:animate});
}
animate();

function getRandomColor() {
  return "rgb(" + random(0,255) + "," + random(0,255) + "," + random(0,255) +")";
}

function random(min, max) {
  return min + Math.floor( Math.random() * (max - min));
}


function animate() {
  TweenMax.to(".ufo", 1.5, {fill:getRandomColor(), stroke:getRandomColor(), delay:1, onComplete:animate});
}
animate();

function getRandomColor() {
  return "rgb(" + random(0,255) + "," + random(0,255) + "," + random(0,255) +")";
}

function random(min, max) {
  return min + Math.floor( Math.random() * (max - min));
}