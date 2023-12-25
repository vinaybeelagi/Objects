// // object literals
// const Person = {
//     name:"virat",
//     age:35
// }
// Person.field = "cricket"; //Adding Key:value to object
// console.log(Person);
// console.log(Person.age); // Acessing the object key
// Person.match = function play(){
//     console.log("cricket played")  //Adding function to object
// }
// Person.match();
// console.log(Person);
// let getFunction = function(){
//     return(`${Person.name} played ${Person.field} at the age of${Person.age}`)
// }
// console.log(getFunction());

// //object constructor method
// function Vehicle(name,maker,engine){
//     this.name = name;
//     this.maker = maker;
//     this.engine = engine;
// }
// let car = new Vehicle('figo','ford','1998cc');
// console.log(car.name);
// console.log(car['engine']);

// //ES6 mehod
// class Vehicle {
//     constructor(name, maker, engine) {
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }
// }
// let car = new Vehicle('figo','ford','1998cc');
// console.log(car.name);
// console.log(car['engine'])

// Tasks on object:Hello, object
// const user = {};
//    user.name = "john";
//     user.surname = "smith";
//     user.name ="pete";
//     delete user.name;
//     console.log(user)

// task-Check for emptiness
//     function isEmpty(obj) {
//         for(let key in obj) {
//             return false;
//         }
//         return true;
//     }
// let obj = {}
// console.log(isEmpty(obj));

// Task-Sum object properties
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
//   let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum);

//Task-Multiply numeric property values by 2
// before the call
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   // after the call
//   function multiplyNumeric(obj){
//     for (let key in obj){
//         if(typeof [key]=='number'){
//            obj[key] *=2
//         }
//     }
// }
// multiplyNumeric(menu)
// console.log(menu)

// Object references and copying:variable to access the object and modify its contents
// let user = {name1: "john",age:32,car:"ford"};
// let admin = user;
// admin.name1 = "david";
// console.log(user.name1);
// console.log(Object.keys(user));

// Cloning:copying an object variable creates one more reference to the same object.
// let user = {name:"maxwell",age:34};
//  let clone = {};
//  for (let key in user){
//     clone[key]=user[key];
//  }
//  clone.age = 31;
//  clone.name = "messi";
//  console.log(clone.name);

// structuredClone(object) clones the object with all nested:
// let user = {name:"viraj",
// sizes :{
//     height:130,
//     width:60
// }
// };
// let clone = structuredClone(user);
// console.log(user.sizes === clone.sizes);
// user.sizes.width = 50;
// console.log(clone.sizes.width);

// Garbage collection:
// let user2 = {name: "john"}
// console.log(user2.name);
// user2 = null;
// console.log(user2.name);

// Task- Using "this" in object literal
// Answer: an error.
// function makeUser(){
//     return{
//         name: "john",
//         ref(){
//             return this;
//         }
//     };
// }
// let user = makeUser();
// alert(user.ref().name);

// task-Create a calculator:
// let calculator = {
//   read() {
//     this.a = +prompt("a?", "0");
//     this.b = +prompt("b?", "0");
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// Chaining:
// let ladder = {
//     step:0,
//     up(){
//         this.step++;
//         return this;
//     },
//     down(){
//         this.step--;
//         return this;
//     },
//     showStep(){
//         alert(this.step)
//         return this;
//     }
// };
// ladder.up().up().down().showStep().down().showStep();

// Methods in constructor:
// function User(name) {
//     this.name = name;
  
//     this.sayHi = function() {
//       alert( "My name is: " + this.name );
//     };
//   }
  
//   let john = new User("John");
  
//   john.sayHi(); // My name is: John

//task-Two functions – one object:
// let obj = {};
// function A() {return obj;}
// function B() {return obj;}
// console.log (new A() === new B());

//task-Create new Calculator
// function Calculator() {
//     this.read = function() {
//         this.a = +prompt('a?',0);
//         this.b = +prompt('b?',0);
//     };

//     this.sum = function() {
//      return this.a + this.b;
//     };

//     this.mul = function() {
//         return this.a*this.b;
//     };
// }

// let calculator = new Calculator();
// calculator.read();

// alert("sum=" +calculator.sum());
// alert("mul=" +calculator.mul());

//Task- Create new Accumulator:
function Accumulator(startingValue) {
    this.value = startingValue;

    this.raed = function(){
        this.value+ = +prompt("how much to add?","0")
      };
}

let accumalator = new Accumulator(1);
accumalator.read();
accumalator.read();
alert(accumalator.value);
