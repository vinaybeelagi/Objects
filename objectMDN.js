// creating Object
const o = new Object();
o.foo = 32;

console.log(o);

// Obtaining wrapper objects for BigInt and Symbol
const numberObj = new Number(1);
console.log(typeof numberObj); // "object"

const bigintObj = Object(1n);
console.log(typeof bigintObj); // "object"

const symbolObj = Object(Symbol("foo"));
console.log(typeof symbolObj); // "object"
