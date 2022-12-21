var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// this is the main operation to set random numbers
var randomDiceImage = "dice" + randomNumber1 + ".png";
// this is to set a random number in a dice image
var includeImage = "images/" + randomDiceImage;
// this declares all the source for the first dice
var image1 = document.querySelectorAll("img")[0];
// here we select the image of the first dice at index 0
image1.setAttribute("src", includeImage);
// and change its attribute to include the random source for dice image that we created
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// here is another operation for the second dice
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
// then, we add the source with the random dice number for the second dice
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);
// first we select the img of second dice and change the attribute of source for the one that we created again
if (randomNumber1 > randomNumber2) {
// this is a condition that set a winner between first and second player, in this case if player 1 has a bigger number than 2 then...
    document.querySelector('h1').innerHTML="🎉 Player 1 Wins!";
// select the title and change its content to this text
  } else if (randomNumber1 < randomNumber2) {
// if not, check if happens the opposite situation and do the next...
    document.querySelector("h1").innerHTML="Player 2 Wins! 🎉";
// select the title and change its content to this another text
  } else if (randomNumber1 === randomNumber2) {
// if both of them are equal then...
    document.querySelector('h1').innerText="🎉 Draw! 🎉";
// select the title and change its content to this last text
  }
