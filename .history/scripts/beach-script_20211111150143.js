var myVar;
let radio = document.getElementById('radio');
let still = document.getElementById('stationary');
let float = document.getElementById('floating');

const sayIntroduction = new Howl({
  src: ['./sounds/Narration/Narration_Beach.mp3'],
  volume: 0.5,
  onend: function() {
    console.log('audio Finished!');
    setRadio();
  }
});



const parkSound = new Howl({
  src: ['./sounds/Beach/Beach.mp3'],
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

//---------   BEACH audio  ------------

let sandcastle = document.getElementById("sandcastle");
let crab = document.getElementById("crab");
let volleyball = document.getElementById("volleyball");
let waves = document.getElementById("waves");

sandcastle.onmouseenter = function(){

  console.log("you hover on star");
 sandcasstleFX.play();
 
  
};
crab.onmouseenter = function(){

  console.log("you hover on star");
  crabFX.play();
 
  
};
volleyball.onmouseenter = function(){

  console.log("you hover on polygon");
  volleyballFX.play();
  
};
waves.onmouseenter = function(){

  console.log("you hover on triangle");
  wavesFX.play();
  
};

// Crab
const crabFX = new Howl({
  src: ['./sounds/Beach/Crab.mp3'],
  volume: 0.5
});
//  Sand Castle
const sandcastleFX = new Howl({
  src: ['./sounds/Beach/Sand Castle.mp3'],
  volume: 0.5
});
// Volleyball
const volleyballFX = new Howl({
  src: ['./sounds/Beach/Volleyball.mp3'],
  volume: 0.5
});
//  Waves
const wavesFX = new Howl({
  src: ['./sounds/Beach/Waves.mp3'],
  volume: 0.5
});