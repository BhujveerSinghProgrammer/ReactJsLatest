//Closure:-
//Retaining the scope of a variable even after a function has returned is known as Closure.

function makeWorker() {
  var name = "Pete";
  return function () {
    console.log(name); //Closure
  };
}
var name = "John"; //.global scoped
var work = makeWorker();
work(); //Pete, the name Pete will be only available in work() function other than it will be John.returning local scope value and utilizing it.

//  function()
//     {
//         console.log(name) //Closure
//     };

console.log(name); //John

//Closure happens becoz of the functional programming nature of js,
//because of function being returned and function being passed as param to another function.

// js when it sees a function returns another function and a viariable being used inside it,it creates a closure scope,and keeps the variable in that scope.

//example 2:-

console.log("....Break 1...");

function makeWorker1() {
  var name1 = "Pete1";
  return name1;
}
var name1 = "John1";
var work1 = makeWorker1();

console.log(work1); //Pete1,Note:- here method will be peet1 but name1 would be John1

console.log(name1); //John1
console.log(work1);

//example 3:-
console.log(".....Break 2.....");
function makecounter() {
  var count = 0;
  return function () {
    return count++;
  };
}

var counter = makecounter();
var counter2 = makecounter();

//its returning 0 first means ,becoz this is post increment,first return then increment.
console.log(counter); //0
console.log(counter); //1
console.log(counter); //2

console.log(counter2); //0
console.log(counter2); //1
console.log(counter2); //2

//or or or-- check given example its not retaining.

//example 3:-
console.log(".....Break 3.....");
function makecounter() {
  var count = 0;
  return count++;
}

var counter = makecounter();
var counter2 = makecounter();

console.log(counter); //0
console.log(counter); //0
console.log(counter); //0

console.log(counter2); //0
console.log(counter2); //0
console.log(counter2); //0

//*********************************************** */
console.log(".....Break 4.....");
//example 4:- Real world example of closure.
var a1 = (function () {
  var privatefunction = function () {
    console.log("hello");
  };

  return {
    publicfunction: function () {
      privatefunction();
    },
  };
})();

//a1(); //we cant use like this,a1 is not a function ,its an object.

console.log(a1.publicfunction()); //hello

//*********************** */
//Self invoking functions or IIFE (Immediately invoke function expression).

console.log(".....Break 5.....");

var a = function () {
  console.log("a");
};
//assigning a function to the variable.
//this is anonymous function we are assigning here. its not having name thats why this is anonymous function.

a();
(function () {
  console.log("a");
})(); // we can also use like this. its anonymous and self invoking function or (Immediately invoke function expression). this is like disappearing messages, immediately invoked function.

//Note:- Every variable that is getting created assigned into window.its polluting the global space.

(function () {
  var a = 10; //this variable is not attached to window,and its not polluting the global space.it will be created and destroy.
  console.log(a);
})();

console.log(".....Break 6.....");
//Topic:-  SetTimeOut(callback,timer)

// //1 .
// setTimeout( function()
// {
//     console.log("a");
// },3000);

//Output:- a

//2.
console.log(".....Break 7.....");
(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 3000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
})();
//Output:-
// 1
// 4
// 3
// 2

//Imp:-  Event Loop :- interview question
//_____________________________________________________
//Point 1:- Is java script is single threaded or multi threaded?
//Answer:-Its single threaded in nature.

//Point 2:-if single threaded then output for given upper function should be 1,2,3,4 then why? 1,4,3,2
//Answer:- we have a cycle in java script:-
//Call Stack-->Call to Api(Browser Apis) -->Event Queue-->Event Loop-->Call Stack

//Point 3:- what is Browser api?
//Ans:-you run your java script in your browser or in your node environment.browser gives you some special api's,which are going to run the asynchronous behavior.

//Point 4:- Event Loop is the whole procedure...//

//1.-->So first all the executions would go to Call Stack
//2.-->call stack does work for execution part only(simple execution or synchronous part only not async functions),if any async function like SetTimeout,first it  goes to call stack then it sends it to Browser's Api .
//3.--> then Browser's Api waits till the time end or done the tiking part. (setTimeOut given time) or after timeout and when time ends or functions ready then it sends it to Event Queue.

//4.-->   Event Queue holds all the function come from the Browser's Api as is till the time my call stack becomes empty then going to execute the function by call stack.

//*************** */
//Note:-so we can say call stack first executes all the synchronous part and then asynchronous functions go to browser's api --> event queue -->call stack-->ececute.

//***********************************************//
//Important topic :-Event Listeners-->
//_________________
//Answer:-

//addEventListener("event",callback,useCapture)
//you add it to the element itself.

//document:-the whole DOM(html document) all the functions required in order to manipulate the HTML document.

//window.document.

//getElementByID()

//Example 1:-
//Html code
// <!DOCTYPE html>
// <html>
// <head>
//     <meta charset="utf-8" />
//     <title></title>

// </head>
// <body>

//     <button id="btn">click me</button>
//     <script src="js/practice.js"></script>
// </body>
// </html>

// //practice.js code:-
// document.getElementById("btn").addEventListener("click",function(){console.log('clicked');});

//***********************************************//
//Important:- event bubbling and event capturing.
//____________________________________________
//Example 2:-

// //Html Code:-
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>React Sandbox</title>
//     <meta charset="UTF-8" />
//         <style>
//               body *{
//                   margin:10px;
//                 border:1px solid blue;
//               }
//         </style>

//   </head>

//   <body>
//     <div id="app"></div>
//     <button id="btn">click me</button>

//     <form id="frm">
//       FORM
//        <div id="dv">
//               Div
//               <p id="p">
//                   P
//                </p>
//        </div>

//     </form>

//     <script src="./Practice.js"></script>
//   </body>
// </html>

//practice.js :-

// var frm = document.getElementById("frm").addEventListener("click", function () {
//   console.log("frm");
// });

// var div = document.getElementById("dv").addEventListener("click", function () {
//   console.log("dv");
// });

// var p = document.getElementById("p").addEventListener("click", function () {
//   console.log("p");
// });

//Questions get placed are:-

//**if i click on frm:- form will be printed
//Output:- frm

//**if i click on div:- div and form will be printed.
//Output:- dv
// frm

//**If i click on p :-if i click on p then p,div and form will be printed,
//Output:- P
//dv
//frm

//its called as bubbling.,
//becoz the parent of p is div and parent of div is form thatwhy its printing p,div and form.
//coz coldrinks bubbles in glass goes from bottom to top thats why its name is bubbling.
///////////////////////////////////////////////////////////////

//** --> if i want it in reverse order then we will use true as third parameter in addEventListener function like given below:- */:-

// var frm = document.getElementById("frm").addEventListener("click", function () {
//   console.log("frm");
// },true);

// var div = document.getElementById("dv").addEventListener("click", function () {
//   console.log("dv");
// },true);

// var p = document.getElementById("p").addEventListener("click", function () {
//   console.log("p");
// }, true);

//**Now if i click on frm:- form will be printed
//Output:- frm

//**Now if i click on div:- frm and dv will be printed.
//Output:- frm
// dv

//**Now If i click on p :-if i click on p then frm,div and p will be printed,
//Output:- frm
//dv
//p

//This pahese is known as capturing. in capturing called from parent to child.
//and in bubbling called from child to parent.

//*************************************************** */

//First check its output:-if we click on p.?

// var frm = document.getElementById("frm").addEventListener(
//   "click",
//   function () {
//     console.log("frm");
//   },
//   true,
// );

// var div = document.getElementById("dv").addEventListener(
//   "click",
//   function () {
//     console.log("dv");
//   },
//   false,   // here i am stopping capturing phase, by default its false.
// );

// var p = document.getElementById("p").addEventListener(
//   "click",
//   function () {
//     console.log("p");
//   },
//   true,
// );

//Output:-
//frm
//p
//div

//if p is incapturing phase[//in capturing -called from parent to child.
//and in bubbling -called from child to parent.] then the parent frm will be capturing first,
//when frm will get printed and will be checked that frm is also in capturing phase,then it will go to div printing.
//but div is in bubbling phase so it will now go to child (p) first, thatswhy it will print P first  then div will get printed.

//Check  new example:- if we click on p?

// var frm = document.getElementById("frm").addEventListener(
//   "click",
//   function () {
//     console.log("frm");
//   },
//   false,
// );

// var div = document.getElementById("dv").addEventListener(
//   "click",
//   function () {
//     console.log("dv");
//   },
//   false,  //stopping capturing making it bubbling.
// );

// var p = document.getElementById("p").addEventListener(
//   "click",
//   function () {
//     console.log("p");
//   },
//   true,
// );

//Output:-
//P
//dv
//frm

//if i click on p then it checks that p is in capturing phase(//in capturing- called from parent to child.
//and in bubbling called -from child to parent.) and it will move to frm
//but frm is in bubbling phase due to false setting, frm will go to print P,
//and becoz p is in capturing phase thats why it will move to parent that is frm,but frm is in bubbling phase also,
//now it will move to dv and then it will print frm due to bubbling.
//....

//Imp ,Q1:- How can i avoid capturing and Bubbling?
//Now i dont want this Bubbling to happen:- if i want to click
//on a child then i want only to be clicked that,i dont want parents to be called.

//Answer:- add parameter event or e in function and use event.stopPropagation() ;

// var p = document.getElementById("p").addEventListener(
//   "click",
//   function (event) {
//     //we can also use 'e' instead of event
//     event.stopPropagation();

//     console.log(event.target); //it returns paragraph element
//     console.log("p");
//   },
//   true,
// );

//Output:- P
//*************************************** ******************************************/
//*************************************** ******************************************/

//Preventing Default Behavior:- use preventDefault() to prevent default behavior of anchor tag.
// or submit button not to submit the data ,only do the validations ,then use this method.

// <a id="artg" href="https://www.google.com/gmail/about/">
//   Click
// </a>;
//>>>>>>>>>>>>
// var artg = document.getElementById("artg").addEventListener(
//   "click",
//   function (event) {
//     event.preventDefault(); //its preventing default behavior of anchor tag to be open url,url will not be open
//   },
//   true,
// );

//*************************************** ******************************************/
//*************************************** ******************************************/
//Inter Ques:- How google docs frontend works and how to individuals may eidt it simultaneously(ek sath).
//Ans:- i dont know why the name doesnt strike me right now:-
//if you have something of this short.

//The End
