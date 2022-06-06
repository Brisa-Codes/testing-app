const mongoose = require('mongoose');

// Register Schema
const RegisterSchema = mongoose.Schema({
    sirname: {
        type: String,
        required: true
    },
    givenname: {
        type: String,
        required: true
    },
    nin: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    loan: {
        type: Number,
        required: true
    },
    security: {
        type: String,
        required: true
    },
    fallback: {
        type: String,
        required: true
    }
});

const Register = module.exports = mongoose.model('Register', RegisterSchema);

