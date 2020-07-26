const express = require('express');
const handlebars = require('express-handlebars');

const PORT = process.env.PORT || 3000;

const app = express();

// Set up our app to host files through the public folder
app.use(express.static('public'));

// Parse requests as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set express to use handlebars as our view engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Grab the routes we set up to use with our app
const routes = require('./routes/routes');
app.use(routes);

app.listen(PORT, () => {
  console.log('Listening on http://localhost:' + PORT);
});