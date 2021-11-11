// style.display = hidden === rendered but not visible
// style.display = none === no render

let panel = document.getElementById('panel');
let radio = document.getElementById('radio');

var myVar;

radio.onclick = function() {
  myVar = setTimeout(displayFunction, 3000);
  console.log("radio clicked");
}

function displayFunction(){

  console.log("images displayed");
  panel.style.display = "block";
  panel.style.visibility = "visible";
  panel.style.opacity = "1";
}
