//DEPENDENCIES
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

//SETS UP EXPRESS 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTER
require('./routes/htmlRoutes')(app);

// LISTENER
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
