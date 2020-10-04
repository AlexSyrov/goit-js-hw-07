const rangEl = document.querySelector('#font-size-control');
const textEl = document.getElementById('text');

rangEl.addEventListener('input', () => {
  textEl.style.fontSize = rangEl.value + 'px';
});
