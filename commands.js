var program = require('commander')
var {prompt}  = require('inquirer')
var {
    addCustomer,
    findCustomer,
    updateCustomers,
    listAllCustomers,
    removeCustomers
} = require('./app')
const { find } = require('./modals/customers')

//customer questions
var questions = [
    {
        type:'input',
        name:'firstname',
        message:'Customer first name'
    },
    {
        type:'input',
        name:'lastname',
        message:'Customer Last name'
    },
    {
        type:'input',
        name:'Phone',
        message:'Customer Phone number'
    },
    {
        type:'input',
        name:'email',
        message:'Customer Email'
    },

]




program.version('1.0.0')
.description('Client Management System')

/*
program.command('add <firstname> <lastname> <phone> <email>')
    .alias('a')
    .description('Add a customer')
    .action(function(firstname,lastname,phone,email){
        addCustomer({firstname,lastname,phone,email})
    })
*/
program.command('add')
.alias('a').description('Add a new Customer')
.action(function(){
    prompt(questions).then(function(answers){
        addCustomer(answers)
    })
})

program.command('find <name>')
.alias('f')
.description('Find a customer')
.action(function(name){
    findCustomer(name)
})

program.command('update <_id>').alias('u')
.description('Update customer')
.action(function(_id){
   prompt(questions).then(function(answers){
       updateCustomers(_id,answers)
   })
})

program.parse(process.argv)

