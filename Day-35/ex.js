var count = 30;
var interval = 1000;
var timer = 0;
var counterEl = document.querySelector(".counter");
var btn = document.querySelector(".btn");

btn.disabled = true;

var handleDecrement = function (curentTime) {
  if (timer <= curentTime) {
    count--;
    counterEl.innerText = count;
    timer = curentTime + interval;
  }

  if (count > 0) {
    window.requestAnimationFrame(handleDecrement);
  } else {
    btn.disabled = false;
  }
};

window.requestAnimationFrame(handleDecrement);

btn.addEventListener("click", function () {
  if (count === 0) {
    window.location.href = "https://fullstack.edu.vn";
  }
});
