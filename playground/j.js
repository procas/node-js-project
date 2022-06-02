const fs = require('fs')
// const book = {
//     title: 'Angels and Demons',
//     author: 'Dan Brown'
// }
// const jcheck = JSON.stringify(book)
// const jback = JSON.parse(jcheck)
// console.log(jback.author)
// fs.writeFileSync('j.json', jcheck)

const dataBuffer = fs.readFileSync('j.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.author)