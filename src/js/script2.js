const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//     после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().
const foodIngredients = ingredients.map(ingredient => {
  let listItem = document.createElement('li');
  listItem.textContent = ingredient;
  return listItem;
});

const searchUl = document.querySelector('#ingredients');
searchUl.append(...foodIngredients);
console.log(searchUl);
