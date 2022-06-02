const express = require('express')
const path = require('path')

const app = express()
const publicDirPath = path.join(__dirname, '../public')
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.send('Hello Express')
})

app.get('/help', (req, res) => {
    res.send('<h1>Help page</h1>')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})