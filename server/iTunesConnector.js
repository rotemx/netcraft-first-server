
const itunesURLBase = `https://itunes.apple.com/search?media=music&term=`

 async function sendItunesQuery(term) {
	const response = await fetch(itunesURLBase + term);
	const data = await response.json();
	
	return data;
}

module.exports = {sendItunesQuery}
