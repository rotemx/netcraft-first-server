
const express = require('express')
const app = express()
const port = 3000

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

const path              = require('path')
const {sendItunesQuery} = require("./iTunesConnector");
app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/products', (req, res) => {
	console.log('received products request');
	res.json(JSON.stringify(products));
})

app.get('/itunes', async (req, res) => {
	console.log('received itunes request...');
	const term = req.query.term;
	console.log(`Term is ${term}`);
	let result = await sendItunesQuery(term)
	res.json(result)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})


