const fs = require('fs')
const chalk = require('chalk')

const getNotes = () =>'Your notes...'


const addNote = (title, body) =>
{
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function (note)
    // {
    //     return note.title === title
    // })
    const duplicateNotes = notes.filter(note => note.title === title)

    if(duplicateNotes.length === 0)
    {
        notes.push(
            {
                title: title,
                body: body
            }
        )
        saveNotes(notes)
    console.log(notes)
    }
    else
    console.log("Title taken!")
}
const saveNotes = (notes) =>
{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () =>
{
    try
    {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e)
    {
        return []
    }
}
const removeNote = (title) =>
{
    const notes = loadNotes()
    // const notesToKeep = notes.filter(function (note)
    // {
    //     return note.title !== title
    // })
    const notesToKeep = notes.filter(note => note.title !== title)
    saveNotes(notesToKeep)
    console.log('Removed the note with title: ',title)
}
const listNotes = () =>
{
    const notes = loadNotes()
    notes.forEach(element => {
        console.log(chalk.inverse(element.title+": "+element.body))
    });
}
module.exports = {
    getNotes: getNotes,
    addNotes: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}