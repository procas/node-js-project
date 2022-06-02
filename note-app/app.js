const fs = require('fs');
// const add = require('./utils.js')
const notes = require('./notes.js')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

//fs.writeFileSync('notes.txt', 'Text changed');
// const sum = add(1, 3)
// console.log(validator.isURL('https://abc.com'))
// console.log(chalk.bold.underline.inverse.green('Success'))
// console.log(sum);
// const command = process.argv[2]
// console.log(command)

//console.log(process.argv)
//console.log(yargs.argv['title'])

yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)
    {
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'removing a new note',
    builder: {
        title:{
            describe: 'Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)
    {
        notes.removeNote(argv.title)
       
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing the Notes',
    handler(argv)
    {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading a Note',
    build:{
        title:
        {
            describe: 'Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)
    {
        notes.readNote(argv.title)
    }
})

yargs.parse()