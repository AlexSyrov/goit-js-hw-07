const categList = document.querySelectorAll('.item');
for (let i = 0; i < categList.length; i += 1) {
  console.log(`В списке ${categList.length} категории.`);
}

categList.forEach(element => {
  const title = element.querySelector('h2');
  const categoriesEl = element.querySelectorAll('li');
  console.log(`Категория: ${title.textContent}
  Количество элементов: ${categoriesEl.length}`);
});
