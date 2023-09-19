const router = require('express').Router();
const { TechItems, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    let itemsPerPage = 8; // Set the initial number of items per page

    if (req.query.page) {
      // If a page query parameter is provided, calculate the offset
      const page = parseInt(req.query.page);
      itemsPerPage += (page - 1) * 5;
    }

    const techItemData = await TechItems.findAll({
      include: [{ model: User, attributes: ['name'] }],
      limit: itemsPerPage,
    });

    const techItems = techItemData.map((techItem) => techItem.get({ plain: true }));

// techItems.sort(function(a,b){
// return parseFloat(a.category) - parseFloat(b.category)
// })
    res.render('homepage', {
      techItems,
      logged_in: req.session.logged_in,
      user_name: req.session.user_name,
    });
  } catch (err) {
    console.error('Error fetching post data:', err);
    res.status(500).json(err);
  }
});
// router.get('/', async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1; // Get the page number from query params
//     const itemsPerPage = 10; // Set the number of items per page

//     const techItemData = await TechItems.findAll({
//       include: [{ model: User, attributes: ['name'] }],
//       limit: itemsPerPage,
//       offset: (page - 1) * itemsPerPage,
//     });

//     const techItems = techItemData.map((techItem) => techItem.get({ plain: true }));

//     res.render('homepage', {
//       techItems,
//       logged_in: req.session.logged_in,
//       user_name: req.session.user_name,
//       currentPage: page,
//     });
//   } catch (err) {
//     console.error('Error fetching post data:', err);
//     res.status(500).json(err);
//   }
// });

// Define a route for rendering the cart page
router.get('/cart', (req, res) => {
  // Render the "cart.hbs" template without passing any data
  res.render('cart');
});
// // Use withAuth middleware to prevent access to route
// note for dev purposes I took off withAuth but we should prevent access to this
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
      user_name: req.session.user_name,
      user_firstName: req.session.user_firstName,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// router.get('/profile', withAuth, (req, res) => {
//   res.render('profile')
// });
router.get('/checkout',withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    res.render('checkout', {
      ...user,
      logged_in: true,
      user_name: req.session.user_name,
      user_firstName: req.session.user_firstName,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
 // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
