//DEPENDENCIES
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

//SETS UP EXPRESS 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//ROUTER
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


// LISTENER
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});
