const express = require('express');
const burgers = require('../models/burgers.js');
const router = express.Router();


router.get("/index", function (req,res) {
   burgers.all(function (err, data) {

       if(err) {return res.status(500).end();}

       res.render("index", {burgers: data});
   });
});

router.post("/index", function(req,res) {
    console.log(req.body.burger);
    burgers.insert(req.body.burger, function(err,data) {
        if (err) { return res.status(501).end(); }
        res.json({ id: data.insertId});
    })
});

router.put("/index/:id", function (req,res) {
    burgers.update(req.params.id, function (err,data) {
        if (err) {return res.status(500).end(); }
        if(data.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
});



module.exports = router;