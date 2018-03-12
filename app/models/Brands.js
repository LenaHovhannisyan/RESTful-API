mongoose = require('mongoose');

Schema = mongoose.Schema;

BrandsSchema = new Schema({
    name: String,
    image: String
}, {collection: 'brands'});

module.exports = mongoose.model('Brands', BrandsSchema);