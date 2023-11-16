const animatedElement = document.getElementById('#name');
let isMovingRight = true;

function animate() {
  const currentLeft = parseFloat(getComputedStyle(animatedElement).left);
  
  if (isMovingRight && currentLeft + animatedElement.clientWidth >= window.innerWidth) {
    isMovingRight = false;
  } else if (!isMovingRight && currentLeft <= 0) {
    isMovingRight = true;
  }

  const direction = isMovingRight ? 1 : 2;
  animatedElement.style.transform = `translateX(${currentLeft + 2 * direction}px)`;

  requestAnimationFrame(animate);
}

animate();
