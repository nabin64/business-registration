const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // import body-parser
const cors = require('cors')
app.use(cors())
const port = 3002;

const connectToDb = async () => {
    try {
        const connection = await mongoose.connect('mongodb://127.0.0.1:27017/business-registration');
        if (connection) {
            console.log("connected to business-registration database")
        }
    } catch (err) {
        console.log(err)
    }
}

connectToDb();



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
