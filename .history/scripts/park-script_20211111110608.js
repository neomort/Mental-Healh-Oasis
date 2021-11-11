var myVar;
let radio = document.getElementById('radio');

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