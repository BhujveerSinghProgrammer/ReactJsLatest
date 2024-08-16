//Revision:-
//== :- compares and convert string into a number :-imp
//===:- compares  value and type on both sides

//Function programming language
//throw around

//simple way
function abc(a) {
  console.log("abc called", a);
}
abc(1);

//second way
//Function Expression:- assigning a anonymous function to the variable
var a = function (b) {
  console.log("b called");
};
a(1);

//whats the advantage of second way:-  you an pass the parameter as a function and you can assign a function based on if condition like :-
// var d;
// if(true)
// {
//      d=function()
//     {
//         //do 1
//     }
// }
// else
// {
//     d=function()
//     {
//          //do 2
//     }
// }

// **********************************//

// var d=1 may be
//var d=function(){} may be
function a1(d) {
  console.log(d());

  console.log(typeof d); //function
  //q1:- why undefined gets printed? becoz typeof d is function and its not returning anything thats why its automatically returns undefined.
}
a1(function () {
  console.log("Inside function");
});
//Output:-
// Inside function
// undefined

//ex:-

function a2() {}

var d1 = a2();
console.log(d1); //undefined

//
function a3() {
  return 1;
}

var d2 = a3();
console.log(d2); //1

// **********************************//

function a4() {
  return function () {
    console.log("returned function");
  };
}
var d4 = a4();
console.log(d4); //[Function (anonymous)]
console.log(d4());
//Output:-
// returned function
// undefined

// **********************************//

//Objects:-----
//First way to create
var obj = {};
//Second way to create
var obj1 = new Object();

var obj2 = {
  k: 10,
};

var dog = {
  name: "pablo",
  breed: "lab",
};

//or
var dog = {
  name: "pablo",
  breed: "lab",
  x: "x",
};
console.log(dog.name); //pablo
console.log(dog["name"]); //pablo

var k = "name"; //Dynamic key
console.log(dog.k); //undefined
console.log(dog[k]); //pablo
console.log(dog.x); //x

//Add other details of the dog
var dog = {
  name: "pablo",
  breed: "lab",
  x: "x",
  owener: {
    name: "Bhuj",
    profession: "SDE",
    Address: {
      House: "2",
      city: "Bengaluru",
      state: "karnataka",
    },
  },
  barks: function () {
    console.log("woof woof");
  },
};

console.log(dog.owener.name); //Bhuj
console.log(dog.barks());
//Output:-
// woof woof
// undefined

//******************************************** */
//Creating multiple objects:-you have constructer functions to create an object,in js everything is going to be constructer function
//you dont have classes.its way of creating a class in js.
//constructer function name should be in capitalised fashion
function dog5(name, breed) {
  this.name = name;
  this.breed = breed;
}
var d5 = new dog5("pablo", "lab");
console.log(d5); //dog5 { name: 'pablo', breed: 'lab' }
console.log(d5.name); //pablo

//************************************************** */

function abc2() {
  console.log(a6); //a6 is not defined
}
//***** */
var a7 = 10;
function abc3() {
  console.log(a7);
}
abc3(); //10

//***** */
var a8 = 10;
function abc4() {
  var a8 = 11; //your local variable beats the global variable
  console.log(a8);
}
abc4(); //11

//***** */ ******Very Important Hoisting in JS*************//
//Ex 1:-

var a9 = 10;
function abc5() {
  console.log(a9);
  var a9 = 11;
}
abc5(); //undefined

//its showing undefined becoz js makes this function as given below

// var a9=10;
// function abc5()
// {
//     var a9
//     console.log(a9);
//     a9=11
// }

//Actually java script internally takes this variable 'var a9=11' hoisted
//to the top inside the function only.
//if you declare variable in the bottom of the function,that declaration woluld be taken to the top, and value will be assign where it is.
//just the declaration would be taken to the top.

//Note:- if we dont have local varibale then it will check for global variable else this will give first priority to the local variable.

//hoisting is the  side effect of the js. there is no use of hoisting in js
//hoisting should be avoid. there is not practical use of this.

//************************************************** */

console.log(-"34" + 10); //-24

//Imp,-Note:- undefined ++ = NaN
var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++; // this will be undefined ++ =[NaN] due to hoisting
    // HERE we are trying to convert which is undefined, thats why returning NaN

    console.log(b);

    var k1 = "ram";
    k++;
    console.log(k); //NaN , HERE We are trying to convert string thats why its givinf Nan

    var b = 3;
    console.log(b);
  }

  inner();
}

outer(); //
// Output:-
// NaN
// NaN
// 3

//****************************************** */
//Important :- Call(), Apply(), Bind()

//==>Call() Method
//call(obj,param1,param2,param3)

var pokemon = {
  firstname: "Pika",
  lastname: "Chu",
  getPokeName: function () {
    var fullname = this.firstname + "" + this.lastname;
    return fullname;
  },
};

var pokemonName = function (snack, hobby) {
  console.log(this.getPokeName() + " I choose you ! ");
  //'this.getPokeName()' in this- its pointing to window not object pokemon,it will give error without using call() method, or you can use 'pokemon.getPokeName()' instead of 'this.getPokeName()', becoz window is not having this getPokeName(),only pokemon object having getPokeName().
  console.log(this.getPokeName() + " loves " + snack + " and " + hobby);
};

//pokemonName("Sushi","Algos") // this.getPokeName is not a function, giving this error bcoz in 'this.getPokeName()', 'this' is pointing to window here

//Note:- if from line 'this.getPokeName()' ,getPokeName() does not exists then it gives us error if exists then its pointing to window .

//Browser->console -> type window +enter->Everything you create goes inside into global object called window->Window has every function, everything that you think of, all the global objects,all the variables,all the functions you create->window is the parent object of js.
//Note:-window is global variable only when js is run inside your browser ,if its run in node js its going to be global
//Note:-Everything in js is an object,it would be driven through a global object which is known as window. type of window is also object.
//***********************

//But with call method:-
//call(obj,param1,param2,param3)

pokemonName.call(pokemon, "Sushi", "Algos");
//Output:-
// PikaChu I choose you !
// PikaChu loves Sushi and Algos

//Now from line 'this.getPokeName()', 'this' is pointing to pokemon now with call method.

//Q1:- WHATS THE JOB OF CALL?
//ANSWER:- the job of call is to point your calling context,
//change your calling context,assign 'this' as the passed object.its going to dynamically refer to an object.

//********************************************************** */
//==>Apply() method:- same as call method but we can pass parameters as an array in apply() method.

//Apply(obj,[param1,param2,param3])
pokemonName.apply(pokemon, ["Sushi", "Algos"]);
//Output:-
// PikaChu I choose you !
// PikaChu loves Sushi and Algos

console.log("****");
//********************************************************** */
//==>Bind() method:- Bind() creates the copy of the function which is binded to the object.
//ex:1
var bindedpokemonName = pokemonName.bind(pokemon, "Sushi", "Algos");
bindedpokemonName();
//Output:-
// PikaChu I choose you !
// PikaChu loves Sushi and Algos

// //or like this
var bindedpokemonName1 = pokemonName.bind(pokemon);
bindedpokemonName1("Sushi1", "Algos");
bindedpokemonName1("Sushi2", "Algos");
bindedpokemonName1("Sushi3", "Algos");
//Output:-
// PikaChu loves Sushi1 and Algos
// PikaChu I choose you !
// PikaChu loves Sushi2 and Algos
// PikaChu I choose you !
// PikaChu loves Sushi3 and Algos

//End
