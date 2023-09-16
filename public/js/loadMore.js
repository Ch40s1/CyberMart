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
    })
    .catch((error) => {
      console.error('Error loading more items:', error);
    });
});



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
