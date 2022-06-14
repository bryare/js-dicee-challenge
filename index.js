// alert("HEllo");
// var randomNumber1 = Math.random();
// randomNumber1 *= 6;
// randomNumber1 = Math.floor(randomNumber1) + 1;

// var randomNumber2 = Math.random();
// randomNumber2 *= 6;
// randomNumber2 = Math.floor(randomNumber2) + 1;

// var image1 = document.getElementsByClassName("h1");
// image1.setAttribute("'src', './images/dice' + randomNumber1 + '.png'");

var randomNumber1 = Math.random();
randomNumber1 *= 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random();
randomNumber2 *= 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

//   var image1 = document.getElementsByClassName(".img1");
//   console.log(image1);
// var dice = "'./images/dice' + randomNumber1 + '.png'"; DOESNT WORK
//   var dice = (image1.src = "./images/dice" + randomNumber1 + ".png");

//   console.log(dice);

document
  .querySelector(".img1")
  .setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document
  .querySelector(".img2")
  .setAttribute("src", "./images/dice" + randomNumber2 + ".png");
//   image1.setAttribute("src", "./images/dice' + randomNumber1 + '.png");

if (randomNumber1 === randomNumber2) {
  document.querySelector(".title").textContent = "DRAW";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector(".title").textContent = "🚩 Player 1 Wins!";
} else {
  document.querySelector(".title").textContent = "Player 2 Wins! 🚩";
}
