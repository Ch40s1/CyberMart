// // Get references to the cart icon and cart aside
// const cartIcon = document.getElementById('cart');
// const cartAside = document.getElementById('cart-aside');

// cartIcon.addEventListener('click', ()=> {
//   console.log('clicked');
// })

// cartIcon.addEventListener('click', async () => {
//   console.log('Cart icon clicked'); // Check if click event is triggered

//   // Check if the cart aside is currently visible
//   if (cartAside.classList.contains('d-none')) {
//     try {
//       const response = await fetch('/cart'); // Request the cart page
//       const cartHtml = await response.text(); // Get the HTML content of the cart page

//       // Set the HTML content of the cart aside to the fetched content
//       cartAside.innerHTML = cartHtml;

//       // Show the cart aside
//       cartAside.classList.remove('d-none');
//     } catch (error) {
//       console.error('Error loading cart data:', error);
//     }
//   } else {
//     // Cart aside is visible, hide it when clicked again
//     cartAside.classList.add('d-none');
//   }
// });
// Get references to the cart icon and the cart-aside element
const cartIcon = document.getElementById("cart");
const cartAside = document.getElementById("cart-aside");

// Add a click event listener to the cart icon
cartIcon.addEventListener("click", () => {
  console.log('cart clikced');
  // Toggle the visibility of the cart-aside element
  cartAside.classList.toggle("open");
});
