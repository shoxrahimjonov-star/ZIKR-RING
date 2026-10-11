// 1-exem: HTML elementlarini olish
const display = document.querySelector("#display");
const click = document.querySelector("#click");
const reset = document.querySelector("#reset");
const lightBtn = document.querySelector("#light");
const tasbeh = document.querySelector("#tasbeh");

// 2-exem: Sanagich va ovoz
let sanoq = 0;

const sound = new Audio("mixkit-fast-double-click-on-mouse-275.wav");

// 3-exem: Displeyni yangilash
function handleDisplay() {
  display.textContent = sanoq;
}

// 4-exem: Ovoz chiqarish
function playSound() {
  sound.currentTime = 0;

  sound.play().catch(() => {
    // Ovoz ishlamasa, sanash davom etadi.
  });
}

// 5-exem: Sanash tugmasi
click.addEventListener("click", () => {
  sanoq++;
  handleDisplay();
  playSound();
});

// 6-exem: Nolga qaytarish
reset.addEventListener("click", () => {
  sanoq = 0;
  handleDisplay();
  playSound();
});

// 7-exem: Displey chirog'i
lightBtn.addEventListener("click", () => {
  display.classList.toggle("light");
  tasbeh.classList.toggle("lit");
});
