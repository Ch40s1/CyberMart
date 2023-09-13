const router = require('express').Router();
const { TechItems, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try{
    const techItemData = await TechItems.findAll({
      // Include User model to get the author's name
      include: [{ model: User, attributes: ['name'] }],
    });
    const techItems = techItemData.map((techitems) => techitems.get({ plain: true }));
    res.render('homepage', {techItems,
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
//       limit: itemsPerPage, // Limit the number of items per page
//       offset: (page - 1) * itemsPerPage, // Calculate the offset based on the page
//     });

//     const techItems = techItemData.map((techItem) => techItem.get({ plain: true }));

//     res.render('homepage', {
//       techItems,
//       logged_in: req.session.logged_in,
//       user_name: req.session.user_name,
//       currentPage: page, // Pass the current page to the template
//     });
//   } catch (err) {
//     console.error('Error fetching post data:', err);
//     res.status(500).json(err);
//   }
// });

// router.get('/project/:id', async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });

//     res.render('project', {
//       ...project,
//       logged_in: req.session.logged_in,
//       user_name: req.session.user_name,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// note for dev purposes I took off withAuth but we should prevent access to this
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true,
//       user_name: req.session.user_name,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
router.get('/profile', (req, res) => {
  res.render('profile')
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
