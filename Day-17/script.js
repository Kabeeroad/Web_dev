// Get the two circles
const greenCircle = document.querySelector("#green-circle");
const redCircle = document.querySelector("#red-circle");

// Set the initial positions of the circles
greenCircle.style.left = "100px";
redCircle.style.left = "900px";

// Define a function to move the circles
function moveCircles() {
  // Move the green circle to the right
  greenCircle.style.left = parseInt(greenCircle.style.left) + 10 + "px";

  // Move the red circle to the left
  redCircle.style.left = parseInt(redCircle.style.left) - 10 + "px";

  // If either circle reaches the edge of the screen, move it to the other side
  if (greenCircle.style.left >= window.innerWidth) {
    greenCircle.style.left = "-100px";
  }

  if (redCircle.style.left <= 0) {
    redCircle.style.left = window.innerWidth + "100px";
  }

  // Request the next animation frame
  requestAnimationFrame(moveCircles);
}

// Start the animation
moveCircles();
