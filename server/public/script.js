console.log('Hello to client');




(async ()=>{
	const response = await fetch('/products');
	
	const products = await response.json() //relative path == http://localhost:3000/products
 
	let div = document.getElementById('products');
	
	div.innerText = products
})()
//IIFE

// fetch('http://www.google.com/products') //absolute path

