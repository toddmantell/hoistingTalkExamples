'use strict';

getStockQuote();

function getStockQuote() {
	stockPrice = 33.72;
	console.log(stockPrice);

	if (true) {
		var stockPrice; //var was not block-scoped, it was function-scoped
	}
}