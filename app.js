var mongoose = require('mongoose')

mongoose.Promise=global.Promise
var db = mongoose.connect('mongodb://localhost:27017/customercli',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var Customer = require('./modals/customers')

//Add customer
var addCustomer = function(customer){
   Customer.create(customer).then(function(customer){
       console.info('New Customer added')
       
   })
}

//find customer
var findCustomer =function(name){
    var search = new RegExp(name,'i')
    Customer.find({$or:[{firstname:search},{lastname:search}]})
    .then(function(customer){
        console.info(customer)
        console.info(customer.length+" matches")
        
    })
}

//update Customers
var updateCustomers = function(_id,customer){
    Customer.updateOne({_id},customer).then(function(customer){
        console.info("Customer Updated")

    })
}
//remove Customers
var removeCustomers = function(_id){
    Customer.remove({_id}).then(function(customer){
        console.info("Customer Updated")

    })
}
//List all customers
var listAllCustomers = function()
{
    Customer.find().then(function(customer){
        console.info(customer)
        console.info(customer.length+" matches")
    })
}



module.exports={
    addCustomer,
    findCustomer,
    updateCustomers,
    listAllCustomers,
    removeCustomers
}
