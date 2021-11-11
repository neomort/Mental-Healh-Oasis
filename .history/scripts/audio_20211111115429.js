// short sounds

const bell = new Howl({
  src: ['./sounds/Extra/bell2.mp3'],
  volume: 0.1
});
const forest = new Howl({
  src: ['./sounds/Forest/Forest.mp3'],
  volume: 0.5
});
const mountain = new Howl({
  src: ['./sounds/Mountains/Mountains.mp3'],
  volume: 0.5
});
const park = new Howl({
  src: ['./sounds/Park/Park.mp3'],
  volume: 0.5
});
const beach = new Howl({
  src: ['./sounds/Beach/Beach.mp3'],
  volume: 0.5
});

// longer sounds

const jingle = new Howl({
  src: ['./sounds/Extra/synth.mp3'],
  volume: 0.5
});
const violet = new Howl({
  src: ['./sounds/Extra/synth.mp3'],
  volume: 0.5
});
const free = new Howl({
  src: ['./sounds/Extra/synth.mp3'],
  volume: 0.5
});
const paris = new Howl({
  src: ['./sounds/Extra/synth.mp3'],
  volume: 0.5
});

// extra

const titel = new Howl({
  src: ['./sounds/Extra/Titel.mp3'],
  volume: 0.5
});

let star = document.getElementById('star');
let polygon = document.getElementById('poly');
let triangle = document.getElementById('triangle');
let hex = document.getElementById('hexo');
let rad = document.getElementById('radio');

// window.addEventListener('load', function () {

//   //Set all element pages height
//  console.log("page loaded")
//   titel.play();

// })

star.onclick = function(){

  console.log("you clicked the star");
  paris.play();
  jingle.stop();
  violet.stop();
  free.stop();
};
polygon.onclick = function(){

  console.log("you clicked the polygon");
  free.play();
  jingle.stop();
  violet.stop();
  paris.stop();
};
triangle.onclick = function(){

  console.log("you clicked the triangle");
  violet.play();
  jingle.stop();
  paris.stop();
  free.stop();
};
hex.onclick = function(){

  console.log("you clicked the hexagon??");
  jingle.play();
  violet.stop();
  free.stop();
  paris.stop();
};
star.onmouseenter = function(){

  console.log("you hover on star");
  beach.play();
  forest.stop();
  park.stop();
  mountain.stop();
  
};
polygon.onmouseenter = function(){

  console.log("you hover on polygon");
  forest.play();
  mountain.stop();
  park.stop();
  beach.stop();
};
triangle.onmouseenter = function(){

  console.log("you hover on triangle");
  park.play();
  mountain.stop();
  forest.stop();
  beach.stop();
};
hex.onmouseenter = function(){

  console.log("you hover on hexagon??");
  mountain.play();
  forest.stop();
  park.stop();
  beach.stop();
};




