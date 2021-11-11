var myVar;
let radio = document.getElementById('radio');
let still = document.getElementById('stationary');
let float = document.getElementById('floating');

const sayIntroduction = new Howl({
  src: ['./sounds/Narration/Narration_Forest.mp3'],
  volume: 0.5,
  onend: function() {
    console.log('audio Finished!');
    setRadio();
  }
});



const parkSound = new Howl({
  src: ['./sounds/Forest/Forest.mp3'],
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

//---------   FOREST audio  -----------

// Bugs
const bugsFX = new Howl({
  src: ['./sounds/Forest/Bugs.mp3'],
  volume: 0.5
});
// Guacamaya
  const guacamayaFX = new Howl({
  src: ['./sounds/Forest/Guacamaya.mp3'],
  volume: 0.5
});
// Jaguar
  const jaguarFX = new Howl({
    src: ['./sounds/Forest/Jaguar.mp3'],
    volume: 0.7
});
// Rain
  const rainFX = new Howl({
    src: ['./sounds/Forest/Rain.mp3'],
    volume: 0.5
});

let jaguar = document.getElementById("jaguar");
let guacamaya = document.getElementById("guacamaya");
let bugs = document.getElementById("bugs");
let rain = document.getElementById("rain");

guacamaya.onmouseenter = function(){

  console.log("you hover on star");
  guacamayaFX.play();
  rainFX.stop();
  bugsFX.stop();
  guacamayaFX.stop();
  
};
bugs.onmouseenter = function(){

  console.log("you hover on star");
  bugsFX.play();
  rainFX.stop();
  bugsFX.stop();
  guacamayaFX.stop();
  
};
jaguar.onmouseenter = function(){

  console.log("you hover on polygon");
  jaguarFX.play();
  rainFX.stop();
  bugsFX.stop();
  guacamayaFX.stop();
};
rain.onmouseenter = function(){

  console.log("you hover on triangle");
  rainFX.play();
  jaguarFX.stop();
  bugsFX.stop();
  guacamayaFX.stop();
};


// jaguar.addEventListener("onmouseenter", function(){  jaguarFX.play(); console.log("you hover on jaguar");}, false);

