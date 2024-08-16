// React,Pytohon,TypeScript,.Net Core,HLD,LLD,

// csm-certified scrum master
// pm-project manager
// aws-Amazon Web Services
// pip-performance improvement plan

// ________________________________________________
// Module 1 $$.
// 1.0 >>..Basics from another Instructer:- JS And Node.js:-
// _________________________________________________
//    1.Install VSCode.
//    2.Create Folder + Open cmd in this path(just type cmd in the path line and enter) + enter
//    3.write command like  (code .   + enter ) --> then vs code will open with given folder -->and create file and write code what you want.

// <!-- Almost every browser today is empowered by java script -->
// <!-- Every browser has an embedded java script engine for ex-chrome uses V8 Engine,Mozile uses spider monkey  -->
// <!-- we can check and write the code in console window after inspect in the browser -->
// <!-- install Live Server from Extensions -->

//    <!DOCTYPE html>
//    <html lang="en">
//    <head>
//        <meta charset="UTF-8">
//        <meta name="viewport" content="width=device-width, initial-scale=1.0">
//        <title>Document</title>
//    </head>
//    <body>

//        <!-- <script>alert('helo world')</script> -->

//        <script src="./script.js"></script>
//    </body>
//    </html>

// Module 1 $$.
// 1.1 Java script with Node.js
// _____________________________________________________________________________________________________
// Node.js:- Node.js is an open source,cross-platform,back-end javascript runtime environment that runs on the V8 Engine,
//           and executes java script code outside a web browser,which was designed to build scalable network applictions.
//  It was developed by Ryan Dahl and it uses Chrome's V8 engine.

//  Node.js is an open source ,cross plateform runtime environment for developing server side and network applications.
//  Node.js applications are written in java script ,and can be run within the Node.js runtime on the OS X,Microsft window and Linux.

// -Download Node.js--V20.13.1 LTS(Long Term Support) version
// -Install this
// -check in command Prompt + node +enter (this will show the node js is installed or not with version)

// ___________________________________________
// Open VSCode +Create script.js file and write some code in Module 1 folder under VS Code

// script.js
// ___
// console.log('Hello from script file!')
// let a=10
// console.log(a)
// let b=12+14
// console.log(b)
// ___

// then Right click on Module 1 + Open in Integrated Terminal
// PS E:\SCLR\FJs\Module 1> node script.js

// Output:-
// Hello from script file!
// 10
// 26

// $$ Module 2:-
// __________________________________________________________________________________________________________
// 2.1.Variables in JS.
//     Variables means anything that can vary ,
//     in java script a variable stores the data value that can be changed later on.

//   Like :- var a=20;
//   var greet='Hello'
//   var personname='Bhuj'
//   var isavailable=true

//   -Create a Variable.js file in VSCode.
//   -Right click on Folder +Open in Integrated Terminal
//   -PS E:\SCLR\FJs\Module 1> node .\variables.js    [focus on .\variables.js]

// Dynamically and Statically Typed Languages:-
// __________________________________________
// Statically Typed Languages:-each variable and expression is already known at compile time.
// Like :- in Java
//   int var=10;
//   char letter='a'
//   string s1="java"
//   boolean isavailable=true;

// Dynamically Typed Languages:-Variables can recieve diffrent values at runtime and their types is defined at runtime.
// Like :- in JS
//   var var=10;
//   var letter='a'
//   var s1="java"
//   var isavailable=true;

// Rules to declare variables
// __________________________:-
// 1.must contain unique names called identifiers
// 2.name are case sensitive y and Y  are diffrent
// 3.cant use reserved words

// $$ Module 2:-
// 2.2 Array in JS.
// ______________________________________________________________________________________________
// In java script arrays can store values of diffrent data types
// whareas in statically typed language arrays will store only that data by which the array is defined.
// It enables storing multiple values under a same variable name.

// var arr=[12,'Ferrari',true,12.4]
// console.log(arr)

// --Open in Integrated Terminal

// PS E:\SCLR\FJs\Module 2> node array.js
// [ 12, 'Ferrari', true, 12.4 ]

// array.js
// __________________________

// var arr=[12,'Ferrari',true,12.4]

// // Accessing full array
// console.log(arr)

// //Accessing the element
// var a=arr[1]
// console.log(a)

// //replacing
// arr[1]='Bentley'
// console.log(arr)

// //Length property not method
// console.log(arr.length)

// $$ Module 2:-
// 2.3 Array Methods in JS.
// ________________________________________________________________________________________
// //Inbuilt js Array methods

// //Pop method - Last Element poped out/Removed
// var arr2=[12,14,56,47]
// arr2.pop()
// console.log('popped array', arr2)
// //Output= popped array [ 12, 14, 56 ]

// //popped out value
// var c=arr2.pop()
// console.log(c)
// //output=56

// //push method--Insert value in last
// arr2.push(100)
// console.log('pushed array',arr2)
// //Output=pushed array [ 12, 14, 56, 100 ]

// //Shift method --remove first element from the array
// var d=arr2.shift()
// console.log(d)
// console.log('shifted array',arr2)

// //unshift method--add element at the starting of the array
// arr2.unshift(5999)
// console.log('unshifted array',arr2)

// Output in Terminal:-

// PS E:\SCLR\FJs\Module 2> node .\array.js
// popped array [ 12, 14, 56 ]
// 56
// pushed array [ 12, 14, 100 ]
// 12
// shifted array [ 14, 100 ]
// unshifted array [ 5999, 14, 100 ]

// $$ Module 2:-
// 2.4 Objects in JS.
// ________________________________________________________________________________________
// Java Scripts Objects:-
// a java script object is collection that stores all the properties of particular entity .

// In java script an object is an unordered collection of key value pairs,each key value pair is called a property.
// The key of a property can be a string ,and the value of a property can be any value. eg:- a string.a number,an array abd even a function.
// javascript provides you with many ways to create an object.the most commonly used one is to use the object literal notation.

// Key Value Pairs Ex:-
// Car:{
// Model: 'SClass'
// Brand:'Marcedez'
// TopSpeed:'400kum/hr'
// Color:'Red'
// }

// -object literal notation:- Every other object in java script describes a diffrent entity with its properties.
//  var person={
//  firstname:"John",
//  lastname:"Doe",
//  age:50
//  }

// $$ Module 2:-
// 2.5 some more fun with objects.
// ________________________________________________________________________________________

// //in js objects are in key value pair
// var person={
//     firstname:"Adma",
//     secondmane:'smith',
//     age:25,
//     ownscar:false
// }

// console.log(person)
// //Output:-{ firstname: 'Adma', secondmane: 'smith', age: 25, ownscar: false }

// //dot notation
// console.log(person.age)
// //Output:-25

// //Bracket notation
// console.log(person['firstname'])
// //Output:=Adma

// var cap={
//     firstname:'Steeve',
//     LastName:'Rogers',
//     age:102,
//     friends:['Bucky Barnes','Bruce Banner','Tony Stark'],
//     isAvenger:true,
//     address:{
//         state:'New York',
//         city:{
//             name:'Brooklyn',
//             pincode:123456
//         }
//     }
// }

// console.log(cap.friends[1])
// //Output:=Bruce Banner

// console.log(cap.address.city.name)
// //Output:- Brooklyn

// //Updating Existing property
// cap.isAvenger=false
// console.log(cap);

// // Output:-
// // {
// //     firstname: 'Steeve',
// //     LastName: 'Rogers',
// //     age: 102,
// //     friends: [ 'Bucky Barnes', 'Bruce Banner', 'Tony Stark' ],
// //     isAvenger: false,
// //     address: { state: 'New York', city: { name: 'Brooklyn', pincode: 123456 } }
// //   }

// //Adding a new property

// cap.movies=['age of ultran','civil bar','first avenger']
// console.log(cap)
// // output:-
// // {
// //     firstname: 'Steeve',
// //     LastName: 'Rogers',
// //     age: 102,
// //     friends: [ 'Bucky Barnes', 'Bruce Banner', 'Tony Stark' ],
// //     isAvenger: false,
// //     address: { state: 'New York', city: { name: 'Brooklyn', pincode: 123456 } },
// //     movies: [ 'age of ultran', 'civil bar', 'first avenger' ]
// //   }

// //deleting a property
// delete cap.age
// console.log(cap)

// // output:-
// // {
// //     firstname: 'Steeve',
// //     LastName: 'Rogers',
// //     friends: [ 'Bucky Barnes', 'Bruce Banner', 'Tony Stark' ],
// //     isAvenger: false,
// //     address: { state: 'New York', city: { name: 'Brooklyn', pincode: 123456 } },
// //     movies: [ 'age of ultran', 'civil bar', 'first avenger' ]
// //   }

// $$ Module 3:-
// 3.1 Conditional Statements(if else,else if).

// var myscore=92
// if(myscore>90)
//     {
//         console.log('Yayyy got my Bicycle')
//     }
//     else
//     {
//         console.log('oops disnt get it this time')
//     }
//     //Output:- Yayyy got my Bicycle

// ______________________________
//  //90 to 100 -A
// //70 to 89 -B
// //50 TO 69 -C
// //LOWER THAN 50 -F

// var studentScore=95

// if(studentScore>90)
//     {
// console.log('Student has scored an A')
//     }

// else if(studentScore>70 && studentScore<=89)
//     {
//     console.log('Student has scored an B')
//     }

// else if(studentScore>=50 && studentScore<=69)
//     {
//         console.log('Student has scored an C')
//     }
// else
//     {
//         console.log('Student has got Fail')
//     }

// //Output:-Student has scored an A

// $$ Module 3:-
// 3.2,3,4,5.--> The For loop,while and do while loop, for in loop,for of loop
// ______________________________________________________________________________

// //while loop

// //print 1 to 10 using while loop
// // var i=1
// // var n=10
// // while(i<=n)
// //     {
// //         console.log(i)
// //         i++
// //     }

// //do while loop-it will execute once either condition is true or not.
// var i=1
// var n=10
// do
// {
//     console.log(i)
//     i++
// }
// while(i<=n)
// //__________________________________________________________________________________________

// //for in loop:-In java script ,the for in loop allows you to loop through the properties of an object.
//              //The statements of the code found within the loop body will be executed once for each property.

// var colors={
//     primary :'Blue',
//     Secondry:'Red',
//     tertiary:'white'
// }

// for(var color in colors)
//     {
//         console.log(color +'->' +colors[color])   //Focus here
//     }

// //Output:-
// // primary->Blue
// // Secondry->Red
// // tertiary->white

// var colorsarray=['Orange','Pink','Silver']
// for(var color in colorsarray)
// {

//     console.log(colorsarray[color])
// }

// // Output:-
// // Orange
// // Pink
// // Silver

// //Printing Indexes
// for(var color in colorsarray)
//     {

//         console.log(color+'-->'+colorsarray[color])
//     }

// //     Output:-
// // 0-->Orange
// // 1-->Pink
// // 2-->Silver

// //for of loop:-The For Of statement creates a loop iterating over iterable objects,
//               //including: built in string,Array,array like objects like NodeList
//               //and also map and set

// //For Of Loops
// var scores=[60,90,80,75]
// for(var score of scores)
//     {
//         console.log(score)
//     }

// // Output:- this is only printing values not the indexes
// // 60
// // 90
// // 80
// // 75

// //...To Print indexes with values
// //method - entries()
// let colors=['Red','White','Green']
// for(var [index,color] of colors.entries())
//     {
// console.log(index+'-->'+ color)
//     }

// // Output:-
// // 0-->Red
// // 1-->White
// // 2-->Green

// //Strings
//  var str='Scalar'
//  for(var c of str)
//     {

//         console.log(c)
//     }
// // Output:-
// // S
// // c
// // a
// // l
// // a
// // r

// $$ Module 4:-Functions in JS
// 4.1 What are functions in js?

// Syntax:-
// function greet()
// {
// console.log('hello');
// }

// call a function:- greet();

// function add(a,b)  ->parameters
// {
// console.log(a+b);
// }

// call:- add(2,3)  ->Imp-arguments are the values that we pass to the parameters.

// $$ Module 4:-Functions in JS
// 4.2 Functions as Expressions?

// //what is expression
// var a=2+3  //this is the expression  evaluating and making this 5
// console.log(a)

// //function as expression

// var add=function(a,b)  //The function doesnt have name called anonymous function
// {
//     console.log(a+b)
// }

// add(3,4)
// //Output:- 7

// //function as expression 2
// var add=function(a,b)
// {
//     return a+b
// }

// let result=add(3,4)
// console.log(result)
// //Output:- 7

// $$ Module 4:-Functions in JS
// 4.3 Hoisting?

// // Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

// // var a='hi'

// // function greet()
// // {
// //     console.log('hello from scalar')
// // }
// // console.log(a)
// // greet()

// // // output:-
// // // hi
// // // hello from scalar

// //////But But But
// console.log(a)
// greet()

// var a='hi'

// function greet()
// {
//     console.log('hello from scalar')
// }

// // Output:-   //The function is calling but the variable is undefined due to execution context
// // undefined
// // hello from scalar

// //___________________________________________//
// //Firstly Memory stores                      Code Execution
// //variable a =undefined       |undefined stores in memory before code execution
// //function=greet()            |full function stores in memory before code execution

// //*************************************************************** */
// //Diffrence between Normal function and Function Expression

// add (2,4)

// var add=function(a,b)
// {
// console.log(a+b)
// }
// //Output:-add is not a function (Getting Error)
// //You can not call function expression before declaration that,this is the benefit of function expression.
// //because we dont want to execute our function code before declaration and defining them.
// //thats why we can play little safe with our functions.

// $$ Module 5:-ES6 in JS
// 5.1 Introduction to ES6

// //Ecma Script- European Computer Manufacturers Association (or EcmaScript 2015)
// //ES6 OR ECMAScript 2015 is the 6th and major edition of the ECMAScript language specification standard.
// //It defines the standard for the implementation of java script nd it has become much more popular than the previous edition ES5.

// //ES6 COMES WITH SIGNIFICANT CHANGES TO THE JAVA SCRIPT LANGUAGE.it brought several new features like-
// //let and const keyword,rest and spread operators ,classess,modules etc.

// //ES6 Every Feature:-
// // 1.let and const keywords
// // 2.Arrow functions
// // 3.Default Parameters
// // 4.Template Literals and Multi Line Strings
// // 5.Destructuring
// // 6.Higher Order Functions
// // 7.Promises
// // 8.Classes
// // 9.Modules

// $$ Module 5:-ES6 in JS
// 5.2 Problems with var
// __________________________
// why do we have let and const keyword? whats the problem with var?

// //Problems with var

// //var a=21
// var a=35  //Issue 1:-redeclaration of variable (first issue with var)
// console.log(a)

// //Issue 2 ->variable declared with var keyword are not blocked scoped they are function scoped
// if(a===35)//this is not blocked scoped means we can access the var value outside the block
//     {
// var b=40
// console.log(b)
//     }
// console.log(b)
// //Output:- 40
// //         40

// //Function scoped
// function test()
// {
//     var c=100
//     console.log(c)
// }
// test()
// console.log(c)

// // output:-
// // 35
// // 40
// // 40
// // 100
// //ReferenceError: c is not defined

// $$ Module 5:-ES6 in JS
// 5.3 let and const

// //let keyword
// var a=20

// //solution of the ReDeclaration Problem
// let b=30
// //let b=40 :- ReDeclaration not allowed-This is giving an error before we run the code
// //But we can ReAssign the value to the let keyword
// b=40
// console.log(a)
// console.log(b)

// //Scoping Problem
// //variable declared with var keyword are not blocked scoped they are function scoped
// if(true)//this is not blocked scoped means we can access the var value outside the scope
//     {
// var c=40
// console.log(c)
//     }
// console.log(c)
// //
// //Output:-40
//     //:- 40

// //But with let->Variable declared with let keyword are block scoped

// if(true)
//     {
// let d=40
// console.log(d)
//     }
// console.log(d)
// //Output:-40
//        //Error:- d is not defined

//  function test()
//     {
//         let c=100
//         console.log(c)
//     }
//     test()
//     console.log(c)
//     //Output:-
//     //100
//     //100
//     //ReferenceError: c is not defined

// ..
// // //const keyword
// // //const keyword doesnt allow ReDeclaration,ReAssigning,

// // const d=100
// // //const d=1000 //doesnt not allowed reDeclaration
// // //d=1000 //doesnt not allowed reAssigning
// // console.log(d)

// // if(true)
// //     {
// // const d=40
// // console.log(d)
// //     }
// // console.log(d)
// // //Output:-40
// // //Error:- d is not defined

//     function test()
//     {
//         const c=100
//         console.log(c)
//     }
//     test()
//     console.log(c)
//     //Output:-
//     //100
//     //100
//     //ReferenceError: c is not defined

// Fucus On Chart:-
// __________________________
//        ReDeclaration  |ReAssignment  |Scoping
// var    Yes            |Yes           |Function Scoped,Global Scoped
// let    No             |Yes           |Block Scoped,Function scoped
// const  No             |No            |Block Scoped,Function scoped

// $$ Module 5:-ES6 in JS
// 5.4 Arrow Functions:-

// // Arrow Functions or fat arrow functions:-

// let test=function()
//     {
//     console.log(1)
//     }

// //In all just remove the function and put the arrow [=>] in front of ()
// //simple function
// let test1=()=>
// {
// console.log(1)
// }
// //...................................................................
// //function with parameter
// let test201=function(a)
//     {
//         console.log(a+2)
//     }
// //or remove function and put arrow
// let test202=(a)=>
// {
//     console.log(a+2)
// }
// //or remove ()
// let test203=a=>
//     {
//         console.log(a+2)
//     }
// //or remove {}

// let test211=a=>console.log(a+2)

// //......................................
// let test3=(a,b)=>
// {
//     console.log(a+b)
// }
// //or
// let test301=(a,b)=>console.log(a+b)
// //.............................................

// test1()
// test201(4)
// test3(2,6)

// //Output:-
// //1
// //6
// //8

// $$ Module 5:-ES6 in JS
// 5.5 Template Literal and multi line strigs:-

// console.log(`scalar is
// awesome`)

// //use Backtick `` to print multiple lines strings

// let a=24
// console.log('my age is ' + a) // simply we use this
// console.log(`my age is ${a}`)//we can also pass api key and api link and can change this as user demands by this trick
//                              //,this is very  ///usefull

// //Output:-
// // scalar is
// // awesome
// // my age is 24
// // my age is 24

// $$ Module 5:-ES6 in JS
// 5.6 Destructuring Arrays -Important

// //The destructuring assignment syntax is a java script expression that makes it possible to unpack values from arrays,
// //or properties from objects ,into distinct variables

// let arr=['Hi','I',,'am','Mrinal']

// // let a=arr[1]
// // let b=arr[2]
// // console.log(a)
// // console.log(b)

// // //output:-
// // //I
// // //am

// let [a,b,c,d,e]=arr   // This is DeStructuring for Array
// console.log(a)
// //output:-
// //Hi

// console.log(c)
// //output:-
// //undefined

// $$ Module 5:-ES6 in JS
// 5.7 Destructuring Objects

// //Destructuring an Object

// let myObj={
//     name:'Adam',
//     age:25,
//     gender:'male'
// }

// let{f,g,h}=myObj
// console.log(f)
// console.log(g)
// console.log(h)

// //Output:-
// //undefined
// //undefined
// //undefined

// let {name,age,gender}=myObj //we need to use key of an object ,cant use f,g,h etc..
// console.log(name)
// console.log(age)
// console.log(gender)

// // Output:-
// // Adam
// // 25
// // male

// let {name:n,age:a,gender:g1}=myObj //to use another name we need to use name:n or name:p  etc..
// console.log(n)
// console.log(a)
// console.log(g1)

// // Output:-
// // Adam
// // 25
// // male

// let myNewObj={
//     name:'Adam',
//     age:25,
//     gender:'male',
//     address:{
//         country:'England',
//         city:'London'
//     }
// }

// let {name:n1,age:a1,gender:g2,address}=myNewObj
// console.log(n1)
// console.log(a1)
// console.log(g2)
// console.log(address)

// // Output:-
// // Adam
// // 25
// // male
// // { country: 'England', city: 'London' }

// let {name:n2,age:a2,gender:g3,address:{country:c11}}=myNewObj
// console.log(n2)
// console.log(a2)
// console.log(g3)
// console.log(c11)

// // Output:-
// // Adam
// // 25
// // male
// // England

// $$ Module 5:-ES6 in JS
// 5.8 Modules and Modularity

// Steps:-
// Create two js files calc.js and main.js
// ________________________________________________

// //Modules and Modularity- Dividing your code into diffrent modules,all the modules do diffrent diffrent tasks

// calc.js
// _________________________________________________
// function add(a,b)
// {
//     console.log(a+b)
// }

// function sub(a,b)
// {
//     console.log(a-b)
// }

// function mul(a,b)
// {
// console.log(a*b)
// }

// function div(a,b)
// {
//     console.log(a/b)
// }

// module.exports={
//     addition:add,
//     subtraction:sub,
//     multiplication:mul,
//     division:div
// }

// main.js
// ____________________________________________

// const calculator=require('./calc')
// calculator.addition(2,3)
// calculator.subtraction(3,1)
// calculator.multiplication(2,3)
// calculator.division(8,2)

// // Output:-
// // 5
// // 2
// // 6
// // 4

// ______________

// $$ Module 6:-Functional Programming in JS
// 6.1 Introduction to Functional Programming:-
// Functional programming is a programing paradigm design to handle functions in a better way in JS(Mainly pure functions).
// we can use object oriented ,procedural and functional programming paradigms all at the same time in java script.
// by implementing functional programming concepts in your applications that will make your application more readable,usable.

// key features of functional programming:-
// 1.Imperative and Declarative way of writing code.
// 2.Pure functions and side effects
// 3.Higher Order functions(map,filter,reduce etc)
// 4.composition
// 5.closures
// 6.currying

// $$ Module 6:-Functional Programming in JS
// 6.2 Imperative and Declarative way of writing code:-

// Imperative  :-How to go about a problem(approach->structure->logic).
// Declarative :-what to achieve from the problem.

// //we will be given a number and we have to check that if the square of that number is even or not.
// //Imperative way of writing code
// const a=5
// const aSquared=a*a
// let isEven;

// if(aSquared%2==0)
//     {
//         isEven=true
//     }
// else
// {
//     isEven=false
// }
// console.log(isEven)

// //Declarative way of writing code :- this is reducing the length of the code
// const checkForSquare=(x)=>(x*x%2===0 ? true:false)
// console.log(checkForSquare(5))

// $$ Module 6:-Functional Programming in JS
// 6.3 pure functions and side effects:-

// Pure Function:- A pure function is a function which given the same input always returns the same output' produce no side effects.

// //Impure Function:-not always returns same output for same input.

// var a=4 //External Factor on input
// function addImpure(x)
// {
//     console.log(x+a)
//     a++;
// }

// addImpure(2)

// addImpure(2)

// addImpure(2)

// //Output: 4,5,6  //value is changing based on a -

// //Pure Function

// function addpure(x,a)
// {
//    // console.log(x+a)// Remove this because this is using external resource which is console,use return to make it pure function
//   return x+a//because pure function doesnt depends on external resource.

// }
// console.log(addpure(2,2))// we can use console.log outside the function to make it Pure function.

// $$ Module 6:-Functional Programming in JS

// 6.4 callback functions:-
// In java script a callback function is a function that is passed into another function as an argument.
// this function can then be invoked at a later stage of time.
// -Imp discuss later on this line :-  Since in java script ,functions are objects ,functions can be passed as arguments.

// // callback functions

// //First
// function printFirstName(firstname,cb)  //Note 1
// {
//     console.log(firstname)
//     cb('Jobs') //Note 2
// }
// function printLastName(lastname)
// {
//     console.log(lastname)
// }

// printFirstName('steeve',printLastName)

// //Output:-
// steeve
// Jobs

// //Second

// const isEven=(n)=>{
//     return n%2==0
// }
// let printResult=(evenFn,num)=>{
//     const isNumEven=evenFn(num)
//     console.log(`The number ${num} is an Even Number ${isNumEven}`)
// }
// printResult(isEven,16)

// $$ Module 6:-Functional Programming in JS
// 6.5 Higher Order functions(map and forEach):-

// Higher Order functions:- Higher order functions are functions that operate on other functions,either by taking them as arguments or by returning them.
// In simple words,A Higher Order function is a function that recieves a function as an argumment or returns the function as output.

// -->Its similar to an callback function ,callback to pass an function,while higher order function recieves an PARTICULAR function.

// // Higher Order Functions

// // let arr=[1,2,3,4,5]
// // let sqaredArr=[]
// // for(let i=0;i<arr.length;i++)
// //     {
// //         sqaredArr.push(arr[i]*arr[i])
// //     }
// // console.log(sqaredArr)

// //1 map method:- map method will loop through every element of your array and will perform specific operations that you have provided.
//              //map method will always return you a new array with your results(not modify existing array).

// const num=[1,2,3,4,5]
// const sqarednum=num.map(function(n)
// {
//     return n*n
// })
// console.log(sqarednum)

// //2 map
// const transactions=[1000,3000,4000,2000,-898,3800,-4500]
// const intoDollar=80

// let transactionsInDollars=transactions.map((amount)=>  // we are using arrow function here
//     {
//         return (amount/intoDollar).toFixed(0)  // toFixed(0) -we dont want any decimal value.
//     })
// console.log(transactionsInDollars)

// //____________________**************

// //Foreach method:- map method returns new array but foreach doesnt return array,it returns single handed values only.you cant access   values outside,you can use console.log//

// let transactionsInDollars1=transactions.forEach((amount) =>
//         {
//         console.log((amount/intoDollar).toFixed(0))  // Note here
//     })

// $$ Module 6:-Functional Programming in JS
// 6.6 find,findindex,some and every:-

// //Find returns the first element of an array that satisfy the condition.

// const transactions1=[1000,3000,4000,2000,-898,3800,-4500]
// let firstWithdrawls=transactions1.find(function(n)
// {
//     return n<0 //do return which is less than 0
// })
// console.log('first withdrawls'+firstWithdrawls)
// //Output:- -898

// //FindIndex

// let firstWithdrawlsIndex=transactions1.findIndex(function(n)
// {
//     return n<0  //do return which is less than 0
// })
// console.log("Index"+firstWithdrawlsIndex)
// //Output:- 4

// //Some method:- condition check: To get true or false based on a condition ,it will return true if even 1 element satisfies the condition.

// const transactions2=[1000,-3000,-4000,2000,-898,3800,-4500]

// let result=transactions2.some(function(n)
//     {
// return n>0  //it will return true becoz we have 2000 positive number.
//     }
// )
// console.log(transactions2)
// //Output:- True

// //every:-every element should satisfies the condition then it returns true.

// const transactions3=[-1000,3000,4000,-2000,-898,-3800,-4500]

// let resultevery=transactions3.every(function(n)
//     {
// return n>0  //it will return false becoz we dont have all positive numbers in the array.
//     }
// )

// console.log(resultevery)
// //Output:-false

// $$ Module 6:-Functional Programming in JS
// 6.7 Filter Method:-

// //you have to check for even numbers in an array and put them in a separate array.

// let numbers=[1,2,20,35,12,17,46]
// let evenarray=[]
// for(let i=0;i<numbers.length;i++)
// {
//   if(numbers[i]%2==0)
//     {
//      evenarray.push(numbers[i])
//     }
// }
// console.log(evenarray)

// //output:- [ 2, 20, 12, 46 ]

// //Filter method:-Filter returns a new array it will return all those elements that matches the specific condition,
//                 //if the condition is true it will return the element for that condition and if it is false it will discard
//                 //the element.

// //ex:-we perform operations in the map and foreach methods like we we are dividing an amount or returning n*n etc,
//                  //but in filter method we need condition to satisfy,we are checking for specific condition.
//                  //so filter is just used to check the condition.

// let num=[1,2,20,35,12,17,46]
// let evenNum=num.filter(function(n)
// {
// return n%2==0  //returning all even numbers from array
// }
// )
// console.log(evenNum)
// //Output:- [ 2, 20, 12, 46 ]

// const transactions1=[1000,3000,4000,2000,-898,3800,-4500]
// const depositedAmount=transactions1.filter(function(amount)
// {
//     return amount>0 //returning positive numbers
// }
// )

// console.log(depositedAmount)

// //output:- [ 1000, 3000, 4000, 2000, 3800 ]

// $$ Module 6:-Functional Programming in JS
// 6.8 Reduce Method:-

// //you need the sum of every element in an array

// let num=[1,2,3,4,10]
// let sum=0;  //accumulator (acc),if we need sum then will take accumulator=0 ,when we need product then will take accumulator=1 etc.

// for(let i=0;i<num.length;i++)
//     {
// sum=sum+num[i];
//     }

//   console.log(sum)

//  //Output:=20

//  //Reduce method:-Reduce method always returns single value not array or multiple values.we pass two parameters first accumulator(in this accumulator the assigning value will come like in sum =0,product=1 etc.)
//  // and the second value(in this value array value will come one by one).

//  let num1=[1,2,3,4,10]

// let results=num1.reduce(function(acc,value111){
// let updatedsum=acc+value111
// return updatedsum

//  },0) // our accumulator value will come here  ,to find sum of given array we initialize sum variable to 0.

// console.log(results)
// //Output:20

// //and

// let num2=[1,2,3,4,10]
// let resultsProduct=num2.reduce(function(acc,value){
//     let updatedproduct=acc*value
//     return updatedproduct

//      },1) // our accumulator value will come here  ,to find product of given array we initialize pro variable to 1.

//     console.log(resultsProduct)
//     //Output:240

// $$ Module 6:-Functional Programming in JS
// 6.9 chaining methods:-

// //
// let arr=
//         [
//          {name:"A",age:14,gender:"M"},
//          {name:"B",age:34,gender:"M"},
//          {name:"C",age:24,gender:"F"},
//          {name:"D",age:44,gender:"F"},
//          {name:"E",age:44,gender:"M"},
//          {name:"F",age:28,gender:"F"},
//          {name:"G",age:36,gender:"M"},
//          {name:"H",age:47,gender:"F"},

//         ]

// //Find Age of all the men(Males)

// let males=arr.filter(function(obj)
// {
//     return obj.gender=='M'
// }
// )

// let ageofmales=males.map(function(male)
// {
//     return male.age
// }
// )
// console.log(males)
// console.log(ageofmales)
// //Output:-
// // [
// //     { name: 'A', age: 14, gender: 'M' },
// //     { name: 'B', age: 34, gender: 'M' },
// //     { name: 'E', age: 44, gender: 'M' },
// //     { name: 'G', age: 36, gender: 'M' }
// // ]
// //   [ 14, 34, 44, 36 ]

// /////or or or

// let malesAges=arr.filter(function(obj)
// {
//     return obj.gender=='M'
// }
// ).map(function(male)
// {
//     return male.age
// })
// console.log(malesAges)
// //Output:-  [ 14, 34, 44, 36 ]

// //From the transactions array filter out positive elements and calculate the total amount
// //Use filter and reduce to achieve this.

// const transactions=[1000,3000,4000,2000,-898,3000,-4500]

// let positivenumbers=transactions.filter(function(n)
// {
// return n>0  //returning all even numbers from array
// }
// )
// console.log(positivenumbers)

// //Output:-[ 1000, 3000, 4000, 2000, 3000 ]

// let positivenumbersSum=transactions.filter(function(n)
// {
// return n>0  //returning all even numbers from array
// }
// ).reduce(function(acc,value111){
//     let updatedsum=acc+value111
//     return updatedsum

//      },0)
// console.log(positivenumbersSum)

// //Output:-13000

// $$ Module 7:-Object Oriented JavaScript
// 7.1 Introduction to Object Oriented Programming:-

// //Object Oriented Java script
// //Java script is not actually an Object Oriented Programming Language But we can write object oriented code by
// //using something called as a Prototype object

// $$ Module 7:-Object Oriented JavaScript
// 7.2 What is this keyword:-

// // //the this keyword in java script

// // //this keyword:- "This" keyword refers to an object that is executing the current piece of code.
// // //it references the object that is executing the current function.
// // //if the function being referenced is a regular function "this" references the global object.
// // //if the function that is being referenced is a method in an object , "this" references the object itself.

// // let a=10;
// // console.log(a);
// // //output:-10

// // //But But

// // b=20
// // console.log(b)
// // //Output:-20 //output still comes as 20 But we have not defined b varibale ,this is the drawback of non strict mode

// //********************************************** */
// //To overcome this situaltion use 'use strict' at top most level of java script file

// // 'use strict'
// // a1=10
// // console.log(a1)
// // //Output:- ReferenceError: a1 is not defined
// // //so use 'use strict' at top

// 'use strict'
// let a1=10
// console.log(a1)
// //Output:- 10

// $$ Module 7:-Object Oriented JavaScript
// 7.3 this with node js (non strict mode):-

// //this with node js (non strict mode):-

// //1.In console.log

//  console.log(this)
//  //Output:- {}  //returning Empty object

//  //2.In Function
//  function displayThis()
//  {
//      console.log(this)
//   }
//  displayThis();
//  //Output:- Global Object

//  //3.In Object-->Function (in object inside function)

// let myObj1={
//      name:'Mrinal',
//      age:23,
//     myFn1: function ()
//     {
//          console.log(this)  //Output:-{ name: 'Mrinal', age: 23, myFn: [Function: myFn] }   // Returning Object ItSelf
//         console.log(this.name) //Output:- Mrinal
//      }
//  }

//  myObj1.myFn1();
//  //Output:-{ name: 'Mrinal', age: 23, myFn: [Function: myFn] }   // Returning Object ItSelf
//  //Output:- Mrinal

//  //4.obj-->function--> function (inside object function and inside function is another function)

// let myObj2={
//     name:'Mrinal',
//     age:23,
//     myFn2: function ()
//     {
//         function myFn3()
//         {
//             console.log(this)  //Output:-Global Object
//             console.log(this.name) //Output:- undefined
//         }
//         myFn3()
//     }
// }

// myObj2.myFn2()

// //Output:-Global Object
// //Output:- undefined

// $$ Module 7:-Object Oriented JavaScript
// 7.4 this in node (strict):-

// //this in node (strict):-

// 'use strict'
// //1.In console.log

//  console.log(this)
//  //Output:- {}  //returning Empty object

//  //2.In Function
//  function displayThis()
//  {
//      console.log(this)
//   }
//  displayThis();
//  //Output:- undefined

//  //3.In Object-->Function (in object inside function)

// let myObj1={
//      name:'Mrinal',
//      age:23,
//     myFn1: function ()
//     {
//          console.log(this)  //Output:-{ name: 'Mrinal', age: 23, myFn: [Function: myFn] }   // Returning Object ItSelf
//         console.log(this.name) //Output:- Mrinal
//      }
//  }

//  myObj1.myFn1();
//  //Output:-{ name: 'Mrinal', age: 23, myFn: [Function: myFn] }   // Returning Object ItSelf
//  //Output:- Mrinal

//  //4.obj-->function--> function (inside object function and inside function is another function)

// let myObj2={
//     name:'Mrinal',
//     age:23,
//     myFn2: function ()
//     {
//         function myFn3()
//         {
//             console.log(this)  //Output:-undefined
//             console.log(this.name) //Output:- undefined
//         }
//         myFn3()
//     }
// }

// myObj2.myFn2()

// //Output:-undefined
// //Output:- undefined

// $$ Module 7:-Object Oriented JavaScript
// 7.5 this in browser:-

// Index.html
// __________________________

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

//     <!-- <script>alert('helo world')</script> -->

//     <script src="./thisWithoutStrictInBrowser.js"></script>
// </body>
// </html>

// -->Run this or Open this with live server-->check console in the browser

// thisWithoutStrictInBrowser.js
// ________________________________________________

// //1.In console.log

// console.log(this)
// //Output:- window object  //returning window object

// //2.In Function
// function displayThis()
// {
//     console.log(this)
//  }
// displayThis();
// //Output:- window object  //returning window object

// //3.In Object-->Function (in object inside function)

// let myObj1={
//     name:'Mrinal',
//     age:23,
//    myFn1: function ()
//    {
//         console.log(this)  //Output:-{ name: 'Mrinal', age: 23, myFn: [Function: myFn] }   // Returning Object ItSelf
//        console.log(this.name) //Output:- Mrinal
//     }
// }

// myObj1.myFn1();
// //Output:-{ name: 'Mrinal', age: 23, myFn: [Function: myFn] }   // Returning Object ItSelf
// //Output:- Mrinal

// //4.obj-->function--> function (inside object function and inside function is another function)

// let myObj2={
//     name:'Mrinal',
//     age:23,
//     myFn2: function ()
//     {
//         function myFn3()
//         {
//             console.log(this)  //Output:- window object  //returning window object
//             console.log(this.name) //Output:- Nothing,Empty
//         }
//         myFn3()
//     }
//  }

//  myObj2.myFn2()

// //Output:- window object  //returning window object
// //Output:- Nothing,Empty

//  ***************************************
//  and and and With Strict mode in Browser:-

//  <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

//     <!-- <script>alert('helo world')</script> -->

//     <script src="./thisWithStrictInBrowser.js"></script>
// </body>
// </html>

// -->Run this or Open this with live server-->check console in the browser

//  thisWithStrictInBrowser.js

//  //this in browser:-
// //With strict mode

// 'use strict'

// //1.In console.log

// console.log(this)
// //Output:- window object  //returning window object

// //2.In Function
// function displayThis()
// {
//     console.log(this)
//  }
// displayThis();
// //Output:- undefined  //returning undefined

// //3.In Object-->Function (in object inside function)

// let myObj1={
//     name:'Mrinal',
//     age:23,
//    myFn1: function ()
//    {
//         console.log(this)  //Output:-{ name: 'Mrinal', age: 23, myFn: [Function: myFn] }   // Returning Object ItSelf
//        console.log(this.name) //Output:- Mrinal
//     }
// }

// myObj1.myFn1();
// //Output:-{ name: 'Mrinal', age: 23, myFn: [Function: myFn] }   // Returning Object ItSelf
// //Output:- Mrinal

// //4.obj-->function--> function (inside object function and inside function is another function)

// let myObj2={
//     name:'Mrinal',
//     age:23,
//     myFn2: function ()
//     {
//         function myFn3()
//         {
//             console.log(this)  //Output:- undefined //returning undefined
//             console.log(this.name) //Output:- Nothing,Empty
//         }
//         myFn3()
//     }
//  }

//  myObj2.myFn2()

// //Output:-undefined //returning undefined
// //Output:- Nothing,Empty

// //

//  //

// $$ Module 7:-Object Oriented JavaScript
// 7.6 constructor functions:-

// // //constructor functions (Its kind of templates to create multiple objects):-

// // //In simple way
// // let car1={
// //     name:'X4',
// //     company:'BMW',
// //     color:'Red'
// // }

// // let car2={
// //     name:'S-class',
// //     company:'Mercedes',
// //     color:'White'
// // }

// //Or or or  using Constructer function (we create template )

// function createCar(_name,_company,_color)
// {
// this.name=_name
// this.company=_company
// this.color=_color

// this.drive=function(){
//     console.log(`I am driving ${this.name} and it is of ${this.color} color`)
// }

// }
// let car1=new createCar('X4','BMW','Red')
// let car2=new createCar('S-Class','Mercedes','White')
// console.log(car1)
// console.log(car2)

// car1.drive()

// //Output:-
// // createCar {
// //     name: 'X4',
// //     company: 'BMW',
// //     color: 'Red',
// //     drive: [Function (anonymous)]
// //   }
// //   createCar {
// //     name: 'S-Class',
// //     company: 'Mercedes',
// //     color: 'White',
// //     drive: [Function (anonymous)]
// //   }
// //   I am driving X4 and it is of Red color

// $$ Module 7:-Object Oriented JavaScript
// 7.7 classes in java script:-

// //classes in java script:-

// class person{
//     constructor(_name,_age)
//     {
// this.name=_name
// this.age=_age
//     }
//     welcome()
//     {
//         console.log(`Welcome ${this.name}`)
//     }
// }

// let person1=new person('Adam',19)
// let person2=new person('Mark',20)
// let person3=new person('Holi',33)
// let person4=new person('Sam',45)

// person1.welcome()

// console.log(person1)
// console.log(person2)
// console.log(person3)
// //Output:-
// // Welcome Adam
// // person { name: 'Adam', age: 19 }
// // person { name: 'Mark', age: 20 }
// // person { name: 'Holi', age: 33 }

// $$ Module 7:-Object Oriented JavaScript
// 7.8 Inheritance :- first extends the class and then use super method.

// //Inheritance

// class Person
// {
//     constructor(_name,_age)
//     {
//      this.name=_name
//      this.age=_age
//     }
// }

// class Teacher extends Person
// {
// constructor(_name,_age,_classStrength)
// {
//     super(_name,_age)
//     this.classStrength=_classStrength

// }

// }

// class Student
// {
//     constructor(_name,_age,_cgpa)
//     {
//         super(_name,_age)
//         this.cgpa=_cgpa

//     }
// }
// let person1=new Person('Adam',23)
// let Teacher1=new Teacher('Kuber singh',23,300)

// console.log(person1)
// console.log(Teacher1)

// //Output:-
// // Person { name: 'Adam', age: 23 }
// // Teacher { name: 'Kuber singh', age: 23, classStrength: 300 }

// $$ Module 7:-Object Oriented JavaScript
// 7.9 Method Inheritance:-

// //Inheritance

// class Person
// {
//     constructor(_name,_age)
//     {
//      this.name=_name
//      this.age=_age
//     }
//     welcome()
//     {
//         console.log(`welcome ${this.name}`)
//     }
// }

// class Teacher extends Person
// {
// constructor(_name,_age,_classStrength)
// {
//     super(_name,_age)
//     this.classStrength=_classStrength

// }
//  test()
//  {
//     super.welcome()
//  }
// }

// class Student extends Person
// {
//     constructor(_name,_age,_cgpa)
//     {
//         super(_name,_age)
//         this.cgpa=_cgpa

//     }
// }
// let person1=new Person('Adam',23)
// let Teacher1=new Teacher('Kuber singh',23,300)

// console.log(person1)
// console.log(Teacher1)
// Teacher1.test()

// //Output:-
// // Person { name: 'Adam', age: 23 }
// // Teacher { name: 'Kuber singh', age: 23, classStrength: 300 }
// // welcome Kuber singh

// $$ Module 7:-Object Oriented JavaScript
// 7.10 Polymorphism:-

// // Polymorphism

// class Animal
// {
//     sound()
//     {
//         console.log('Animals make diffrent sounds')
//     }
// }

// class Dog
// {
//     sound()
//     {
//         console.log('Dog Barks')
//     }
// }
// class Cat
// {
//     sound()
//     {
//         console.log('Cat mews')
//     }
// }

// let Animal1=new Animal()
// let tommy=new Dog()

// let percy=new Cat()
// tommy.sound()
// percy.sound();

// Animal1.sound();

// //Output:-
// // Dog Barks
// // Cat mews
// // Animals make diffrent sounds

// $$ Module 7:-Object Oriented JavaScript
// 7.11 Encapsulation in JS:-

// //Encapsulation in js:- encapsulate your method,object properties in your class let them not exposed outside of the class.

// class Person
// {
//     constructor(_name,_age)
//     {
//      var name=_name    // use var
//      this.age=_age
//  this.getName=function()   // and also add this type of returning method
//  {
//     return name
//  }

//     }

// }
// let person1=new Person('Adam',23)
// person1.name='Steeve' //we can change this outside the class,this should not be
// console.log(person1)
// console.log(person1.getName())

// //Output:-
// // Person { age: 23, getName: [Function (anonymous)], name: 'Steeve' }
// // Adam

// $$ Module 7:-Object Oriented JavaScript
// 7.12 What is Prototype:-

// //Prototype :- Run in Browser
// //Prototype Object:- A prototype object is a object thats get linked to your object by default  whenever you create an object and
// //                   inside that prototype object you will find all the methods that you can use with your particular object.

// let myObj={}
// console.log(myObj)
// //Output:- {}
//         //  [[Prototype]]:object

// let person1={
//         name:'Adam',
//         age:13
// }
// console.log(person1)
// //Output:- {name: 'Adam', age: 13} and under this we  have also [[Prototype]]:object
// //

// console.log(person1.hasOwnProperty('name'))
// //Output:- True

// console.log(person1.hasOwnProperty('gender'))
// //Output:- false ,becuase the person1 object doesnt have gender property
// //************************************************************************************** */
// //Constructor Function

// function Person(_name,_age)
// {
//         this.name=_name
//         this.age=_age
// }

// let person2=new Person('Steeve',45)
// console.log(person2)

// // //Output:- {
// //     "name": "Steeve",
// //     "age": 45
// // }
// //if we open the output in the Browser's Console then we find given output and [[Prototype]]:object and under this  [[Prototype]]:object
//   // we have another prototype object

// //Note:- this is happening because :-
//  //if we create simple Object:-then getting pre build object prototype(and it has own pre built methods and properties)
//  //if we use person constructor function and creating objects person2 ,or person1 or functions etc. attaching to person constructer,
//  // then first getting person prototype and also this is connected to object prototype prebuilt.

//  //so if we use hasOwnProperty method then it will first search in our person prototype, after that it will search in
//  // object prototype prebuilt ,
//  //if any id doesnt exists in both the prototype then it will search in 'null container' connected to object prototype prebuilt,
//  //if not found in null container then it will give us an error.

//  //This concept is known as Prototype chaining.

//  ////////and

//  //Prototype example 2

// //This is person constructer (Given),By default object prototype will be created for this person constructer

// function Person(_name,_age)
// {
//         this.name=_name
//         this.age=_age

//         this.getNameAndAge=function()
//         {
//                 console.log(`I am ${this.name} and my age is ${this.age}`)
//         }
// }

// let Person1=new Person('Adam',25)

// let Person2=new Person('Ram',35)
// console.log(Person1)
// console.log(Person2)
// //These person1 and person2 is linked with person constructer(prototype person) and person constructer(prototype person) is linked
// //with default object prototype
// //
// //output:-
// // Person {name: 'Adam', age: 25, getNameAndAge: ƒ}
// // Person {name: 'Ram', age: 35, getNameAndAge: ƒ}

// //Note:- we need to put the getNameAndAge in person prototype not in person1 and person2 object because its repeating .
// //after this getNameAndAge will linked to person1 and person2 objects not repeating .
// //its in '[[prototype]]:object'  now just like other methods like 'hasOwnProperty'

// //Imp:-  to do this we need to write given code:-

// function PersonNew(_name,_age)
// {
//         this.name=_name
//         this.age=_age

// }

// PersonNew.prototype.getNameAndAgeNew=function()
// {
//         console.log(`I am ${this.name} and my age is ${this.age}`)
// }

// let Person11=new PersonNew('Adam1',10)

// let Person22=new PersonNew('Ram1',20)

// console.log(Person11)
// console.log(Person22)

// //Output:-
// //PersonNew {name: 'Adam1', age: 10}
// //PersonNew {name: 'Ram1', age: 20}

// $$ Module 7:-Object Oriented JavaScript
// 7.13 Call Apply and Bind:-

// let person1={
//         firstname:'Steve',
//         lastname:'Rogers',
//         age:102,

//         printDetails: function()
//         {
//                 console.log(`Hi I am ${this.firstname} ${this.lastname} and i am ${this.age} years old`)
//         }
// }
// let person2={
//         firstname:'Tony',
//         lastname:'Stark',
//         age:102,

//         printDetails: function()
//         {
//                 console.log(`Hi I am ${this.firstname} ${this.lastname} and i am ${this.age} years old`)
//         }
// }

// person1.printDetails()
// person2.printDetails()
// //Output:-
// // Hi I am Steve Rogers and i am 102 years old
// // Prototype.js:20 Hi I am Tony Stark and i am 102 years old

// //Here we are repeating printDetails function ,its not following DRY(Dont repeat yourself principle) .,
// //to overcome this situation we use

// //Call method

// let person11={
//         firstname:'Steve',
//         lastname:'Rogers',
//         age:102,

//         printDetails: function()
//         {
//                 console.log(`Hi I am ${this.firstname} ${this.lastname} and i am ${this.age} years old`)
//         }
// }
// let person22={
//         firstname:'Tony',
//         lastname:'Stark',
//         age:102,

// }

// person11.printDetails.call(person22)
// //Output:-  Hi I am Tony Stark and i am 102 years old
// //but this is depending on person11 so lets make this globally
// //Like given below:-

// //Orr orr

// let person111={
//         firstname:'Steve',
//         lastname:'Rogers',
//         age:102,

// }
// let person222={
//         firstname:'Tony',
//         lastname:'Stark',
//         age:102,

// }

// let printDetails= function(city,power)
// {
//         console.log(`Hi I am ${this.firstname} ${this.lastname} and i am ${this.age} years old and i live in ${city}
//                 and power is ${power}`)
// }

// printDetails.call(person222,'India','Iron man Armour')

// //Output:-Hi I am Tony Stark and i am 102 years old and i live in India and power is Iron man Armour

// //************************************ */
// //Apply method:- in apply method the diffrence is only passing the parameters as an array like given below:-

// printDetails.apply(person222,['India','Iron man Armour'])
// //Output:-Hi I am Tony Stark and i am 102 years old and i live in India and power is Iron man Armour

// //************************************ */

// //Bind method

// let myFun= printDetails.bind(person222,'India','Iron man Armour')
// myFun()
// //Output:-Hi I am Tony Stark and i am 102 years old and i live in India and power is Iron man Armour

// $$ Module 8:-Asynchronous JavaScript
// 8.1 Introduction to Asynchronous Programming:-

// //Synchronous and Asynchronous
// //Synchronous :-Synchronous Programming means it will use single thread ,so only one program or operation will run at a time,
// //             Sync is blocking -it will only send the server one request at a time and will wait for
//               //that request to be answered by the server.

// //Asynchronous :-Asynchronous is non-blocking ,which means it will send multiple requests to a server at a time.

// $$ Module 8:-Asynchronous JavaScript
// 8.2 Reading a file Synchronously:-

// //synchronous code:- Reading a file Synchronously
// //f1.txt:- 'Hello from txt File 1'

// const fs=require ('fs')  // fs=file system ,this will run in node js environment

// console.log('First Line')

// let data=fs.readFileSync('f1.txt')

// console.log('The data from the file is -->'+data)

// console.log('Second Line')

// //Output:-
// // First Line
// // The data from the file is -->'Hello from txt File 1'
// // Second Line

// //if we will consume text from big file then the Second Line will take time to print untill readFileSync executes

// $$ Module 8:-Asynchronous JavaScript
// 8.3 Reading a file Asynchronously:-

// //Asynchronous code:- Reading a file Asynchronously:-
// //f1.txt:- 'Hello from txt File 1'
// //f2.txt:- 'Hello from txt File 2'

// const fs=require ('fs')  // fs=file system ,this will run in node js environment

// console.log('First Line')

// fs.readFile('f1.txt',cb1)   //This (readFile) is asynchronous method
// function cb1(err,data)
// {
//         if(err)
//         {
//                 console.log(err)
//         }
//         console.log('The data from the file is -->'+data)
// }

// fs.readFile('f2.txt',cb2)  //This (readFile) is asynchronous method
// function cb2(err,data)
// {
//         if(err)
//         {
//                 console.log(err)
//         }
//         console.log('The data from the file is -->'+data)
// }

// console.log('Last Line')

// //Output:-
// // First Line
// // Last Line
// // The data from the file is -->'Hello from txt File 1'
// // The data from the file is -->'Hello from txt File 2'

// //Note : As you can see here the First Line and Second Line is printed before the readFile 1 and 2 ,not waiting for time taken methods.
//         //just shifting to next method, so its following Asynchronous behaviour.

// $$ Module 8:-Asynchronous JavaScript
// 8.4 The Event Loop and Everything:-

// //Important:-How Event Loop works:-

// //The Event Loop and Everything:-

// const fs=require ('fs') // fs=file system ,this will run in node js environment

// console.log('First Line')

// fs.readFile('f1.txt',cb1)  //This (readFile) is asynchronous method
// function cb1(err,data)
// {
//         if(err)
//         {
//                 console.log(err)
//         }
//         console.log('The data from the file is -->'+data)
// }

// fs.readFile('f2.txt',cb2)
// function cb2(err,data)
// {
//         if(err)
//         {
//                 console.log(err)
//         }
//         console.log('The data from the file is -->'+data)
// }

// console.log('Last Line')

// //***Note:- *///Full Program Steps,Performing Asynchronous
// //There are 4  things 1.Call Stack 2.Node Api's  3. Call Back Queues  4. Event Loop

// //Call Stack:-Any code that you write in java script ,first it goes to call stack

// //step 1:-First console.log('First Line') will go to call stack first,then this will execute and will get removed from call stack
//          //and output will be printed

// //step 2:-then we have call back 1(cb1) and call back 2 (cb2) ,because the readfile method will execute call back cb1 and cb2
//         //Note:- In node js there are some methods are synchronous methods and some are asynchronous methods.
//         //so now call stack or node js will check readfile is asynchronous method and
//         //will not execute these asynchronous methods in call stack,it will just send readfile call backs cb1 and cb2
//         // to the Node api's(Its just space/Memory area to wait over here) without executing.
//         //this is no stack or queue,its just space thats why there is no order of storing cb1 and cb2 in Node api's.

// //step 3:- because cb1 and cb2 is waiting in the node api's memory area and our program will move to console.log('Last Line')
// //and this will go to call stack and will execute and will give us output and will get removed from call stack.

// //Note: Till now we have output:-
// //First Line
// //Last Line

// //step 4:- Now call back queues takes these cb1 and cb2 inside from Node api's,order can be random,may be cb2 can come first.now node api is empty.
// //Now basically Event Loop working as a security guard,this will allow these call backs to pass to Call stack
// //from call back queues when call stack is empty.

// // or when all synchronous code has finished or when your thread has finished.
// // Now call stack is empty ,Event Loop will take the functions cb1,cb2 one by one from callback queue and put this into call stack one by one.
// //and then it will execute the functions../

// //Note:- This is how asynchronous java script works with single thread,there is no concept of multi threading ,this is single threading

// //

// $$ Module 8:-Asynchronous JavaScript
// 8.5 Serial Execution of Async code:-

// //Serial Execution of Async code:-

// const fs=require ('fs') // fs=file system ,this will run in node js environment

// console.log('First Line')

// fs.readFile('f1.txt',cb1)  //This (readFile) is asynchronous method
// function cb1(err,data)
// {
//         if(err)
//         {
//                 console.log(err)
//         }
//         console.log('The data from the file is -->'+data)
//         fs.readFile('f2.txt',cb2)   // put this line here

// }

// function cb2(err,data)
// {
//         if(err)
//         {
//                 console.log(err)
//         }
//         console.log('The data from the file is -->'+data)
//         fs.readFile('f3.txt',cb3)  //Put this line here
// }

// function cb3(err,data)
// {
//         if(err)
//         {
//                 console.log(err)
//         }
//         console.log('The data from the file is -->'+data)
// }

// console.log('Last Line')

// //Output:- every time same
// // First Line
// // Last Line
// // The data from the file is -->'Hello from txt File 1'
// // The data from the file is -->'Hello from txt File 2'
// // The data from the file is -->'Hello from txt File 3'

// $$ Module 8:-Asynchronous JavaScript
// 8.6 setTimeout and setInterval:-

// //setTimeout and setInterval:-these are not the part of java script specification,but supported in all environment like
// // nodejs and browser environment
// //setTimeout:- its an Asynchronous method. it waits in node api's as we know,node js does this .after a particular time,
// //it will execute whatever inside it.

// //setTimeout(cb,2000);

// console.log('Before')

// function greet()
// {
//     console.log('Hello from setTimeout')
// }
// setTimeout(greet,2000)

// console.log('After')

// //Output:-
// // Before
// // After
// // Hello from setTimeout

// //Note:- This is Async method thatswhy before and after printed first and
// //after 2 second the timeout method will be printed.

// //setInterval :- its an Asynchronous method.

// //setInterval method run after every given time interval.

// function hello()
// {
//     console.log('Hello')
// }

// //setInterval(hello,1000)//after interval of every 1 second this will execute,
//                          //this will work infinitely ,so we will have to set a stopper.
// //to  make it proper use given code:-

// let timer=setInterval(hello,1000)
// setTimeout(function()
// {
//     clearInterval(timer)
// } ,3000  )

// // now this will go upto 3 seconds,after 3 seconds this will automatically stop.

// $$ Module 8:-Asynchronous JavaScript
// 8.7 Promises in JavaScript:-

// //Promises in JavaScript:-A promise is an object that represents the eventual completion (or failure) of an
// // asynchronous operation and its resulting value. ,Promise has four phases,lets say i promise - i will bring the groceries.
// //1.Pending state
// //2.fulfilled  ->i bought groceries
// //3.Rejected   ->i did not bring groceries
// //4.settled    ->promise finished

// let myPromise=new Promise(function(resolve,reject) //resolve and reject are two methods
// {
//  const a=4
//  const b=5
//  setTimeout(() => {
//     if(a===b)
//     {
// resolve('The values are equal')
//     }
//     else
//     {
// reject('the values were not equal')
//     }
//  }, 1000);
// }
// )

// // console.log(myPromise)
// // //Output:- Promise { <pending> }  //pending state

// //fulfilled and Rejected--->then and catch method
// myPromise.then(result => {
//     console.log(result)
//   }) //fulfilled state

//   .catch(error => {
//     console.error(error)
//   })  //Rejected state

// //Output:- the values were not equal

// $$ Module 8:-Asynchronous JavaScript
// 8.8 Promises and Async Await:-

// // Promises and Async Await:-
// //Example:-
// //if i go to a coffee shop,I place order for coffee to coffee shop
// //They gave me a token --[First promise]
// //you will have to wait with token untill your order has been processed ,processing time--[second promise]
// //served with your coffee --[resolved]

// //Code:-

// //for place order
// function placeOrder(drink)
// {
//  return new Promise(function(resolve,reject)
//  {
//     if(drink=='coffee')
//     {
//         resolve('Order for coffee recieved')
//     }
//     else
//     {
//         reject('Other orders Rejected')
//     }
//   })
// }
// //for process order

// function processOrder(order){
// return new Promise(function(resolve)  // we can also pass sinle method resolve without reject
// {
//     console.log('Order is being Processed')
//     resolve(`${order} and is served`)
// })
// }

// // //Calling-- solution with promises

// // placeOrder('coffee').then(function(orderPlaced)
// // {
// //     console.log(orderPlaced)
// // // Output:- Order for coffee recieved
// // let orderIsProcessed=processOrder(orderPlaced)
// // return  orderIsProcessed
// // }).then(function(processedOrder)
// // {
// // console.log(processedOrder)
// // }).catch(function(err)
// // {
// //     console.log(err)
// // })
// //  //chaining of promise  // this 'then' method is for another promise method [resolve(`${order} and is served`)] in processOrder

// //Output:-

// // Order for coffee recieved
// // Order is being Processed
// // Order for coffee recieved and is served

// //Async Await:-just keywords,always works with a function

// async function serveOrder()
// {
//     try
//     {
//         let orderPlaced=await placeOrder('coffee')
//         console.log(orderPlaced)
//         let processedOrder=await processOrder(orderPlaced)
//         console.log(processedOrder)

//     }
//     catch(error)
//     {
// console.log(error)
//     }
// }

// serveOrder()
// //Output:-
// // Order for coffee recieved
// // Order is being Processed
// // Order for coffee recieved and is served

// $$ Module 8:-Asynchronous JavaScript
// 8.9 The micro Task Queue:-

// //8.9 The micro Task Queue:-
// //Microtask queue always has higher priority than task queue,whatever code you write in promises,promises code will execute first
// //then callback code will get executed.,
// //Actually callbacks will go to Task Queue and Promises will go to the MicroTask Queue .
// // thats why first sync code(from Call Stack ) will run then promises code(from MicroTask Queue) will run then
// //callbacks(from task queue) will run.
// //this is the concept of taskqueue and microtask queue.

// //Example:-
// function logA()
// {
//     console.log('A')
// }
// function logB()
// {
//     console.log('B')
// }
// function logC()
// {
//     console.log('C')
// }
// function logD()
// {
//     console.log('D')
// }

// logA();
// setTimeout(logB,0);
// Promise.resolve().then(logC);
// logD();
// //Output:-

// // A
// // D
// // C
// // B

// //************************************

// $$ Module 9:-Miscellaneous Topics
// //9.1 Introduction to Miscellaneous:-
// //Topics:-
// //1.Truthy and falsy values
// //2.primitive and reference data types
// //3.deep copy shallow copy
// //4.closures- vimp
// //5.currying
// //6.null vs undefined vs not defined
// //7.type of operator and Array.isArray Method

// $$ Module 9:-Miscellaneous Topics
// 9.2 Comparison operator:-
// //Comparison operator:-

// let a=2
// let b=2
// console.log(a==b)
// //Output:-true

// let a1=2
// let b1='2'
// console.log(a1==b1)  //double quotes only checks the values not types [loose checking]
// //Output:-true

// let a2=2
// let b2='2'
// console.log(a2===b2)  //double quotes only checks the values not types [strict checking]
// //Output:-false

// $$ Module 9:-Miscellaneous Topics
// 9.3 Truthy and falsy values:-
// //Truthy and falsy values:- In java script every value has an boolean value.
// /* // ////1.
// // let a=2
// // if(a)
// // {
// //     console.log('i am truthy')
// // }
// // else
// // {
// //     console.log('i am falsy')
// // }
// // //Output:- i am truthy

// // ////2.
// // let a1=0
// // if(a1)
// // {
// //     console.log('i am truthy')
// // }
// // else
// // {
// //     console.log('i am falsy')
// // }
// // //Output:- i am falsy

// // ////3.
// // let a2='Bhuj'
// // if(a2)
// // {
// //     console.log('i am truthy')
// // }
// // else
// // {
// //     console.log('i am falsy')
// // }
// // //Output:- i am truthy

// // ////4.
// // let a3=''
// // if(a3)
// // {
// //     console.log('i am truthy')
// // }
// // else
// // {
// //     console.log('i am falsy')
// // }
// // //Output:- i am falsy

// // //......These all given values returns the falsy values rest are the truthy values.

// // //false
// // //0 (zero)
// // //-0 (minus zero)
// // //0n (BigInt zero)
// // //'' ,"",`` (empty string)
// // //null
// // //undefined
// // //Nan

//  */

// // observ given functions
// if("0")
//     {
//         console.log('i am truthy')
//     }
//    //Output:-i am truthy

// if(-100 && 100 && "0")
//  {
//      console.log('i am truthy')
//  }
// //Output:-i am truthy

// if([]==true )
// {
//     console.log('i am truthy')
// }
// else
// {
//     console.log('i am falsy')
// }

// //Output:- i am falsy

// if([])
//     {
//         console.log('i am truthy-')
//     }
//     else
//     {
//         console.log('i am falsy-')
//     }
// //Output:-i am truthy-

// if((-100 && 100 && "0") || []==true )
//     {
//         console.log('i am truthy')
//     }
//     else
//     {
//         console.log('i am falsy')
//     }
// //Output:-i am truthy

//     if(0)
//         {
//             console.log('i am truthy*')
//         }
//         else
//         {
//             console.log('i am falsy*')
//         }

// //Output:-i am falsy*

// if((0 && false))
// {
//     console.log('i am truthy ***')
// }
// else
// {
//     console.log('i am falsy ***')
// }
// //Output:-i am falsy***

// if(Infinity)
// {
//     console.log('i am truthy 1')
// }
// else
// {
//     console.log('i am falsy 1')
// }
// //output:- i am truthy 1

// if(NaN)
//     {
//         console.log('i am truthy 2')
//     }
//     else
//     {
//         console.log('i am falsy 2')
//     }
// //output:- i am falsy 2

//   if(false)
//         {
//             console.log('i am truthy 3')
//         }
//         else
//         {
//             console.log('i am falsy 3')
//         }
// //output:- i am falsy 3

//       if("")
//             {
//                 console.log('i am truthy 4')
//             }
//             else
//             {
//                 console.log('i am falsy 4')
//             }
//             //output:- i am falsy 4

// if(false ==="")
//         {
//              console.log('i am truthy 44')
//         }
//      else
//         {
//                     console.log('i am falsy 44')
//         }

//  //output:- i am falsy 44

//  if({})
//     {
//         console.log('i am truthy 5')
//     }
//     else
//     {
//         console.log('i am falsy 5')
//     }
// //output:- i am truthy 5

// if(!(null))
//     {
//         console.log('i am truthy 55')
//     }
//     else
//     {
//         console.log('i am falsy 55')
//     }
// //output:- i am truthy 55

// if(!(undefined))
//     {
//         console.log('i am truthy 555')
//     }
//     else
//     {
//         console.log('i am falsy 555')
//     }
// //output:- i am truthy 555

// if(!(null && undefined))
//     {
//         console.log('i am truthy 5556')
//     }
//     else
//     {
//         console.log('i am falsy 5556')
//     }
// //output:- i am truthy 5556

// // observ given function

// // observ given function

// ( function() {
//     if((-100 && 100 && "0") || []==true || 0) {
//     console.log(1);  // #

//     if([] || (0 && false)){
//         console.log(2) //#
//     }
//    if(Infinity && NaN && "false") {
//     console.log(3) //#
//    if("")
//     {
//         console.log(4)
//     }
//   } else {

//     console.log(5) ;//#
//     if(({}|| false ==="") && !(null && undefined)) {
//      console.log(6) ;//#
//     }
//     }
//     }
// })();

// //Output:-
// // 1
// // 2
// // 5
// // 6

// $$ Module 9:-Miscellaneous Topics
// 9.4 Primitive DataTypes:-

// //9.4 Primitive DataTypes:-

// 1.

// let firstPerson='Adam'

// let secondPerson=firstPerson

// firstPerson='Steeve'

// console.log('First Person is='+firstPerson)
// console.log('Second Person is='+secondPerson)
// //Output:-
// // First Person is=Steeve
// // Second Person is=Adam

// //Note:- But secondPerson Name has not changed. becoz let secondPerson=firstPerson

// let firstPerson1={
//     Name:"Adam",
//     Age:23
// }

// let secondPerson1=firstPerson1

// firstPerson1.Name='Steeve'

// console.log(firstPerson1)
// console.log(secondPerson1)

// //Output:-
// // { Name: 'Steeve', Age: 23 }
// // { Name: 'Steeve', Age: 23 }

// //Primitive Data Types:- stored in stack memory
// //Numbers
// //Strings
// //Null
// //Boolean
// //Undefined

// //Reference Data Types--stored in Heap Memory
// //Objects
// //Arrays
// //Functions

// $$ Module 9:-Miscellaneous Topics
// 9.5 Reference DataTypes:-
// //Reference DataTypes:-
// //In reference data types we dont store values in the stack we store pointers that map with particular location in heap memory.In
// //Heap memory it has the values .

// //ex:-

// let obj1={
//     name:"Bhujveer singh",
//     age:30
// }

// let obj2=obj1;
// //Note:- we are not assigning the value of obj1 to obj2 ,we are assigning pointer only.and the obj1 pointer maps to the location in heap memory and now obj2 pointing same memory location of obj1 pointer. so if you change in the obj2 then changes will reflect in both because these are reference types.
// //Note:- because its reference type and values are stored in heap and in stack only pointer stored.

// $$ Module 9:-Miscellaneous Topics
// 9.6 Shallow copy:-

// //9.6 Shallow copy:-
// //****************************************************************************************************************** */
// //Case 1:-   Normal way:-
// let obj1={
//     name:"Bhuj",
//     age:23
// }

// let obj2=obj1

// obj2.name='Steeve'

// console.log(obj1)
// console.log(obj2)
// //Output:-
// // { name: 'Steeve', age: 23 }
// // { name: 'Steeve', age: 23 }

// //so if you change in the obj2 then changes will reflect in both because these are reference types.

// //****************************************************************************************************************** */
// //Case 2:-  Note:-But with shallow copy using spread operator {...}     makes it immutable:-
// // Key Points
// // Top-Level Copy: A shallow copy duplicates the top-level elements or properties.
// // Reference Copy for Nested Structures: Nested objects or arrays are not deeply copied; only their references are copied.
// // This means changes to nested objects or arrays will affect both the original and the copied structures.
// // Use Cases: Shallow copies are often sufficient for cases where you need a quick duplicate of an object or array
// //without deeply  nested structures.

// let firstPerson={
//     name:"Adam",
//     age:25
// }

// let secondperson={...firstPerson}  //Shallow copy

// secondperson.name='Steeve'

// console.log(firstPerson)
// console.log(secondperson)

// //Output:-
// // { name: 'Adam', age: 25 }
// // { name: 'Steeve', age: 25 }

// //Case 3:-

// let firstPerson1={
//     name:"Adam",
//     age:25,
//     address:{
//         city:'GZB',
//         state:'UP'
//     }
// }

// let secondperson1={...firstPerson1}
// secondperson1.name='Steeve'
// secondperson1.address.city='Lucknow'

// console.log(firstPerson1)
// console.log(secondperson1)

// //Output:- Nested objects or arrays are not deeply copied; only their references are copied.
// // { name: 'Adam', age: 25, address: { city: 'Lucknow', state: 'UP' } }
// // { name: 'Steeve', age: 25, address: { city: 'Lucknow', state: 'UP' } }

// $$ Module 9:-Miscellaneous Topics
// 9.7 Deep Copy:-

// //9.7 Deep Copy:-
// // In JavaScript, a deep copy is a process of copying an object or array along with all of its nested objects or arrays, ensuring that the copy is completely independent of the original. Changes to the deep-copied object or array do not affect the original object or array.

// // Key Differences Between Shallow Copy and Deep Copy
// // Shallow Copy:

// // Copies only the top-level elements or properties.
// // Nested objects or arrays are copied by reference.
// // Changes to nested objects or arrays affect both the original and the copied structure.
// // Deep Copy:

// // Copies all levels of the object or array.
// // Nested objects or arrays are fully copied and independent of the original.
// // Changes to nested objects or arrays do not affect the original structure.

// //Note:- The simplest way to create a deep copy is to use JSON.stringify and JSON.parse.
// let firstPerson={
//     name:"Adam",
//     age:25,
//     address:{
//         city:'GZB',
//         state:'UP'
//     }
// }

// let secondperson=JSON.parse(JSON.stringify(firstPerson))   //Deep copy of an object

// secondperson.address.city='Delhi'

// console.log(firstPerson)
// console.log(secondperson)

// //Output:-
// // { name: 'Adam', age: 25, address: { city: 'GZB', state: 'UP' } }
// // { name: 'Adam', age: 25, address: { city: 'Delhi', state: 'UP' } }

// $$ Module 9:-Miscellaneous Topics
// 9.8 Closures in JavaScript:-

// // A closure in JavaScript is a feature where an inner function has access to the outer (enclosing) function’s variables. This includes:

// // The inner function's own scope.
// // The outer function's variables.
// // Global variables.
// // Closures are created whenever a function is created, at function creation time.

// function test()
// {
//     let a=2
//     function test1()
//     {
//         console.log(a)
//     }
//     return test1
// }

// let fun=test()
// console.log(fun) //Output:-[Function: test1]  :- This is returning function test1

// fun()// Output:- 2  ,   this is accessing The outer function's variables.

// $$ Module 9:-Miscellaneous Topics
// 9.9 Closures with nested functions:-

// //9.9 Closures with nested functions:-

// //9.9 Closures with nested functions:-

// function greet()
// {
//     let name='Steeve'
//     function displayName()
//     {
//         console.log('Hi ' +name)
//         let age=25
//         function displayAge()
//         {
//             console.log('my age is='+age + " " +name)
//         }
//         return displayAge
//     }
//     return displayName

// }

// let g1=greet()

// console.log(g1)  //Output:- [Function: displayName]

// g1()  //Output:- Hi Steeve

// let g2=g1() //Output:- Hi Steeve

// console.log(g2) //Output:- [Function: displayAge]

// g2()// Output:- my age is=25 Steeve

// $$ Module 9:-Miscellaneous Topics
// 9.10 function Currying:-

// Currying in JavaScript is a technique where a function that takes multiple arguments is transformed into a series of functions that each take a single argument. This allows for partial application of a function's arguments.

// //

// let sum=function(a,b)
// {
//     console.log(a+b)

// }

// sum(1,2)  //Output:- 3

// // A regular function that adds three numbers
// function add(a, b, c) {
//   return a + b + c;
// }

// // A curried version of the same function
// function curriedAdd(a) {
//   return function(b) {
//     return function(c) {
//       return a + b + c;
//     };
//   };
// }

// // Using the curried function
// const add1 = curriedAdd(1);
// const add1And2 = add1(2);
// const result = add1And2(3); // result is 6

// // Or in a more compact form
// const resultCompact = curriedAdd(1)(2)(3); // result is 6

// console.log(result); // 6
// console.log(resultCompact); // 6

// $$ Module 9:-Miscellaneous Topics
// 9.11 Null vs not defined vs undefined:-

// // undefined
// let a
// console.log(a) //Output:- undefined

// let arr=[1,2, ,4]
// console.log(arr[2])  //Output:- undefined

// function add(a,b)
// {
//     let c=a+b
// }
// let sum=add(2,3)
// console.log(sum) //Output:- undefined

// //null

// let mylife=null
// console.log(mylife) //Output:- null

// //not defined

// console.log(z) //Output:-z is not defined

// $$ Module 9:-Miscellaneous Topics
// 9.12 typeof Operator:-

// let a=2
// console.log(typeof a) //Output:- number

// let b='scalar'
// console.log(typeof b) //Output:- string

// let c=true
// console.log(typeof c) //output:- boolean

// let myobj={
// name:'bhuj',
// age:31
// }
// console.log(typeof myobj) //output:- object

//     let arr=[1,2,3]
//     console.log(typeof arr) //output:- object
//     //Note:- bcoz in js arrays are the object type

// $$ Module 9:-Miscellaneous Topics
// 9.13 Array.isArray method:-

// //Array.isArray :- Its important to know the type of array is true of not.

// let arr=[1,2,3,4]

// let a=2

// let checkforArray=Array.isArray(arr)
// console.log(checkforArray) //Output:- true

// let checkforArray1=Array.isArray(a)
// console.log(checkforArray1) //// Output:- false

// //The End
