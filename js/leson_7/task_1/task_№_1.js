const categList = document.querySelectorAll('.item');
for (let i = 0; i < categList.length; i += 1) {
  console.log(`В списке ${categList.length} категории.`);
}

const categTitle = document.querySelectorAll('h2');

categTitle.forEach(element => console.log('Категория:', element.textContent));

const categEl = document.querySelectorAll('.item ul');
categEl.forEach(element =>
  console.log('Количество элементов:', element.children.length),
);
