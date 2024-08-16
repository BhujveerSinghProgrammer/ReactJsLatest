//************Conclusion*********/

//Q1-->What is an prototype:-
//Ans:-Its an Object

//Q2-->where is this prototype available :-
//Ans:-Inside a constructer function.

//Q3-->Whats the use of this prototype:-
//Ans:-For inheritance,prototype has the power of inheritance.

//Q4-->how is this prototype accessable by your object?:-
//Ans:-using __proto__,you are able to access the prototype that is available inside an object.

//Q5--> why is this prototype useful?:-
//Ans:-Its usefull to create your  properties and functions that are going to be utilize by all the elements.

//Q6-->if you create a function inside the constructer function and not inside the prototype what happens:-
//Ans:-it was creating a local copy.

//Q7. Where we use __Proto__ and where we use prototype?.

console.log("**************");
function Dog2(name, breed) {
  this.name = name;
  this.breed = breed;
}
Dog2.prototype.barks =
  function () // we can use prototype with function only not with d2 and d3,
  //we can use it with Dog2 function only. for d2 and d3 we use __proto__.
  {
    console.log("woof woof");
  };

var d2 = new Dog2("Bully", "Bulldog");
var d3 = new Dog2("Bully1", "Bulldog1");
console.log(d2.barks()); //woof woof
console.log(d3.barks()); //woof woof

d2.__proto__.barks = function () {
  console.log("tak tak"); // here we are changing the original object
};

console.log(d2.barks()); //tak tak
console.log(d3.barks()); //tak tak

d2.__proto__.barks === Dog.prototype.barks; // both are same but one is used with object and other is used with constructer function.

//
