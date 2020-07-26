const express = require('express');
const path = require('path');
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

app.get('/', (req, res) =>
{
  res.render('index');
});

app.listen(PORT, () => {
  console.log('Listening on http://localhost:' + PORT);
});