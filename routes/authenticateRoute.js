const router = require('express').Router();
const fetchOneUser = require('../Mongodb/read');
const express = require('express');


router.use(express.json());
router.use(express.urlencoded( {extended: true}));

router.post('/auth/login', (req, res) => {
    console.log("req.body.email", req.body.email);
    console.log("req.body.passowrd", req.body.password);

    email = req.body.email;
    password = req.body.password;

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