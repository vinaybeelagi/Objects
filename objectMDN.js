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


// object literals create plain objects.
const o1 = {};
o1.constructor === Object; // true

const o2 = new Object();
o2.constructor === Object; // true

const a1 = [];
a1.constructor === Array; // true

const a2 = new Array();
a2.constructor === Array; // true

const n = 3;
n.constructor === Number; // true


// Object.assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

