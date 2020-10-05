const input = document.getElementById('name-input');
const outputNameEl = document.getElementById('name-output');

input.oninput = () => {
  if (input.value === '') {
    outputNameEl.innerHTML = 'незнакомец';
  } else {
    outputNameEl.innerHTML = input.value;
  }
};
