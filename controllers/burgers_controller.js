const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (req,res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data,
        };
        // console.log(hbsObject);
        res.render('index',hbsObject);
    });
});

router.post('/api/burgers', (req,res) => {
    // console.log(req.body.name);
    burger.insertOne(req.body.name, (result) => {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (request,res) => {
    const condition = `id= ${request.params.id}`;
    // console.log('condition',condition);
    burger.updateOne(request.params.id, (result) => {
        if(result.changeRows===0) {
            return res.status(200).end();
        }
        res.status(200).end();
    } 
    );
});

router.delete('/api/burgers/delete', (req,res) => {
    burger.clearDataBase((result) => {
        if (result.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
    }
    );
});

module.exports = router;

