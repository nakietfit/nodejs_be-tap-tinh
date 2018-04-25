# Node

# Instructions

npm install

npm install express-generator -g

express

app.listen(3000);

# Change jade to handlebars

npm install express-handlebars --save

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');