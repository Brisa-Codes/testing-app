const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');

const Register = require('../models/registerModel');

router.use(expressValidator());

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/register', (req, res) => {
    const sirname = req.body.sirname;
    const givenname = req.body.givenname;
    const nin = req.body.nin;
    const dob = req.body.dob;
    const occupation = req.body.occupation;
    const work = req.body.work;
    const gender = req.body.gender;
    const loan = req.body.loan;
    const security = req.body.security;
    const fallback = req.body.fallback;

    let errors = req.validationErrors();
    if(errors){
        res.render('register');
        return;
    } else {
        let newRegister = new Register({
            sirname: sirname,
            givenname: givenname,
            nin: nin,
            dob: dob,
            occupation: occupation,
            work: work,
            gender: gender,
            loan: loan,
            security: security,
            fallback: fallback
        });

        newRegister.save((err) => {
            if(err) {
                console.error(err);
                return;
            } else {
                res.redirect('/');
            }
        });
    }
});

module.exports = router;
