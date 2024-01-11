const mongoose = require('mongoose');
const express = require('express');

const app = express();
const routes = require('./routes/bookroutes')

const cors = require('cors');


// middlewares

app.use(express.json());
app.use(cors());

app.use('/books', routes);


// password  -  RLO3Uur4GvmCMrEA

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        console.log('Connected...')
    })
    .then(() => {
        app.listen(5000, () => {
            console.log(`Server is listening on http://localhost: 5000`);
        })
    })
