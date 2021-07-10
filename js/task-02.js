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
value = listLi.textContent;
array.push(listLi.outerHTML);
});

const stringList = array.join(" ");
navRef.insertAdjacentHTML("afterbegin", stringList);