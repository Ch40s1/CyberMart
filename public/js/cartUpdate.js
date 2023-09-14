let cartContent = [];

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
  });
});

function updateCart(item) {
  const arrayItem = item;
  const index = cartContent.indexOf(arrayItem);
  console.log(index);

  const selectedItem = cartContent[index]
  const asideContainer = document.getElementById('cart-aside');

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
};
