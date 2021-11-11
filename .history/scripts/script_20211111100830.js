// style.display = hidden === rendered but not visible
// style.display = none === no render

let panel = document.getElementById('panel');
let radio = document.getElementById('radio');

var myVar;

radio.onclick = function() {
  myVar = setTimeout(displayFunction, 100000);
  console.log("radio clicked");
  sayIntroduction.play();
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
  volume: 0.5
});

sayIntroduction.on('end', function(){
  console.log('Finished!');
});