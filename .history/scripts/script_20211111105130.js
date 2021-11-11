// style.display = hidden === rendered but not visible
// style.display = none === no render

let panel = document.getElementById('panel');
let radio = document.getElementById('radio');

var myVar;

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
  panel.style.display = "block";
  panel.style.visibility = "visible";
  panel.style.opacity = "1";
}

function createTimedLink(element, callback, timeout){
  setTimeout( function(){callback(element);}, timeout);
  return false;
}

function myFunction(element) { 
  /* Block of code, with no 'return false'. */
    window.location = element.href;
   }

 const sayIntroduction = new Howl({
  src: ['./sounds/Narration/Narration_Introduction.mp3'],
  volume: 0.5,
  onend: function() {
    console.log('audio Finished!');
    createTimedLink();
  }
});

