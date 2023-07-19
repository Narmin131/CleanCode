"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type Annotations
// String
var a = "Hello";
// Number
var b;
b = 12;
// Boolean
var c = true;
// Null
var d;
d = null;
// Undefined
var e = undefined;
// Any -- special type
var g;
g = 12;
g = "salam";
g = true;
// Array
var myArr = [12, 14, 16];
var arr1 = ["12", "php", "java"];
var arr = [12, true, "php"];
var arr2 = ["12", "php", "java"];
// Tuple
var tuple;
tuple = [2, 4, true, null, "hello"];
// Type assertations
var userName;
userName = "Narmin";
var myWordLength = userName.length;
var myWordLength1 = userName.length;
// Object type
var user;
user = {
    name: "Narmin",
    age: 20,
    surname: "Mammadobva",
};
// Union type
var country;
country = {
    name: "Turkey",
    capital: "Ankara",
    precident: "Erdogan",
};
var me;
me = {
    name: "Detail",
    age: 12,
    role: "guest",
};
// Functions
var myFunc = function (a, b) {
    console.log(a);
};
myFunc(4);
// Void - return olunmuyan funksiya
var form = document.querySelector("form");
var myInput = document.querySelector("input");
var btn = document.querySelector("button");
var submitFunction = function (e) {
    e.preventDefault();
    console.log("Hello");
    if (myInput.value === "") {
        alert("Please fill all the places");
    }
    else {
        alert("Hello ".concat(myInput.value));
    }
};
btn.addEventListener("click", submitFunction);
