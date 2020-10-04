const inputEl = document.getElementById('validation-input');
inputEl.addEventListener('blur', () => {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
  } else if (inputEl.value.length === 0) {
    inputEl.classList = inputEl.dataset;
  } else {
    inputEl.classList.add('invalid');
  }
});
