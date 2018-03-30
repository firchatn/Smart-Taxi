function course(){
  var x = document.getElementById("va");
  var oldv = x.textContent;
  var newv = 0.0 ;
  newv = parseFloat(oldv) + 0.30 ;
  var n = newv.toFixed(2);
  x.innerText = n.toString()+ "DT";
  setTimeout(course, 15000);
}
course();