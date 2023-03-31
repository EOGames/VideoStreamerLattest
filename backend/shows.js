const mongoose = require('mongoose');

const url = 'mongodb+srv://superuser:superuser@crud.a1359sv.mongodb.net/data';
mongoose.connect(url);

const schema = new mongoose.Schema(
    {
        name:String,
        pic: String,
        info:String,
        link:String
    }
);

const showModel = mongoose.model('shows',schema);
module.exports = showModel;
