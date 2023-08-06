// Datos de muestra de productos
const products = [
  { id: 1, name: 'Producto 1', price: 10 },
  { id: 2, name: 'Producto 2', price: 15 },
  { id: 3, name: 'Producto 3', price: 20 },
  { id: 4, name: 'Producto 4', price: 25 },
];

// Array para almacenar los productos en el carrito
let cartItems = [];

// Función para agregar un producto al carrito
function addToCart(product) {
  cartItems.push(product);
  updateCartView();
}

// Función para eliminar un producto del carrito
function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.id !== productId);
  updateCartView();
}

// Función para calcular el total del carrito
function calculateTotal() {
  return cartItems.reduce((total, item) => total + item.price, 0);
}

// Función para actualizar la vista del carrito
function updateCartView() {
  const cartList = $('#cart-items');
  cartList.empty();

  cartItems.forEach(item => {
    const listItem = $('<li>');
    listItem.text(`${item.name} - $${item.price}`);
    const deleteButton = $('<button class="delete-btn">Eliminar</button>');
    deleteButton.data('id', item.id);
    listItem.append(deleteButton);
    cartList.append(listItem);
  });

  const cartTotal = $('#cart-total');
  cartTotal.text(`$${calculateTotal()}`);
}

// Evento click para agregar productos al carrito
$('#product-list').on('click', '.add-to-cart-btn', function() {
  const productId = $(this).data('id');
  const product = products.find(item => item.id === productId);
  addToCart(product);
});

// Evento click para eliminar productos del carrito
$('#cart-items').on('click', '.delete-btn', function() {
  const productId = $(this).data('id');
  removeFromCart(productId);
});

// Función para cargar la lista de productos en la vista
function loadProductList() {
  const productList = $('#product-list');
  products.forEach(product => {
    const listItem = $(`<li>${product.name} - $${product.price}</li>`);
    const addToCartButton = $('<button class="add-to-cart-btn">Agregar al Carrito</button>');
    addToCartButton.data('id', product.id);
    listItem.append(addToCartButton);
    productList.append(listItem);
  });
}

// Cargar la lista de productos cuando la página se carga
$(document).ready(function() {
  loadProductList();
});
