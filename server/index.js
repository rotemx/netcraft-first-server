
const express = require('express')
const app = express()
const port = 3000
const path          = require('path')
const {application} = require("express");

const products = [
	{
		name : "toy",
		price: 23,
		color: "red"
	},
	{
		name : "tomato",
		price: 2,
		color: "red"
	},
	{
		name : "laptop",
		price: 2322,
		color: "gray"
	}
]


console.log("First Server Initializing...");
console.log('running in ' + __dirname);

app.use('/', express.static(path.join(__dirname, 'public')))

app.post('/products', (req, res) => {
	console.log('received request');
	res.json(products)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})


