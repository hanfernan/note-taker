//DEPENDENCIES
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

//SETS UP EXPRESS 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//TODO: is this the right place for this?
app.use(express.static(path.join(__dirname, 'public')));

//ROUTER
require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

// LISTENER
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});
