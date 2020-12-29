window.onload = function() {

  var fruits = {
    oranges: document.getElementById("orangeCounter").innerHTML,
    bananas: document.getElementById("bananaCounter").innerHTML,
    apples: document.getElementById("appleCounter").innerHTML,
    melancias: document.getElementById("melanciaCounter").innerHTML
  };

  document.getElementById("orangeButton").onclick = function() {
    if (fruits["oranges"] > 0) {
      fruits["oranges"]--;
      document.getElementById("orangeCounter").innerHTML = fruits["oranges"];
    }
  }
  document.getElementById("orangeFix").onclick = function() {
    fruits["oranges"]++;
    document.getElementById("orangeCounter").innerHTML = fruits["oranges"];
  }

  document.getElementById("bananaButton").onclick = function() {
    if (fruits["bananas"] > 0) {
      fruits["bananas"]--;
      document.getElementById("bananaCounter").innerHTML = fruits["bananas"];
    }
  }
  document.getElementById("bananaFix").onclick = function() {
    fruits["bananas"]++;
    document.getElementById("bananaCounter").innerHTML = fruits["bananas"];
  }

  document.getElementById("appleButton").onclick = function() {
    if (fruits["apples"] > 0) {
      fruits["apples"]--;
      document.getElementById("appleCounter").innerHTML = fruits["apples"];
    }
  }
  document.getElementById("appleFix").onclick = function() {
    fruits["apples"]++;
    document.getElementById("appleCounter").innerHTML = fruits["apples"];
  }

  document.getElementById("melanciaButton").onclick = function() {
    if (fruits["melancias"] > 0) {
      fruits["melancias"]--;
      document.getElementById("melanciaCounter").innerHTML = fruits["melancias"];
    }
  }
  document.getElementById("melanciaFix").onclick = function() {
    fruits["melancias"]++;
    document.getElementById("melanciaCounter").innerHTML = fruits["melancias"];
  }
}
