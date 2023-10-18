const categories = document.querySelector('#categories')
const items = document.querySelectorAll('.item')
console.log(`Number of categories: ${items.length}`);

items.forEach(e => {
    console.log(
        `Category: ${e.querySelector('h2').textContent}`,
    `Elements: ${e.querySelectorAll('li').length}`);
})