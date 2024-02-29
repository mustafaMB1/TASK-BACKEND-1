const data = require('./data')


const yargs = require('yargs')

yargs.command ({
    command : 'add',
    describe : 'this command to add item',
    builder : {
        fname : {
            describe : 'this option for first name',
            demandOption : true,
            type : 'string'
        },
        lname : {
            describe : 'this option for last name',
            demandOption : false,
            type : 'string'
        }
    },
    handler : (x) => {
        data.addPerson(x.fname , x.lname , x.age, x.id , x.city)
    }
})

yargs.command ({
    command : 'delete',
    describe : 'this command to deleted item',
    handler : (x) => {
        data.deletedItem(x.id)
    }
})

yargs.command ({
    command : 'read',
    describe:'this option to read item',
    builder : {
        id:{
            describe : 'this id to nedde item',
            demandOption : true,
            type : 'string'
        }
    },
    handler : (x) => {
        data.readItem(x.id)
    }
})

yargs.command ({
    command : 'list',
    describe : 'show list of item',
    handler : (x) => {
        data.doList(x.fname , x.lname , x.city)
    } 
})

yargs.parse()