console.log('Hello to client');


function uniq(arr) {
	return Array.from(new Set(arr))
}



(async ()=>{
/*
	const response = await fetch('/products');
	
	const products = await response.json() //relative path == http://localhost:3000/products
 
	let div = document.getElementById('products');
	
	div.innerText = products;
	
	
	const artist = 'eminem';
	
	const fetchResponse = await fetch(URL + artist);
	
	console.log(fetchResponse);
*/

})()
//IIFE

// fetch('http://www.google.com/products') //absolute path

async function searchArtist(){
	const searchInput = document.getElementById('textInput');
	const term = searchInput.value;
	
	console.log('searching for ' + term);
	
	const itunesURL = `https://itunes.apple.com/search?media=music&term=`
	
	const fetchResponse = await fetch(itunesURL + term);
	
	let data  = await fetchResponse.json();
	
	let songs = uniq(data.results
	                .map(x=>x.trackName)
	                .filter(Boolean));
	
	console.log(songs);
	
	let div = document.getElementById('products');
	div.innerHTML = `<h2>Displaying ${songs.length} songs by ${term}</h2><br><br><br><br>` + songs
		.map(song => `<div>${song}</div>`)
		.join(' ')
	;
	

	
}
