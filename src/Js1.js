// Port 5500 is commonly used for various purposes, depending on the context:

// VS Code Live Server: When using the Live Server extension in Visual Studio Code, port 5500 is often the default port for serving your web project locally. This allows you to view changes in real-time as you edit your code1.

//Note:- java script achieves everything on runtime,thats the power of java script.we dont have compiler it runs on browser,thats why it runs fast as compared to another language. because of the dynamic behavior .
//everything is in an object format and run easily.

//Note:- Every variable that is getting created assigned into window.

//Primitive Data Types
//String
//Number
//Boolean
//Undefined
//Null
//************************************************/
var a = 10;
var b = 10;
var c = a + b;
console.log(c); //Returning 20

var a = 10;
var b = "10";
var c = a + b;
console.log(c); //Returning 1010

//Dynamically Typed Language

var str = "Hello";
var num = 12545;
var bol = true;

console.log(str); //Hello
console.log(num); //12345
console.log(bol); //true

console.log(typeof str); //string
console.log(typeof num); //number
console.log(typeof bol); //boolean

//********************************************/
var d = null;
//null is an empty value which you assign to variable
//to suggest no value,its going to be used
//for nil checks or null checks
console.log(typeof d); //object
//Type of null is object,Everything in js is an object

//********************************************/

var e;
console.log(e); //Undefined
console.log(typeof e); //Undefined
console.log(typeof typeof null); //typeof typeof of anything Always be a tring
console.log(typeof typeof e); // string

//********************************************/

var a = "2";
var b = 2;
console.log(a == b); //returning true in console
console.log(b == a); //checks the values only
//this is going to convert string into number into both the cases.
//(2==2)
//coercion
//converstion

//********************************************/

console.log(a === b); //return false (Right Output)
//checks the type and value on the both sides

console.log(2 === 2); //return true
//These all are Implicit coercion from string to a number ,
//in == it convert string to a number and then checks values
//in === it convert string to a number and then check values and types

//******************************************************/
//Explicit coercion

console.log("Explicit coercion");
console.log(+"2"); //2
console.log(typeof +"2"); //number
console.log(+"abc"); //returning NAN (not a number)

console.log(typeof +"abc"); //number- returning a number (why?)

console.log(+"abc" === +"def"); //returns false (why?) becuase
//Nan is equal to Infinity in Js, if two infinity values compares itself
//then always it returns false or it cant be compared.

console.log(typeof typeof NAN); //typeof typeof of anything Always be a string
console.log("Hello wrold vesrion :0.1");

console.log(null === null); //true

console.log("abc" + "def"); //abcdef
console.log(1 + 1); //2
console.log("abc" + 1); //abc1 //Note:--implicit conversion of your number into a string
//whenever there is a number and a string and there is a +
//you are going to convert the number into a string, order doesnt matter

//Important

console.log(1 + "abc"); //1abc
console.log(1 + 2 + "abc"); //3abc
console.log("abc" + 1 + 2); //abc12

console.log(+"1" + 1); //2

console.log("1" - 1); // 0
//string would be converted to an integer
console.log(-"1" + 1); // 0
//This is explicitly converted to a number and retain the sign ,-1+1

//implicit conversion of your number into a string
//whenever there is a number and a string and there is a +
//you are going to convert the number into a string, order doesnt matter

//Note:-
//Numeric conversion happens fr all -,+,*,/ Like console.log("1"-1) // 0
//string conversion happens when + is used and one of the operand is string

//== :- double equal to converting string to a number like given below:-
//ex 1:-
var a = "2";
var b = 2;
console.log(a == b); //returning true in console
console.log(b == a); //true //checks the values only
//this is going to convert string into number into both the cases.
//(2==2)

//ex 2:-
console.log(1 == true); //  true //becoz double equal to convert everything a number and then checks,so 'boolean true' will be converted into a number

console.log("steps"); //steps

console.log(1 + "1" + 1); //111
//There are three conversions 1.string conversion 2.numeric 3.boolean conversion

//Three Rules:-
//+ in front,unary operator do a explicit converstion
//+ in between ,act as an concatination or as an addition
//1 as your string or 1 as your number is going to convert to string
//+ in front of string always converts into a number

console.log(1 + "1" + 1); //111 coz-"11"  implicit convertion then    +1=111

//************************************************************ */
//Array in JS

var a = [1, 2, 3, 4];
var b = [1, 2, "b", true]; // heterogeneous

var c = []; //or
var d = new Array(0); //0 elements
//Constructor function:- its a way to create a class in js

//class :- every class is going to be a function in js

console.log(b); //[ 1, 2, 'b', true ] ,heterogeneous
b[99] = 1;
console.log(b); //[ 1, 2, 'b', true, <95 empty items>, 1 ]
//we give null values but js give undefined for all the empty values.

console.log(b.length); //100

console.log("......");

var a = [1, 2, 3];
var b = a;
//Both are pointing to the same memory location

//a=[] //But now a has pointed to new memory location
//thats why a is empty and b is not empty.

console.log(a); //[]
console.log(b); //[ 1, 2, 3 ]

//To make both empty
var a1 = [1, 2, 3];
var b1 = a1;

a1.length = 0;
console.log(a1); //[]
console.log(b1); //[]

//********************************* */
var d = [1, 2, 3];
d = []; // d would be garbage collected now and removed from the memory.will be no longer referenced

//**************/
var dog = ["a", "b", "c"];
dog.length = 1;
console.log(dog); // [ 'a' ] ,//memory will automatically resized

//End
