var elementIsClicked = false; // declare the variable that tracks the state
function play(){ // declare a function that updates the state
  elementIsClicked = true;
  player.play();

}

var element = document.getElementById('play'); // grab a reference to your element
var player = document.getElementById("myAudio");
element.addEventListener('click', play);