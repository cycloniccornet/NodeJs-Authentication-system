const router = require('express').Router();
const authenticateUser = require('../Mongodb/read');
const express = require('express');

const MongoClient = require('mongodb').MongoClient;
const connectionURL = 'mongodb://localhost:27017';


router.use(express.json());
router.use(express.urlencoded( {extended: true}));

router.post('/auth/login', async (req, res) => {
    authenticateUser(req, res);
});

router.post('/auth/register', (req, res) => {
    res.status(501).send( {data: 'Ok'} )
});

router.get('/auth/sign-out', (req, res) => {
    res.status(501).send( {data: 'Ok'} )
});

module.exports = router;