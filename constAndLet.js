'use strict';
//1. const throws ReferenceError
// console.log(tickerSymbol);

// const tickerSymbol = 'MSFT';

//This really is:
//const tickerSymbol;
//console.log(tickerSymbol)

//2. let unassigned will be undefined (like var)
// let tickerSymbol;

// console.log({tickerSymbol});

//3. let "hoisted" will throw a RefError because it's currently in the TDZ
tickerSymbol = 'LKQ';

console.log({tickerSymbol});

let tickerSymbol;
