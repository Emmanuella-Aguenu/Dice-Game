
          // First Die
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImage1 = "images/dice" + randomNumber1 + ".png";

document.querySelector("img.img1").setAttribute("src", randomImage1);


          // Second Die
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector("img.img2").setAttribute("src", randomImage2);


          // Winning Conditions
if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}
          // Draw
else {
  document.querySelector("h1").innerHTML = "Draw"
}


// else if (randomNumber1 === randomNumber2) {
//   document.querySelector("h1").innerHTML = "Draw";
// }
// this also works for when there is a draw
