outerScope = 'outer scope';

var outerScope; //if it is a let, it will throw a referenceError because let and const work differently than var

console.log(outerScope);

override();

var override = function override() {
  //outerScope is in override's lexical scope
  console.log(outerScope);
  var outerScope = 'inner scope';
}