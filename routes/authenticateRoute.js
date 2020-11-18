const router = require('express').Router();
const bodyParser = require("body-parser");
const fetchOneUser = require('../Mongodb/read');


router.post('/auth/login', (req, res) => {


    email = 'patr180499@gmail.com';
    password = '1234';

    fetchOneUser(email);

    return res.send( {data: "ok"} );
});

router.post('/auth/register', (req, res) => {
    res.status(501).send( {data: 'Ok'} )
});

router.get('/auth/sign-out', (req, res) => {
    res.status(501).send( {data: 'Ok'} )
});

module.exports = router;