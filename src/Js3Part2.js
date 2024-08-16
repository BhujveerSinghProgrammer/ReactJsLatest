//Without prototype

console.log("Without Prototype **************");
function Tiger1(name, age) {
  this.name = name;
  this.age = age;
  this.area = function () {
    console.log("Main Area");
  };
}

var T1 = new Tiger1("King", "5");

var T11 = new Tiger1("King11", "55");

// Tiger1.Roar99=function()
// {
//     console.log('Roar 99')
// }
// T1.Roar99(); //T1.Roar99 is not a function:- becoz we cant add function to the constcueter function like this (  Tiger1.Roar99=function(){console.log('Roar 99')}) we can add with object only or with prototype only or with main Constructer function only.

//....Adding in simple way
T1.Roar1 = function () {
  console.log("Roaring");
};
T1.Roar1(); //Roaring
//T11.Roar1();  //T11.Roar1 is not a function -->here i have added Roar1  function for t1 only not for t2 it creates local copy thatswhy

console.log("Notice Here");

T1.area(); // Main Area
T11.area(); // Main Area
//Note:- here our both objects are accessing area(), method but if we need to add another method to the Tiger1 constcueter function then we will add with the object or can add in main constructer function (Tiger1) only,we cant add this with constructer function and will be only available for that object only not for all objects.

//Note 1:- And if we want to modify area then this area method will be modify only for that particular object.
//Note 2:- But using prototype we can make changes for all the objects.

//***************************************** */
//With Prototype

console.log("With Prototype**************");
function Tiger2(name, age) {
  this.name = name;
  this.age = age;
}

var T2 = new Tiger2("King", "5");
var T22 = new Tiger2("King", "5");
//T2.Roar2(); //Error:- T2.Roar2 is not a function

//....Adding with prototype
Tiger2.prototype.Roar2 = function () {
  console.log("Roaring");
};

T2.Roar2(); //Roaring
T22.Roar2(); //Roaring

//Conclusion:- //so i create new methods for prototype and they will be available to previously created objects.

//******************************************************************** */
//******************************************************************* */

console.log("**************");
function Dog3(name, breed) {
  this.name = name;
  this.breed = breed;
  this.barks = function () {
    console.log("woof woof");
  };
}

var d4 = new Dog3("bully", "bulldog");
d4.barks(); //woof woof
var d5 = new Dog3("bully", "bulldog");
d5.barks(); //woof woof

Dog3.prototype.run = function () {
  console.log("dun dun");
};

d4.run(); //dun dun
var d6 = new Dog3("bully", "bulldog");
d6.run(); //dun dun
d6.__proto__.run(); //dun dun

//***************************************************************************************************************** */
//Note Point 1:-
//Q1-->we can also override the prototype.
//Important
d4.__proto__ = {}; //making Empty object d4 only,its overriden that i meant.

//d4.run(); //Error:- d4.run is not a function,becoz we made it null.
//But with another objects it will not give error,check given below code for d5.run()
d5.run(); //dun dun

//Q2-->Override single property for d5
console.log("**************");
d5.__proto__.run = function run1() {
  console.log("tak tak");
};

d5.run(); //tak tak
d6.run(); //tak tak
// its not copied,we are changing the original instance, we have overrided run function value to tak tak .we have changed the prototype itself.

//Q3-->How are you pointing to prototype or how do you acceess the prototype?
//Ans:- using __proto__., its key or pointer,if you write d3.__proto__ then you are pointing to prototype object itself. like given below:-

d6.__proto__.run();
console.log("_____");
d6.__proto__.run() === Dog3.prototype.run(); // both are same

//Q4.How to freeze object or restrict to change prototype
//Ans:- object.freeze() ,Freeze the object. - check this own your own.

console.log("_______Q5_______");
//Q5.
Dog3.prototype.birthday = function (age) {
  this.age = age + 1;
  console.log(this);
};
//d4.birthday(); //TypeError: d4.birthday is not a function
//giving error becoz we have make prototype  empty for this object and overrided this.

//d5.birthday(); //ReferenceError: age is not defined
//Now first we will set age to the object.
d5.birthday(20);
//Output:-
// Dog3 {
//     name: 'bully',
//     breed: 'bulldog',
//     barks: [Function (anonymous)],
//     age: 21
//   }
