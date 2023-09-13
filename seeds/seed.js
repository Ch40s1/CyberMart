const sequelize = require('../config/connection');
const { User, TechItems } = require('../models');

const userData = require('./userData.json');
const techData = require('./techitems.json');

// const seedDatabase = async () => {
//   try {
//     await sequelize.sync({ force: true });

//     // Seed users and capture the created users with individualHooks and returning: true
//     const users = await User.bulkCreate(userData, {
//       individualHooks: true,
//       returning: true,
//     });

//     // Seed tech items and associate them with random users
//     for (const techItem of techData) {
//       // Randomly select a user from the 'users' array
//       const randomUser = users[Math.floor(Math.random() * users.length)];

//       // Create the tech item and associate it with the selected user
//       await TechItems.create({
//         ...techItem,
//         user_id: randomUser.id,
//       });
//     }

//     console.log('Database seeded successfully');
//   } catch (err) {
//     console.error('Error seeding database:', err);
//   } finally {
//     sequelize.close(); // Close the database connection when done
//   }
// };
const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    // Seed tech items without assigning any user
    for (const techItem of techData) {
      await TechItems.create(techItem);
    }

    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    sequelize.close(); // Close the database connection when done
  }
};

seedDatabase();


/// select all from techitems were user_id is = to current logged user id
// save items
