//LOAD DATA
const fs = require("fs");
const db = require('../db/db.json');
const path = require("path");
// const uuid = require('uuid/v1');

//ROUTING

module.exports = (app) => {
    // * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
    app.get('/api/notes', (req, res) => {
        console.log("route hit");
        return res.sendFile(path.join(__dirname, "../db/db.json"));

    });

    //allows user to post new notes
    app.post('/api/notes', (req, res) => {

        try {
            let notes = JSON.parse(fs.readFileSync("./db/db.json", 'utf-8'))
            notes.push(req.body)
            res.end()
            fs.writeFileSync("./db/db.json", JSON.stringify(notes), "utf-8")
        } catch (error) {
            console.log(error)
        }
        
    });

}





//need a unique id to be able to delete