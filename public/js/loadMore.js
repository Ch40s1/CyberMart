const loadMoreButton = document.getElementById('load-more');
const itemContainer = document.getElementById('item-container');
let currentPage = 1;

loadMoreButton.addEventListener('click', () => {
  currentPage += 1;

  fetch(`/?page=${currentPage}`)
    .then((response) => response.text())
    .then((html) => {
      // Clear the existing content in the item container
      itemContainer.innerHTML = '';

      // Parse the new HTML content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;

      // Find the item container in the parsed HTML
      const newItemsContainer = tempDiv.querySelector('#item-container');

      if (newItemsContainer) {
        // Append the new items to the item container
        itemContainer.appendChild(newItemsContainer);
      }

      // Check if there are no more items to load
      if (tempDiv.querySelector('#load-more').style.display === 'none') {
        loadMoreButton.style.display = 'none'; // Hide the button
      }

      attachEventListeners();
    })
    .catch((error) => {
      console.error('Error loading more items:', error);
    });
});

function attachEventListeners() {
  document.querySelectorAll('.cat').forEach(function (button) {
    button.addEventListener('click', function () {
      const categoryFilter = button.getAttribute('data-category');
      const itemContainer = document.getElementById('item-container');
      const items = Array.from(itemContainer.querySelectorAll('.product-container'));
  
      const filteredItems = items.filter(item => {
        const itemCategory = item.getAttribute('data-category');
        return itemCategory === categoryFilter;
      });
      console.log("FILTERED ITEMS", filteredItems);
  
      itemContainer.innerHTML = '';
  
      if (filteredItems.length) {
        itemContainer.innerHTML = '';
        filteredItems.forEach((item) => {
          itemContainer.appendChild(item);
        });
      }
    });
  });
}

attachEventListeners();
// document.querySelector('.motherboard').forEach(function(button){
//   button.addEventListener('click', function (){
//     const boardfilter = button.getAttribute('data-cat');
//     const itemContainer = document.getElementById('item-container');
//     const motherB = Array.from(itemContainer.querySelectorAll('.product-container'));

//     const filteredItems = items.filter(motherB => {
//       const itemCategory = item.getAttribute('data-category');
//       return itemCategory === boardfilter;
//     })
//   })
// })

// document.querySelectorAll('.cat').forEach(function(button) {
//   button.addEventListener('click', function() {
//     const category11 = button.getAttribute('data-category');
//     alert("Category: " + category11);
//   });
// });

// document.querySelectorAll('.mon').forEach(function(button){
//   button.addEventListener('click', function(){
//     const mon1 = button.value.getAttribute('Monitors');
//     alert("monitors trying");
//   })
// })

// // Helper function to create an item element
// function createItemElement(item) {
//   const itemDiv = document.createElement('div');
//   itemDiv.className = 'product-container col-lg-3 col-md-6 col-sm-12 d-flex flex-column align-items-center';

//   itemDiv.innerHTML = `
//   <div class="product-container col-lg-3 col-md-6 col-sm-12 d-flex flex-column align-items-center">
//     <img src="{{this.image_url}}" />
//     <div class="d-flex flex-column align-items-center">
//       <ul>
//         <li>{{this.name}}</li>
//         <li>{{this.price}}</li>
//         {{#if this.user}}
//         <li>Added by: {{this.user.name}}</li>
//         {{/if}}
//       </ul>
//     </div>
//     <button class="add-to-cart-button" data-name="{{this.name}}" data-img="{{this.image_url}}"
//       data-price="{{this.price}}">Add To Cart</button>
//   </div>
//   `;

//   return itemDiv;
// }
