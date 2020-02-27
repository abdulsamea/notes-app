const notes = require('./notes.js')
const validator = require('validator')
const yargs = require('yargs')
const fs = require('fs')
const title = yargs.argv.title
var body = yargs.argv.body

// console.log(validator.isEmail('abdul@fl.com'))

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
    //below format for arro function als works
    handler () {
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
    handler: () => {
        notes.removeNote(title);
    }
})

// list all notes command
yargs.command({
    command : 'list',
    describe: 'Listing out all notes in this app',
    handler: () => {
        notes.listNotes();
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
    handler: () => {
    notes.getNotes(title);
    }
})

// console.log('y = ',yargs.argv)
yargs.parse()