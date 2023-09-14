// const loadMoreButton = document.getElementById('load-more');
// const itemContainer = document.getElementById('item-container');
// let currentPage = 1;

// loadMoreButton.addEventListener('click', () => {
//   currentPage += 1;

//   fetch(`/=${currentPage}`)
//     .then((response) => response.json())
//     .then((data) => {
//       // Check if there are no more items to load
//       if (data.length === 0) {
//         loadMoreButton.style.display = 'none'; // Hide the button
//         return;
//       }

//       // Append the new items to the item container
//       data.forEach((item) => {
//         const itemElement = createItemElement(item);
//         itemContainer.appendChild(itemElement);
//       });
//     })
//     .catch((error) => {
//       console.error('Error loading more items:', error);
//     });
// });

// // Helper function to create an item element
// function createItemElement(item) {
//   const itemDiv = document.createElement('div');
//   itemDiv.className = 'product-container col-lg-3 col-md-6 col-sm-12 d-flex flex-column align-items-center';

//   itemDiv.innerHTML = `
//     <img src="${item.image_url}" />
//     <div class="d-flex flex-column align-items-center">
//       <ul>
//         <li>${item.name}</li>
//         <li>$${item.price}</li>
//         ${item.user ? `<li>Added by: ${item.user.name}</li>` : ''}
//       </ul>
//     </div>
//   `;

//   return itemDiv;
// }
