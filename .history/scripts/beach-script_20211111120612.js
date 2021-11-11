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
  volume: 0.3
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