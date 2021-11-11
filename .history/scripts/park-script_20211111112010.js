var myVar;
let radio = document.getElementById('radio');
let still = document.getElementById('stationary');
let float = document.getElementById('floating');

const sayIntroduction = new Howl({
  src: ['./sounds/Narration/Narration_Park.mp3'],
  volume: 0.5,
  onend: function() {
    console.log('audio Finished!');
    
  }
});

function setRadio(){
  stationary.style.display = "block";
  panel.style.visibility = "visible";
  panel.style.opacity = "1";
}


function togglePlay(){
  return sayIntroduction.playing() ? sayIntroduction.pause() : sayIntroduction.play();
  };

radio.onclick = function() {
  myVar = setTimeout(displayFunction, 100000);
  console.log("radio clicked");
  
  togglePlay();

  sayIntroduction.on('pause', function(){
    console.log('pause');
    
  });
}

function displayFunction(){

  console.log("images displayed");
  
}