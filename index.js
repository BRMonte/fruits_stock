window.onload = function() {
  var oranges = document.getElementById("orangeCounter").innerHTML
  var bananas = document.getElementById("bananaCounter").innerHTML
  var apples = document.getElementById("appleCounter").innerHTML
  var melancias = document.getElementById("melanciaCounter").innerHTML

  document.getElementById("orangeButton").onclick = function() {
    if (oranges > 0) {
      oranges--;
      document.getElementById("orangeCounter").innerHTML = oranges;
    }
  }

  document.getElementById("bananaButton").onclick = function() {
    if (bananas > 0) {
      bananas--;
      document.getElementById("bananaCounter").innerHTML = bananas;
    }
  }

  document.getElementById("appleButton").onclick = function() {
    if (apples > 0) {
      apples--;
      document.getElementById("appleCounter").innerHTML = apples;
    }

  }

  document.getElementById("melanciaButton").onclick = function() {
    if (melancias > 0) {
      melancias--;
      document.getElementById("melanciaCounter").innerHTML = melancias;
    }
  }
}
