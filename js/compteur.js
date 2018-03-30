var s = document.getElementById("start");
var p = document.getElementById("stop");
s.addEventListener("click",course);
p.addEventListener("click",stop);
var on = true;

function stop(){
  on = false;
}


function course(){
  var x = document.getElementById("va");
  var oldv = x.textContent;
  var newv = 0.0 ;
  newv = parseFloat(oldv) + 0.30 ;
  var n = newv.toFixed(2);
  if (on == true){
  x.innerText = n.toString()+ "DT";
  setTimeout(course, 15000);
  }
}
