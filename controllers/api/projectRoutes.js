// const fs = require('fs');
// const path = require('path');

// router.get('/api/items', (req, res) => {
//   // Get the page parameter from the request query (e.g., /api/items?page=2)
//   const page = parseInt(req.query.page) || 1;
//   const itemsPerPage = 10; // Set the number of items per page

//   // Read the JSON data from your techitems.json file
//   const data = require('./techitems.json');

//   // Calculate the start and end indices for the current page
//   const startIndex = (page - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   // Slice the data array to get items for the current page
//   const items = data.slice(startIndex, endIndex);

//   // Send the items as JSON response
//   res.json(items);
// });


// module.exports = router;
