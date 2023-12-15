/* -----------------------------------
CSS COLOOOORS
// -------------------------------------- */
function witchColor() {
  var randomColor = [ 'yellowgreen', 'blue', 'orangered', 'mediumslateblue'][Math.floor(Math.random() * 4)]


  console.log(randomColor);
  var newColor=":root{--thisColor: " + randomColor + ";}"

  var styleSheet = document.createElement("style")
  styleSheet.innerText = newColor
  document.head.appendChild(styleSheet)
}


witchColor()