window.onload = function() {
  var oranges = document.getElementById("orangeCounter").innerHTML
  var bananas = document.getElementById("bananaCounter").innerHTML
  var apples = document.getElementById("appleCounter").innerHTML
  var melancias = document.getElementById("melanciaCounter").innerHTML

  document.getElementById("orangeButton").onclick = function() {
    oranges--;
    document.getElementById("orangeCounter").innerHTML = oranges;
  }

}

