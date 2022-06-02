const request = require('request')

const url = "https://jsonplaceholder.typicode.com/todos/1"
request({url: url, json:true}, (error, response) => {
    console.log(response.body.userId)   
})