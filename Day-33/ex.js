var list = document.querySelector(".list");
var moduleIndex = 0;
var lessonIndex = 0;
var getMouseOffset = function (event) {
  var rect = event.target.getBoundingClientRect();
  var offset = {
    x: event.pageX - rect.left,
    y: event.pageY - rect.top,
  };
  return offset;
};

var getElementVerticalCenter = function (el) {
  var rect = el.getBoundingClientRect();
  return (rect.bottom - rect.top) / 2;
};

var sortable = function (rootEl, onUpdate) {
  var dragEl;
  render(rootEl);
  var handleDragOver = function (event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";

    var target = event.target;

    if (target && target !== dragEl && target.nodeName === "DIV") {
      var offset = getMouseOffset(event);
      var middleY = getElementVerticalCenter(target);
      if (offset.y > middleY) {
        if (target.nextSibling.parentElement === rootEl) {
          rootEl.insertBefore(dragEl, target.nextSibling);
        }
      } else {
        if (target.parentElement === rootEl) {
          rootEl.insertBefore(dragEl, target);
        }
      }
    }
  };

  var handleDragEnd = function (event) {
    event.preventDefault();
    rootEl.removeEventListener("dragover", handleDragOver);
    rootEl.removeEventListener("dragend", handleDragEnd);

    dragEl.classList.remove("ghost");

    onUpdate(dragEl);
  };

  rootEl.addEventListener("dragstart", function (e) {
    dragEl = e.target;

    rootEl.addEventListener("dragover", handleDragOver);

    rootEl.addEventListener("dragend", handleDragEnd);

    dragEl.classList.add("ghost");
  });
};

var render = function (rootEl) {
  Array.from(rootEl.children).forEach(function (itemEl, index) {
    itemEl.draggable = true;

    var type = "Bài";

    if (itemEl.classList.contains("active")) {
      type = "Module";
      moduleIndex++;
    } else {
      lessonIndex++;
    }

    if (!itemEl.children.length) {
      itemEl.innerHTML = `${type}: ${
        type === "Module" ? moduleIndex : lessonIndex
      }: <span>${itemEl.innerText}</span>`;
    } else {
      itemEl.innerHTML = `${type}: ${
        type === "Module" ? moduleIndex : lessonIndex
      }: <span>${itemEl.children[0].innerText}</span>`;
    }
  });
};

sortable(list, function (item) {
  lessonIndex = 0;
  moduleIndex = 0;
  render(list);
});
