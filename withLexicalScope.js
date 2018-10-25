'use strict';
outerScope = 'outer scope';

var outerScope; //if it is a let, it will throw a referenceError because let and const work differently than var

override();

function override() {
  console.log(outerScope);
  var outerScope = 'inner scope';
}