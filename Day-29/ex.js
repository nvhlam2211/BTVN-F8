var carousel = document.querySelector(".carousel");

var carouselInner = carousel.querySelector(".carousel-inner");

var carouselNav = carousel.querySelector(".carousel-nav");

var carouselDots = carousel.querySelector(".carousel-dots");

var navNext = carouselNav.querySelector(".next");
var navPrev = carouselNav.querySelector(".prev");

var renderDots = function (indexDot = 0) {
  var dotsHtml = "";
  carouselItems.forEach(function (item, _index) {
    dotsHtml += `<span data-index="${_index}" ${
      +_index === +indexDot ? 'class="active"' : ""
    }></span>`;
  });
  carouselDots.innerHTML = dotsHtml;

  carouselDots.addEventListener("click", function (e) {
    if (e.target.nodeName === "SPAN") {
      var indexClicked = e.target.dataset.index;
      index = indexClicked;
      goSlide();
    }
  });
};

var goSlide = function () {
  position = 0 - index * itemWidth;
  carouselInner.style.translate = `${position}px`;
  renderDots(index);
};

var carouselItems = carouselInner.querySelectorAll(".item");

if (carouselItems.length) {

  var itemWidth = carouselInner.clientWidth; 

  var totalWidth = itemWidth * carouselItems.length;

  carouselInner.style.width = `${totalWidth}px`;

  renderDots();

  var position = 0;
  var index = 0;
  navNext.addEventListener("click", function () {
    if (Math.abs(position) < totalWidth - itemWidth) {
      position -= itemWidth;
      index++;
      carouselInner.style.translate = `${position}px`;
      renderDots(index);
    }
  });

  navPrev.addEventListener("click", function () {
    if (position < 0) {
      position += itemWidth;
      index--;
      carouselInner.style.translate = `${position}px`;
      renderDots(index);
    }
  });
}

var isDrag = false;
var initialOffsetX = 0;
var moveWidth;

carousel.addEventListener("mousedown", function (e) {
  e.preventDefault();
  carousel.classList.add("drag");
});

carousel.addEventListener("mouseup", function (e) {
  e.preventDefault();
  carousel.classList.remove("drag");
});

carouselInner.addEventListener("mousedown", function (e) {
  e.preventDefault();
  if (e.which === 1) {
    isDrag = true;
    initialOffsetX = e.offsetX;
  }
});

carouselInner.addEventListener("mouseup", function () {
  isDrag = false;
  carouselInner.style.transition = null;
  if (moveWidth < 0) {
    if (Math.abs(moveWidth) > 100 && index < carouselItems.length - 1) {
      index++;
    }

    goSlide(index);
  } else {
    if (Math.abs(moveWidth) > 100 && index > 0) {
      index--;
    }

    position = 0 - index * itemWidth;
    carouselInner.style.translate = `${position}px`;

    goSlide(index);
  }
});

carouselInner.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (isDrag) {
    moveWidth = e.offsetX - initialOffsetX;
    carouselInner.style.transition = "none";
    carouselInner.style.translate = `${position + moveWidth}px`;
  }
});