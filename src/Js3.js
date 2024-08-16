//q1. If you have var y = 1, x = y = typeof x; What is the value of x? chhose?
//1.undefined
//2.null
//3.Error

//Answer:- undefined

//q2. a = 8 + "8"; console.log(a);

var a = 8 + "8";
console.log(a); //88

//**********************************************************/
var monica = {
  name: "monica Gellor",
  total: 400,
  deductmonthlyFee: function (fee) {
    this.total = this.total - fee;
    return this.name + "  remaining balance is  " + this.total;
  },
};
var rachel = { name: "Rachel Green", total: 1500 };

//how rachel will borrow deductmonthlyFee method from monica?
var newContext = monica.deductmonthlyFee.bind(rachel);
console.log(newContext(100));
//Output:- Rachel Green  remaining balance is  1400

console.log(monica.deductmonthlyFee(100));
//Output:- monica Gellor  remaining balance is  300

//Note:- Object property should be same
//*********************************************** */

console.log(Math.max(1, 2, 3, 4)); //4

console.log(Math.max([1, 2, 3, 4])); //NaN

console.log(Math.max.apply(null, [1, 2, 3, 4])); // 4
//Note:- we will use apply method  when we want to use parameters as an array

//*************************************** */
console.log("*********************");
var a = {
  x: 10,
  calculate: function (z) {
    return this.x + this.y + z;
  },
};

var b = {
  y: 20,
  // x:40, if we use same x property here then it will give priority to local
  __proto__: a, // all the properties available in object a are available in b ,b inherits from a by this pointer proto.
};

console.log(b.y); //20 //Local value
console.log(b.x); //10 //inherited value
console.log(b.calculate(10)); //40 ;
console.log(b.z); //undefined

//Look for properties itself
//Look for inherited properties
//Only one __proto__ can be used like in object b,multilevel inheritance used in proto ,not muliple inheritance.

//**************************************************/
console.log("*****************");
var a = {};
//Dynamically creating or attaching a key in object
a.x = 10;
console.log(a); //{ x: 10 }

//Important:-
//Q1:- Prototype:-Its an object which is available in functions(constructer functions) and it is used for inheritance.

//a constructer function - becoz it has capital F
function Foo(y) {
  this.y = y;
}

Foo.prototype.x = 10;
//we are attaching a key to this prototype,prototype already available which is an object,prototype is an object which is available in functions(constructer functions)

Foo.prototype.calculate = function (z) {
  return this.x + this.y + z;
};
var a = Foo(5);
//Prototype is an object which would be available to all the objects that are going to be created by the function constructer.
//proto and prototype is not same,prototype is an object that is available inside the constructer function and proto is a key that is available inside object in order to point to another object.
//you will never set the proto key by urself,proto key general utilize internally by java script.

//Note:- Definitions
//Proto:- proto is a key which is going to point to another object
//proto of your created instance is going to point to prototype of the constructer function or the parent function

//Simple Definition:-
//Proto is used to inherit from another object and prototype is for defining new properties in constructer function.

//************************************************************************/

console.log("**************");
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

var d1 = new Dog("Bully", "Bulldog");
console.log(d1.name); //Bully

//Important  :--------

//And I want to add barks method to the constructer function now

console.log("**************");
function Dog2(name, breed) {
  this.name = name;
  this.breed = breed;
}
Dog2.prototype.barks = function () {
  console.log("woof woof");
};

var d2 = new Dog2("Bully", "Bulldog");
var d3 = new Dog2("Bully1", "Bulldog1");

console.log(d2.name); //Bully
console.log(d2.barks()); //woof woof
console.log(d3.name); //Bully1
console.log(d3.barks()); //woof woof

//Note:- Here d2 and d3 is accessing barks() method becoz of prototype ,if you create in simple way given below
// d2.barks=function()
// {
//     console.log("Bow Bow")
// } then you will not be able to access it with previously created objects like d3. it will only be accessed in d2. not in d3.

//********************************************************************/
//********************************************************************/
//********************************************************************/

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

//....Adding in simple way
d4.barks =
  function () //here i have changed in barks function but it will change only for d4 not for d5. it creates local copy thatswhy
  {
    console.log("Bow Bow");
  };
d4.barks(); //Bow Bow //its returning bow bow becoz we have changed it but it will change only for d4 not for d5.

d5.barks(); //woof woof //its returning woof woof not bow bow becoz changes only made for d4 only,

//**** */

//But if we use prototype

Dog3.prototype.run = function () {
  console.log("dun dun");
};

d4.run(); //dun dun

// using prototype we have seen that this run method will be available in
//d4,d5 object that we have created. if we create d6 (new dog) then it 'run' method will also be available in d6

var d6 = new Dog3("bully", "bulldog");
d6.run(); //dun dun

console.log("*****");
d6.__proto__.run(); //dun dun

//Important:- in the case of prototype, d4 and d5 already created after that prototype (run) created but  still d4 and d5 can access that prototype.its dynamically pointing to prototype of the constructer function .

//  but in the case of adding a barks function (this.barks=function(){console.log("woof woof")}) inside main constructer function (Dog3) they(d4,d5) are creating a local copy of it.

//but if you create it with prototype or proto like (Dog3.prototype.run=function(){console.log("dun dun")}) it will be availble to all the old objects and new objects using the constructer function Dog3.

//or if you change this (Dog3.prototype.run=function(){console.log("dun dun")}) with prototype then it will be changed for all the objects  that are using that function . like (var d6=new Dog3("bully","bulldog")) ,object d6 can access run method also,

//Example:- Take example of whatsapp
//suppose you are creating whatsapp and you forgot to add delete functionality,
//so all the objects that whould have been created from the parent object (saare objects create ho gaye hote from parent object), and you add a delete functionality in whatsapp all the children would have that property,
//so i create new methods for prototype and they will be available to previously created objects.

//-->in the case of local object/function  (this.barks=function() under Dog3 constructer function and with object d4.barks=function(){console.log("Bow Bow")} ),this function is now set in stone,if we change this with object it will affect only that not for all and with function(we can change this only in original main function) and then it will change for all objects, but what if ,if we add new functionality to the original main function, and you cant change anything for all,so all the objects will have this function will have this function,those will not have this function will not have this function,
//so prototype is providing dynamic behavior which you can do in constcueter function.

//Conclusion:- //so i create new methods for prototype and they will be available to previously created objects.

//**************************************************************************
