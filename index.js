require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
global.__basedir = __dirname;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(express.static(__basedir + '/resources/static/assets/uploads'));

app.use(cors())
app.use(express.json());

const routes = require('./src/routes/routes');

app.use('/api', routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})