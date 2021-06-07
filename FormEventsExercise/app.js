const form = document.querySelector('form');
const groceryList = document.querySelector('#list');

form.addEventListener('submit',(event) => {
    event.preventDefault();
    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;
    addItem(productInput.value, qtyInput.value);
    productInput.value = '';
    qtyInput.value = '';
})

const addItem = (product, qty) =>{
    const newProduct = document.createElement('li');
    newProduct.innerText = (`${qty} ${product}s`);
    groceryList.appendChild(newProduct);
}

