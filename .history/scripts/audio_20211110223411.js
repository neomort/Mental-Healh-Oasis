// short sounds
const ow = new Howl({
  src: ['./sounds/Extra/ow.mp3'],
  volume: 0.5
});
const synth = new Howl({
  src: ['./sounds/Extra/synth.mp3'],
  volume: 0.5
});
const dog = new Howl({
  src: ['./sounds/Park/dog.mp3'],
  volume: 0.5
});
const rooster = new Howl({
  src: ['./sounds/Extra/rooster.mp3'],
  volume: 0.5
});

// longer sounds

const jingle = new Howl({
  src: ['./sounds/Extra/jingle.mp3'],
  volume: 0.5
});
const violet = new Howl({
  src: ['./sounds/Extra/Violet.mp3'],
  volume: 0.5
});
const free = new Howl({
  src: ['./sounds/Extra/free.mp3'],
  volume: 0.5
});
const paris = new Howl({
  src: ['./sounds/Extra/paris.mp3'],
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

window.addEventListener('load', function () {

  //Set all element pages height
 console.log("page loaded")
  titel.play();

})

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
  ow.play();
  
};
polygon.onmouseenter = function(){

  console.log("you hover on polygon");
  synth.play();
  
};
triangle.onmouseenter = function(){

  console.log("you hover on triangle");
  dog.play();
  
};
hex.onmouseenter = function(){

  console.log("you hover on hexagon??");
  rooster.play();
  
};
rad.onmouseenter = function(){
  rad.style.height = rad.style.height * 1.2;
};



