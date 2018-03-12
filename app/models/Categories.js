mongoose  = require('mongoose');

Schema  = mongoose.Schema;

CategoriesSchema = new Schema({
    name: String
},{collection: 'categories'});

module.exports = mongoose.model('Categories', CategoriesSchema);