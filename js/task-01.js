const categoriesRef = document.querySelectorAll("#categories");
const itemQuantityRef = document.querySelectorAll(".item");
console.log (`В списке ${itemQuantityRef.length} категории.`);

for (let i = 0; i <itemQuantityRef.length; i++) {
        const category = itemQuantityRef[i].firstElementChild;
        const itemOther = category.nextElementSibling.children.length;

        console.log(`
        Категория: ${category.innerText}
        Количество элементов: ${itemOther}
	`);
}