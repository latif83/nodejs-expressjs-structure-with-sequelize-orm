const express = require('express')
const bodyParser = require('body-parser')

let port = process.env.PORT || 4000;

let routes = require('./routes/route1.js')

const app = express()

app.use('/',routes)

app.get('/',(req,res)=>{
	res.json("You've reached the server")
})

app.listen(port,()=>{
	console.log(`running on port ${port}`)
})