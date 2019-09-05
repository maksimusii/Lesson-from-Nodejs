const fs = require('fs');
const os = require('os');
const _ = require('loadsh');
const yargs = require ('yargs');

const notes = require('./notes.js');
const titleOptions = {
    describe: 'Название заметки',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Текст заметки',
    demand: true,
    alias: 'b'
}
const argv = yargs
.command('add', 'Добавить новую заметку', {
title: titleOptions,
body: bodyOptions
})
.command('list', 'Список всех заметок')
.command('read', 'Читать заметку', {
    title: titleOptions
})
.command('remove', 'Удалить заметку',{
    title: titleOptions
})
.help()
.argv;

var command = argv._[0];


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Заметка создана');
        notes.logNote(note);
    } else {
        console.log ('Заметка уже была создана')
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log (`Печатаю ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
}else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Заметка найдена');
        notes.logNote(note);
    } else {
        console.log('Заметка не найдена');
    }
} else if (command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Заметка была удалена' : 'Заметка не найдена';
    console.log(message);
} else {
    console.log('Команда не распознана');
}
