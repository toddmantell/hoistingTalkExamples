const axios = require('axios');

main(process.argv[2]);

async function main(tickerSymbol) {
	console.log(await getStockQuote(tickerSymbol));
}

async function getStockQuote(ticker) {
	const quote = await axios.get(`http://localhost:3000/stocks?ticker=${ticker}`);

	return quote.data[0];
}