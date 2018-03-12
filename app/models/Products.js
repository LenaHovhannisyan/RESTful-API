mongoose = require('mongoose');

Schema = mongoose.Schema;

ProductsSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    categories: Array,
    brand: String,
    image: String
    /*
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    cat: {type: String, required: true},
    brand: {type: String, required: true}
    */
}, {collection: 'products'});

module.exports = mongoose.model('Products', ProductsSchema);