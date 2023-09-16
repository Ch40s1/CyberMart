const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const techData = require('./seeds/techItems.json');
const { TechItems } = require('./models');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });
// const hbs = exphbs.create({ });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: true }).then(async () => {
  // Seed tech items without assigning any user
  for (const techItem of techData) {
    await TechItems.create(techItem);
  }
  app.listen(PORT, ()=>{
    console.log(
    `Now listening:Click this Link =>
    http://localhost:${PORT}/`);
  })
});
// app.listen(PORT, ()=>{
//   console.log(
//   `Now listening:Click this Link =>
//   http://localhost:${PORT}/`);
// })
