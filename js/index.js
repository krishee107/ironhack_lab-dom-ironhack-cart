// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price    = product.querySelector('.price span').textContent;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;

  product.querySelector('.subtotal span').innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  let products = document.getElementsByClassName('product');
  let total = 0;
  
  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  event.currentTarget.closest('.product').remove();
}

// ITERATION 5

function createProduct() {
  //Recoger datos
  let productName = document.querySelector('.create-product input[type=text]').value;
  let productPrice = document.querySelector('.create-product input[type=number]').value;

  //Lo dejamos en blanco
  document.querySelector('.create-product input[type=text]').value = "";
  document.querySelector('.create-product input[type=number]').value = "";

  //Añadir
  let nuevoProducto = document.querySelector('.product').cloneNode('true');
  nuevoProducto.querySelector('.name span').innerHTML = productName;
  nuevoProducto.querySelector('.price span').innerHTML = productPrice;
  nuevoProducto.querySelector('.subtotal span').innerHTML = 0;
  nuevoProducto.querySelector('.btn-remove').addEventListener('click', removeProduct);
  document.querySelector('tbody').appendChild(nuevoProducto)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //Remove
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(btn => {
    btn.addEventListener('click', event =>{
      removeProduct(event);
    })
  });

  
  // Create 
  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);
});

