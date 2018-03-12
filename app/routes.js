var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));

// grab the nerd model we just created
var Products = require('./models/Products');
var Categories = require('./models/Categories');
var Brands = require('./models/Brands');

var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./public/img/products");
    },
    filename: function (req, file, callback) {
        // callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
        callback(null, file.originalname);
    }
});

var upload = multer({storage: Storage}).single("image", 3); //Field name and max count

module.exports = function (app) {


    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    app.use(function (req, res, next) {  //allow cross origin requests

       /* res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "http://localhost");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");*/

        // this middleware will call for each requested
        // and we checked for the requested query properties
        // if _method was existed
        // then we know, clients need to call DELETE request instead
        if (req.query._method === 'DELETE') {
            // change the original METHOD
            // into DELETE method
            req.method = 'DELETE';
            // and set requested url to /nerds/id
            req.url = req.path;
        }
        next();
    });


    //create categories
    app.post('/cats', function (req, res) {
        var cat = new Categories(req.body);      // create a new instance of the Products model

        // save and check for errors
        cat.save(function (err) {
            if (err)
                res.send(err);

            res.json({message: 'category created!'});
            console.log(req.body);
        });

    });

    //create brands
    app.post('/brands', function (req, res) {
        var brand = new Brands(req.body);      // create a new instance of the Products model


        // save and check for errors
        brand.save(function (err) {
            if (err)
                res.send(err);

            res.json({message: 'brand created!'});
            console.log(req.body);
        });

    });

    // get all products
    app.get('/shop', function (req, res) {
        // use mongoose to get all nerds in the database
        Products.find(function (err, data) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(data); // return all nerds in JSON format
        });
    });

    //admin get all brands
    app.get('/admin/productsB', function (req, res) {
        // use mongoose to get all nerds in the database
        Brands.find(function (err, data) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(data); // return all nerds in JSON format
        });

    });

    //admin get all categories
    app.get('/admin/productsC', function (req, res) {

        Categories.find(function (err, data) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(data); // return all nerds in JSON format
        });
    });


    //create product
    app.post('/products', function (req, res) {

        var product = new Products(req.body);      // create a new instance of the Products model

        // save and check for errors
        product.save(function (err) {
            if (err)
                res.send(err);
            res.json({message: 'product created!'});

            upload(req, res, function (err) {
                if (err) {
                    return res.end(err);
                }
                console.log("File uploaded successfully!.");
            });

            console.log(req.body);
        });

    });


    //delete product
    app.delete('/products/:product_id', function (req, res) {
        Products.remove({
            _id: req.params.product_id
        }, function (err, data) {
            if (err)
                res.send(err);

            res.json({message: 'Successfully deleted'});
          //  res.redirect("/");

        });
    });

    //update product
    app.put('/products/:product_id', function (req, res) {

        // use our bear model to find the bear we want
        Products.findById(req.params.product_id, function (err, bear) {

            if (err)
                res.send(err);

            product.name = req.body.name;  // update

            product.save(function (err) {
                if (err)
                    res.send(err);

                res.json({message: 'product updated!'});
            });

        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests

    app.get('*', function (req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });


    // app.get("*", function (req, res) {
    //
    //     console.log(__dirname);
    //     res.sendFile("./public/index.html");
    // });

};
