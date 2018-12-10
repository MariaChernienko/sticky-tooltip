(function anon() {
  const space = document.querySelector('.container');
  const container = document.querySelector('[data-attr="tooltip"]');
  
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  container.appendChild(tooltip);

  const addTooltip = (x, y) => {
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
      addTooltip(x, y);
      
    } else {
      addTooltip(-100, -100);
    }
  });
}());
