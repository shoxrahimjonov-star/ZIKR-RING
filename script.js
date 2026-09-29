const display = document.querySelector(".display");
const click = document.querySelector("#click");
const reset = document.querySelector("#reset");
const lightBtn = document.querySelector("#light");

let sanoq = 0;

const sound = new Audio("mixkit-fast-double-click-on-mouse-275.wav");

const handleDisplay = () => {
  display.textContent = sanoq;
};

lightBtn.addEventListener("click", () => {
  display.classList.toggle("light");
});

click.addEventListener("click", () => {
  sanoq++;

  sound.currentTime = 0;
  sound.play();

  handleDisplay();
});

reset.addEventListener("click", () => {
  sanoq = 0;
  sound.currentTime = 0;
  sound.play();

  handleDisplay();
});
