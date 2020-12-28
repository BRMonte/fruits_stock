window.onload = function() {
  var oranges = document.getElementById("orangeCounter").innerHTML
  var bananas = document.getElementById("bananaCounter").innerHTML
  var apples = document.getElementById("appleCounter").innerHTML
  var melancias = document.getElementById("melanciaCounter").innerHTML

  document.getElementById("orangeButton").onclick = function() {
    oranges--;
    document.getElementById("orangeCounter").innerHTML = oranges;
  }

  document.getElementById("bananaButton").onclick = function() {
    bananas--;
    document.getElementById("bananaCounter").innerHTML = bananas;
  }

  document.getElementById("appleButton").onclick = function() {
    apples--;
    document.getElementById("appleCounter").innerHTML = apples;
  }

  document.getElementById("melanciaButton").onclick = function() {
    melancias--;
    document.getElementById("melanciaCounter").innerHTML = melancias;
  }

}
