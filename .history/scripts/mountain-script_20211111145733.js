var myVar;
let radio = document.getElementById('radio');
let still = document.getElementById('stationary');
let float = document.getElementById('floating');

const sayIntroduction = new Howl({
  src: ['./sounds/Narration/Narration_Mountain.mp3'],
  volume: 0.5,
  onend: function() {
    console.log('audio Finished!');
    setRadio();
  }
});



const parkSound = new Howl({
  src: ['./sounds/Mountains/Mountains.mp3'],
  volume: 0.3,
  loop: true

});

function setRadio(){
  still.style.display = "block";
  still.style.visibility = "visible";
  still.style.opacity = "1";
  float.style.display = "none";
}


function togglePlay(){
  return sayIntroduction.playing() ? sayIntroduction.pause() : sayIntroduction.play();
  };

radio.onclick = function() {
  myVar = setTimeout(displayFunction, 1000);
  console.log("radio clicked");

  parkSound.play();
  
  togglePlay();

  sayIntroduction.on('pause', function(){
    console.log('pause');
    
  });
}

function createTimedLink(element, callback, timeout){
  setTimeout( function(){callback(element);}, timeout);
  return false;
}

function myFunction(element) { 
  /* Block of code, with no 'return false'. */
    window.location = element.href;
   }

function displayFunction(){

  console.log("images displayed");
  
}

//---------   MOUNTAIN audio  ---------

let birds = document.getElementById("birds");
let rocks = document.getElementById("rocks");
let wind = document.getElementById("wind");
let waterfall = document.getElementById("waterfall");

birds.onmouseenter = function(){

  console.log("you hover on star");
 birdsFX.play();
 
  
};
rocks.onmouseenter = function(){

  console.log("you hover on star");
  rocksFX.play();
 
  
};
wind.onmouseenter = function(){

  console.log("you hover on polygon");
  whistlingwindFX.play();
  
};
waterfall.onmouseenter = function(){

  console.log("you hover on triangle");
  waterfallFX.play();
  
};

//  Birds
const birdsFX = new Howl({
  src: ['./sounds/Mountains/Birds.mp3'],
  volume: 0.5
});
//  Walking Over Rocks
const walkingoverrocksFX = new Howl({
  src: ['./sounds/Mountains/Walking Over Rocks.mp3'],
  volume: 0.5
});
//  Waterfall
const waterfallFX = new Howl({
  src: ['./sounds/Mountains/Waterfall.mp3'],
  volume: 0.5
});
//  Whistling Wind
const whistlingwindFX = new Howl({
  src: ['./sounds/Mountains/Whistling Wind.mp3'],
  volume: 0.5
});