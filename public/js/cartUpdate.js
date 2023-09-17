// Initialize cartContent with the data from local storage, if available
let cartContent = JSON.parse(localStorage.getItem('cart')) || [];

// Function to save the cart content to local storage
function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cartContent));
};
document.querySelectorAll('.add-to-cart-button').forEach(function (button) {
  button.addEventListener('click', function () {
    const itemName = button.getAttribute('data-name');
    const itemImage = button.getAttribute('data-img');
    const itemPrice = button.getAttribute('data-price');

    const item = {
      name: itemName,
      image: itemImage,
      price: itemPrice
    };

    cartContent.push(item);
    updateCart(item);
    swal("Item added to the cart!", "", "success");
    saveCartToLocalStorage();
  });
});
document.getElementById('cart').addEventListener('click', function(){
  showCart();
});

function showCart() {
  const asideContainer = document.getElementById('section-container');
  asideContainer.innerHTML = ''; // Clear the existing content
  const cartContent = JSON.parse(localStorage.getItem('cart')) || [];

  cartContent.forEach(selectedItem => {
    const cartSection = document.createElement('div');
    cartSection.classList.add('cart-container');

    const cartItemName = document.createElement('h3');
    cartItemName.textContent = selectedItem.name;

    const cartItemImage = document.createElement('img');
    cartItemImage.src = selectedItem.image;
    cartSection.appendChild(cartItemImage);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      removeFromCart(selectedItem.name); // Pass the item name
    });

    const cartItemPrice = document.createElement('p');
    cartItemPrice.textContent = `Price: $${selectedItem.price}`;

    cartSection.appendChild(cartItemName);
    cartSection.appendChild(deleteButton);
    cartSection.appendChild(cartItemPrice);
    asideContainer.appendChild(cartSection);
  });

  // Save the cart to local storage after updating the display
  saveCartToLocalStorage();
}


function  updateCart(item) {
  const arrayItem = item;
  const index = cartContent.indexOf(arrayItem);
  console.log(index);

  const selectedItem = cartContent[index]
  const asideContainer = document.getElementById('section-container');
  asideContainer.innerHTML = '';
  const cartSection = document.createElement('div')
  cartSection.classList.add('cart-container');

  const cartItemName = document.createElement('h3');
  cartItemName.textContent = selectedItem.name;

  const cartItemImage = document.createElement('img');
  cartItemImage.src = selectedItem.image;
  cartSection.appendChild(cartItemImage);


  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function () {
    removeFromCart(selectedItem.name); // Pass the item name
  });

  const cartItemPrice = document.createElement('p');
  cartItemPrice.textContent = `Price: $${selectedItem.price}`;

  cartSection.appendChild(cartItemName);
  cartSection.appendChild(deleteButton);
  cartSection.appendChild(cartItemPrice);
  asideContainer.appendChild(cartSection);

  saveCartToLocalStorage();
};

function updateCheckout(){
  const checkoutContainer = document.getElementById('checkout-container');
  checkoutContainer.innerHTML = ''; // Clear the existing content

  // Retrieve the cart content from local storage
  const cartContent = JSON.parse(localStorage.getItem('cart')) || [];

  cartContent.forEach(selectedItem => {
    const cartSection = document.createElement('div')
    cartSection.classList.add('cart-container');

    const cartItemName = document.createElement('h3');
    cartItemName.textContent = selectedItem.name;

    const cartItemImage = document.createElement('img');
    cartItemImage.src = selectedItem.image;
    cartSection.appendChild(cartItemImage);
     // Create a delete button

  // const deleteButton = document.createElement('button');
  // deleteButton.textContent = 'Delete';
  // deleteButton.addEventListener('click', function () {
  //   removeFromCart(selectedItem); // Call a function to remove the item
  // });

    const cartItemPrice = document.createElement('p');
    cartItemPrice.textContent = `Price: $${selectedItem.price}`;

    cartSection.appendChild(cartItemName);
    cartSection.appendChild(cartItemPrice);
    // cartSection.appendChild(deleteButton);
    checkoutContainer.appendChild(cartSection);
  });
}


if (window.location.pathname === '/checkout') {
  updateTotalPrice();
}


function updateTotalPrice(){
  const totalPriceElement = document.getElementById('total-price');
  const totalPrice = cartContent.reduce((total, item) => total + parseFloat(item.price), 0);
  const totalPriceInteger = Math.floor(totalPrice);

  totalPriceElement.textContent = `Total Price: $${totalPriceInteger}`;

}

function removeFromCart(itemName) {
  const index = cartContent.findIndex(item => item.name === itemName);
  if (index !== -1) {
    cartContent.splice(index, 1);
    updateCartDisplay();
    saveCartToLocalStorage();
  }
}
function updateCartDisplay() {
  const asideContainer = document.getElementById('section-container');
  asideContainer.innerHTML = '';

  cartContent.forEach(item => {
    updateCart(item);
  });
}

// document.addEventListener('DOMContentLoaded', function () {
//   if (window.location.pathname === '/checkout') {
//     updateCheckout();
//     updateTotalPrice();
//   }
// });

// // Event listener for the cart button
// document.getElementById('cart').addEventListener('click', function () {
//   showCart();
// });



updateCheckout();
