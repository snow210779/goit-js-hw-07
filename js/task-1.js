const categoriesItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItem.length} `);
categoriesItem.forEach(category => {
  const titleText = category.querySelector('h2').textContent;
  const itemLength = category.querySelectorAll('li').length;
  console.log(`Category: ${titleText}`);
  console.log(`Elements: ${itemLength}`);
});
