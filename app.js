///packages used
const yargs = require('yargs');
const chalk = require('chalk');
const validator = require('validator');
const notes = require('./notes.js');
const { listNotes } = require('./notes.js');
const { demandOption } = require('yargs');
//


// Version of yagrs 
yargs.version('1.0.1');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title: {
            describe: 'Title of the note you are creating',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note you are creating',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'removes a note',
    builder: {
        title: {
            describe: 'title of the note',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler() {
        notes.listNotes();
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'read note',
    builder: {
        title: {
            describe: 'title of the note you are looking',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});


//console.log(yargs.argv); //if this piece of code hadn't been defined, it wouldn't show in --help option 
yargs.parse();
