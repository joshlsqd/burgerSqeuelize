const db = require('../models');


module.exports = function (app) {

    app.get("/index", function (req, res) {
        db.Burger.findAll({}).then(function (dbBurger) {
            res.render("index", {burgers: dbBurger});
        });
    });

    app.post("/index", function (req, res) {
        console.log(req.body.burger);
        db.Burger.create({
            burger_name: req.body.burger
            }).then( function (dbBurger) {
            res.json({id: dbBurger.id});
        })
    });

    app.put("/index/:id", function (req, res) {
        db.Burger.update({
            devoured: true
    }, {
            where: {
                id: req.params.id
                 }
            }).then(function(dbBurger) {
          res.json(dbBurger);
        }).catch(function (err) {
            res.json(err);
        });
    });
};
