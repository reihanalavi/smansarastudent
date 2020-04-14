const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

//configure database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//connecting to database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({
        "message": "Welcome to Smansara Students API. Manage your students here. Nb: Drop out them who are annoying, haha!"
    });
});

require('./routes/student.route.js')(app);
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});