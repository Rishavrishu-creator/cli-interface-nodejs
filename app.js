var mongoose = require('mongoose')

mongoose.Promise=global.Promise
var db = mongoose.connect('mongodb://localhost:27017/customercli',{
    useMongoClient:true
})
