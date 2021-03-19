const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (req,res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log(hbsObject);
        res.render('index',hbsObject);
    });
});

router.post('/api/burgers', (req,res) => {
    burger.insertOne(req.body.name, (result) => {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (req,res) => {
    burger.updateOne(req.body.name, req.params.id, (result) => {
        if(result.changeRows===0) {
            return res.status(200).end();
        }
        res.status(200).end();
    } 
    );
});

module.exports = router;

