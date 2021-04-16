//LOAD DATA
const fs = require("fs");
const db = require('../db/db.json');

//ROUTING

module.exports = (app) => {
    // * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
    app.get('/api/notes', (req, res) => {
        console.log("route hit");
        return res.sendFile(path.join(__dirname, "./db/db.json"));

    });

    app.post('/api/notes', (req, res) => {
        //write file sync
        try {
            let notes = JSON.parse(fs.readFileSync("./db/db.json", 'utf-8'))
            notes.push(req.body)
            fs.writeFileSync("./db/db.json", JSON.stringify(notes), "utf-8")
        } catch (error) {
            console.log(error)
        }
    });

}





//need a unique id to be able to delete