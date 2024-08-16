//Imp:-

function Dog(name, breed) {
  this.name = name;
  this.breed;
  this.barks = function () {
    console.log("Main barks method");
  };
}

var d1 = new Dog("Dog1", "Breed1");
var d2 = new Dog("Dog2", "Breed2");

d1.barks(); //Main barks method
d2.barks(); //Main barks method

d1.barks = function () {
  console.log("New Barked Method");
};

d1.barks(); //New Barked Method
d2.barks(); //Main barks method

//If you change function in d1 then it will only change in d1 not in d2. becoz they are local copies..

//But using proto it will  be available for all.
d2.__proto__.barks1 = function () {
  console.log("ram");
};

d1.barks1(); //ram
d2.barks1(); //ram

//************************************** */
console.log("break 1");
//Imp:-Q
var a = {},
  b = { key: "b" },
  c = { key: "c" };
d = {};

//Note :-its equavalent to
//  var a={};
//  var b={key:'b'},
//  var c={key:'c'};

a[b] = 123;
a[c] = 456;

console.log(a[b]); //456 ? why

a[b] = 123; //it will automaticaly add tostring() to that.its setting/creating a key with 123
console.log(a); //Output:- { '[object Object]': 123 }
a[c] = 456; //here we are overriting key with 456
console.log(a); //{ '[object Object]': 456 }
//Thats why its returning 456

a[d] = 999; //here we have overridden the key with 999
console.log(a[b]); //999

//Note :-
console.log("Break 2");

console.log({}.toString());
//"[object Object]"- its [object object] but string

console.log({ k: 10 }.toString());
// "[object Object]"- but its string
//So when you use object.toString() then it will always return like "[object object]""  string

console.log([1, 2, 3].toString());
//"1,2,3" -- its also returning string like array.

//_________________________________________
//Coclusion:-
//Revision:-
//Q1.What is prototype:-Its an Object

//Q2.Where it is available:-its available in constcueter function.

//Q3.Whats the use of it:-for inheritance

//Q4.How do you access the property of prototype when object is created from constcueter function:- using proto,proto is a key/pointer point to another object,other objects property can also be used by your object using proto.
