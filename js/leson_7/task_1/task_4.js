// const increment = document.querySelector('[data-action="increment"]');
// const decrement = document.querySelector('[data-action="decrement"]');
// let counterValue = document.querySelector('#value');

// increment.addEventListener('click', () => {
//   counterValue.innerHTML++;
// });

// decrement.addEventListener('click', () => {
//   counterValue.innerHTML--;
// });

const button = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector('#value'),
};

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  button.span.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  button.span.textContent = counterValue;
};
button.sub.addEventListener('click', increment);
button.add.addEventListener('click', decrement);
