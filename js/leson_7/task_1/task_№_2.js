const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('ul');

const elements = ingredients.map(options => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = options;
  return ingredientsEl;
});

console.log(ingredientsList);
ingredientsList.append(...elements);
