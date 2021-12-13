const categoryEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoryEl.length}`);
categoryEl.forEach(element => {
    const titleEl = element.querySelector('h2');
    const itemEl = element.querySelectorAll('li');
    console.log(`Category: ${titleEl.textContent}`);
    console.log(`Elements: ${itemEl.length}`);
})