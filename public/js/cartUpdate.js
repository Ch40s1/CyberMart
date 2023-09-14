// Initialize cartContent with the data from local storage, if available
let cartContent = JSON.parse(localStorage.getItem('cart')) || [];

// Function to save the cart content to local storage
function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cartContent));
}

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
    saveCartToLocalStorage();
  });
});
document.getElementById('cart').addEventListener('click', function(){
  showCart();
});

function showCart() {

  const asideContainer = document.getElementById('section-container');
  // asideContainer.innerHTML = ''; // Clear the existing content
const cartContent = JSON.parse(localStorage.getItem('cart')) || [];

cartContent.forEach(selectedItem => {
  const cartSection = document.createElement('div')
  cartSection.classList.add('cart-container');

  const cartItemName = document.createElement('h3');
  cartItemName.textContent = selectedItem.name;

  const cartItemImage = document.createElement('img');
  cartItemImage.src = selectedItem.image;
  cartSection.appendChild(cartItemImage);

  const cartItemPrice = document.createElement('p');
  cartItemPrice.textContent = `Price: $${selectedItem.price}`;

  cartSection.appendChild(cartItemName);
  cartSection.appendChild(cartItemPrice);
  asideContainer.appendChild(cartSection);
});
}

function  updateCart(item) {

  const arrayItem = item;
  const index = cartContent.indexOf(arrayItem);
  console.log(index);

  const selectedItem = cartContent[index]
  const asideContainer = document.getElementById('section-container');

  const cartSection = document.createElement('div')
  cartSection.classList.add('cart-container');

  const cartItemName = document.createElement('h3');
  cartItemName.textContent = selectedItem.name;

  const cartItemImage = document.createElement('img');
  cartItemImage.src = selectedItem.image;
  cartSection.appendChild(cartItemImage);

  const cartItemPrice = document.createElement('p');
  cartItemPrice.textContent = `Price: $${selectedItem.price}`;

  cartSection.appendChild(cartItemName);
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

    const cartItemPrice = document.createElement('p');
    cartItemPrice.textContent = `Price: $${selectedItem.price}`;

    cartSection.appendChild(cartItemName);
    cartSection.appendChild(cartItemPrice);
    checkoutContainer.appendChild(cartSection);
  });
}
updateCheckout();
