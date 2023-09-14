const cartIcon = document.getElementById("cart");
const cartAside = document.getElementById("cart-aside");
const exit = document.getElementById('exit-marker');

// Add a click event listener to the cart icon
cartIcon.addEventListener("click", () => {
  console.log('cart clikced');
  // Toggle the visibility of the cart-aside element
  cartAside.classList.toggle("open");
});

exit.addEventListener('click',()=>{
  cartAside.classList.toggle("open");
})
