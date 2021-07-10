const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const navRef = document.getElementById('ingredients');

const array = [];
ingredients.forEach((value) => {
const listLi = document.createElement("li");
listLi.textContent = value;
array.push(listLi.outerHTML);
});

const stringList = array.join(" ");
navRef.insertAdjacentHTML("afterbegin", stringList);