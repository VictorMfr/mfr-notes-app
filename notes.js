// Importing
const fs = require('fs');
const chalk = require('chalk');

// Adding 
const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find(note => note.title === title);
    
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.bgGreen.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    } 
}

// List notes
const listNotes = (title) => {
    const notesList = loadNotes();
    console.log(chalk.green('Your notes'));
    notesList.forEach(element => {
        console.log(element.title);
    });
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title == title);
    
    debugger
    
    if (note){
        console.log(chalk.green(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.bgRed('No note was found'))
    }
}
// load notes
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}


// Save notes
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

// Remove notes

const removeNote = (title) => {
    const notes = loadNotes();
    const unselectedNotes = notes.filter(function (note) {
        return note.title !== title;
    });

    if (unselectedNotes.length === notes.length){ // Checks if there's a difference
        console.log(chalk.bgRed(`There is no note with the title: ${title}`));
    } else {
        saveNotes(unselectedNotes);
        console.log(chalk.bgGreen('Successfully removed!'));
    };






}
// Exporting
const noteUtilities = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

module.exports = noteUtilities;