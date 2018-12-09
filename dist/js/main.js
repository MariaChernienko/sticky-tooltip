(function anon() {
  const space = document.querySelector(".container");

  const createTooltip = function(x, y) {
    const newEl = document.createElement("div");
    newEl.classList.add("tooltip");
    newEl.textContent = "x:" + x + ", " + "y:" + y;
    space.appendChild(newEl);
    newEl.style.left = x - 90 + "px";
    newEl.style.top = y - 60 + "px";
  };

  space.addEventListener("mousemove", event => {
    document.querySelector(".tooltip").remove();
    event = event || window.event;
    let x = event.pageX;
    let y = event.pageY;
    createTooltip(x, y);
  });
})();
