const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config/database');

// connecting the app using express
const app = express();

// requiring/importing routes
const Register = require('./models/registerModel');
const register = require('./routes/register');

// Database connection
const db = mongoose.connection;
mongoose.connect(config.database);

db.once('open', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.error(err);
});

// View engine setup to render pug files
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', register);

// Server connection
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});