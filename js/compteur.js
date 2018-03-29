function course(){
  var x = document.getElementById("va");
  var oldv = x.textContent;
  var newv = 0 ;
  newv = parseInt(oldv) + 30 ;
  x.innerText = newv.toString()+ "DT";


    setTimeout(course, 15000);
}

course();