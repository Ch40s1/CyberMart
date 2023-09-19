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
document.querySelectorAll('.cat').forEach(function (button) {
  button.addEventListener('click', function () {
    const categoryFilter = button.getAttribute('data-category');
    const itemContainer = document.getElementById('item-container');
    const items = Array.from(itemContainer.querySelectorAll('.product-container'));

    const filteredItems = items.filter(item => {
      const itemCategory = item.querySelector('li:last-child').textContent;
      return itemCategory === categoryFilter;
    });

    itemContainer.innerHTML = '';
    filteredItems.forEach((item) => {
      itemContainer.appendChild(item);
    });
  });
});