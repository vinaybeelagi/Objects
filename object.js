// object literals
const Person = {
    name:"virat",
    age:35
}
Person.field = "cricket"; //Adding Key:value to object
console.log(Person); 
console.log(Person.age); // Acessing the object key
Person.match = function play(){          
    console.log("cricket played")  //Adding function to object
}
Person.match();
console.log(Person);
let getFunction = function(){
    return(`${Person.name} played ${Person.field} at the age of${Person.age}`)
}
console.log(getFunction());

//object constructor