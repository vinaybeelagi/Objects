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
    function isEmpty(obj) {
        for(let key in obj) {
            return false;
        }
        return true;
    }
let obj = {}
console.log(isEmpty(obj));

//Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);
