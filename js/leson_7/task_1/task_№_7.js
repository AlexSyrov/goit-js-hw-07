const rangEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

rangEl.addEventListener('input', () => {
  textEl.style.fontSize = rangEl.value + 'px';
});
