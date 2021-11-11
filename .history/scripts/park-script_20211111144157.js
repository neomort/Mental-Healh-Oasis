var myVar;
let radio = document.getElementById('radio');
let still = document.getElementById('stationary');
let float = document.getElementById('floating');

const sayIntroduction = new Howl({
  src: ['./sounds/Narration/Narration_Park.mp3'],
  volume: 0.5,
  onend: function() {
    console.log('audio Finished!');
    setRadio();
  }
});



const parkSound = new Howl({
  src: ['./sounds/Park/Park.mp3'],
  volume: 0.5,
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

// let swing = document.getElementBy('swing');
// let hopscotch = document.getElementById('hopscotch');
// let playing = document.getElementById('playing');


swing.onmouseenter = function(){

  console.log("you hover on star");
  swingFX.play();
 
  
};
hopscotch.onmouseenter = function(){

  console.log("you hover on polygon");
  hopscotchFX.play();
  
};
playing.onmouseenter = function(){

  console.log("you hover on triangle");
  childrenFX.play();
  
};


//---------   PARK audio  -------------

 var a = document.getElementById("Park");
console.log($`svgDoc`);
let swing = document.getElementByID('swing');
let hopscotch = document.getElementByID('hopscotch');
let playing = document.getElementByID('playing');

//  DOG
const dog = new Howl({
  src: ['./sounds/Park/dog.mp3'],
  volume: 0.5
});
// Children
  const childrenFX = new Howl({
    src: ['./sounds/Park/Children.mp3'],
    volume: 0.5
});
// Hopscotch
  const hopscotchFX = new Howl({
    src: ['./sounds/Park/Hopscotch.mp3'],
    volume: 0.5
});
// Swings
  const swingFX = new Howl({
    src: ['./sounds/Park/Swings.mp3'],
    volume: 0.5
});



  //alert("Document loaded, including graphics and embedded documents (like SVG)");

//   var a = document.getElementById("park-svg");

 


  //get the inner DOM of alpha.svg
//   var svgDoc = a.contentDocument;
 
  // swing.addEventListener("onmouseenter", function(){  swingFX.play(); console.log("you hover on swing");}, false);
  // hopscotch.addEventListener("onmouseenter", function(){ hopscotchFX.play(); console.log("you hover on hop");}, false);
  // playing.addEventListener("onmouseenter", function(){ childrenFX.play(); console.log("you hover on kid");}, false);
