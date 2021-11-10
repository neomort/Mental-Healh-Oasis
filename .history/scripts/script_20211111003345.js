// style.display = hidden === rendered but not visible
// style.display = none === no render

let panel = document.getElementById('panel');
let radio = document.getElementById('radio');

radio.onclick = function(){

  console.log("radio clicked");
  panel.style.display = "block";
  panel.style.visibility = "visible"
}
