function generateParticles(n) {
  let value = `${getRandom(2560)}px ${getRandom(2560)}px #FFF`;
  for (let i = 2; i <= n; i++) {
    value += `, ${getRandom(2560)}px ${getRandom(2560)}px #FFF`;
  }
  return value;
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function initBG() {
  const particlesLarge = generateParticles(250);
  const particles3 = document.getElementById("particles3");

  if (particles3) {
    particles3.style.cssText = `
      width: 2px;
      height: 2px;
      border-radius: 50%;
      box-shadow: ${particlesLarge};
      shadow-color:red;
      animation: animateParticle 150s linear infinite;`;
  }
}

document.addEventListener("astro:after-swap", initBG);
initBG();
