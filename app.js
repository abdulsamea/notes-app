const notes = require('./notes.js')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const fs = require('fs')
const path = require('path')





const successMsg = chalk.rgb(255,127,80).bold('Success for Sam on the way!')

const title = yargs.argv.title
var body = yargs.argv.body

console.log(successMsg)
console.log(validator.isEmail('abdul@fl.com'))

// add a note command
yargs.command({
    command : 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe: 'Note Content',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(){
        notes.addNote(title, body);
    }
})


// remove a note command
yargs.command({
    command : 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(){
        console.log('removing a note...');
        if(title != undefined){
            fs.unlink(title + '.txt', function(){
                console.log(title + ' deleted by nodejs')
            });
    }
    }
})

// list all notes command
yargs.command({
    command : 'list',
    describe: 'Listing out all notes in this app',
    handler: function(){
        console.log('All notes present are:');
        fs.readdir('./', (err, files) => {
            files.forEach(file => {
                if(path.extname(file) == '.txt' ){
                    console.log(file);
                }
            });
          });
    }
})

// read a note command
yargs.command({
    command : 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(){
    notes.getNotes(title);
    }
})

// console.log('y = ',yargs.argv)
yargs.parse()