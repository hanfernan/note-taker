const path = require('path');

//ROUTING

module.exports = (app) => {
    app.get('/notes', (req,res) => {
        res.sendFile(path.join(__dirnam, '../public/notes.html'));
    });

    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirnam, '../public/index.html'));
    });
};