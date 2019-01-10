const space = document.querySelector('.container');
const container = document.querySelector('[data-attr="tooltip"]');

const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
container.appendChild(tooltip);

function throttle(func, ms) {
  let isThrottled = false;
  let savedArgs = null;
  let savedThis = null;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }
  return wrapper;
}

const positioningTooltip = (x, y) => {
  tooltip.style.left = `${x - 90}px`;
  tooltip.style.top = `${y - 80}px`;
};

const addContent = (x, y) => {
  tooltip.textContent = `x:${x}, ` + `y:${y}`;
};

const f = throttle(addContent, 1000);

window.addEventListener('mousemove', (event) => {
  event = event || window.event;

  if (event.target.parentNode === space) {
    const x = event.pageX;
    const y = event.pageY;
    positioningTooltip(x, y);
    f(x, y);
  } else {
    positioningTooltip(-100, -100);
  }
});


