//1. const throws ReferenceError
// console.log(tickerSymbol);

// const tickerSymbol = 'MSFT';

//This really is:
//const tickerSymbol;
//console.log(tickerSymbol)

//2. let unassigned will be undefined (like var)
// let tickerSymbol;

// console.log({tickerSymbol});

//2. let "hoisted" will throw a RefError because of the TDZ
console.log({tickerSymbol});

let tickerSymbol = 'LKQ';
