(function anon() {
  const space = document.querySelector('.container');
  const tooltip = document.querySelector('.tooltip');

  const addCoordinates = (x, y) => {
    tooltip.textContent = `x:${x}, ` + `y:${y}`;
    tooltip.style.left = `${x - 90}px`;
    tooltip.style.top = `${y - 80 }px`;
  };

  window.addEventListener('mousemove', (event) => {
    event = event || window.event;
    if (event.target.parentNode === space) {
      event = event || window.event;
      const x = event.pageX;
      const y = event.pageY;
      addCoordinates(x, y);
    } else {
      addCoordinates(-100, -100);
    }
  });
}());
