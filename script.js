// warning: terrible code

function getCurrentTime(){
  window.d = Date().split(" ");
  window.time = d[4].split(":");
  document.getElementById("hr").innerHTML = time[0];
  document.getElementById("min").innerHTML = time[1];
  document.getElementById("sec").innerHTML = time[2];
  document.getElementById("timezone").innerHTML = d[5];
  document.getElementById("weekday").innerHTML = d[0];
  document.getElementById("date").innerHTML = d[1] + " " + d[2] + ", " + d[3]
}

function switchColor(col){
  document.getElementById("hr").style.backgroundColor = col;
  document.getElementById("min").style.backgroundColor = col;
  document.getElementById("sec").style.backgroundColor = col;
  document.getElementById("hr").style.border = "dark" + col + " 10px solid";
  document.getElementById("min").style.border = "dark" + col + " 10px solid";
  document.getElementById("sec").style.border = "dark" + col + " 10px solid";
}

function init(){
  setInterval(getCurrentTime, 100);
  document.getElementById("red").style.backgroundColor = "red"
  document.getElementById("blue").style.backgroundColor = "blue"
  document.getElementById("green").style.backgroundColor = "green"
  document.getElementById("orange").style.backgroundColor = "orange"
  document.getElementById("gray").style.backgroundColor = "gray"
}
