export {};

// Type Annotations

// String

let a: string = "Hello";

// Number

let b: number;

b = 12;

// Boolean

let c: boolean = true;

// Null

let d: null;

d = null;

// Undefined

let e: undefined = undefined;

// Any -- special type

let g: any;

g = 12;
g = "salam";
g = true;

// Array

const myArr: number[] = [12, 14, 16];
const arr1: string[] = ["12", "php", "java"];
const arr: any[] = [12, true, "php"];
const arr2: Array<string> = ["12", "php", "java"];

// Tuple

let tuple: [number, number, boolean, null, string];

tuple = [2, 4, true, null, "hello"];

// Type assertations

let userName;

userName = "Narmin";

let myWordLength = (userName as string).length;
let myWordLength1 = (<string>userName).length;

// Object type

let user: {
  name: string;
  age: number;
  surname: string;
  nickName?: string;
};

user = {
  name: "Narmin",
  age: 20,
  surname: "Mammadobva",
};

// Union type

let country: {
  name: string;
  capital: string;
  precident: string | null;
};

country = {
  name: "Turkey",
  capital: "Ankara",
  precident: "Erdogan",
};

// Custom type

type User = {
  name: string;
  age: number;
  role: "admin" | "guest";
};

let me: User;

me = {
  name: "Detail",
  age: 12,
  role: "guest",
};

// Functions

const myFunc = (a: number, b?: number) => {
  console.log(a);
};

myFunc(4);

// Void - return olunmuyan funksiya

const form = document.querySelector<HTMLFormElement>("form");

const myInput = document.querySelector("input") as HTMLInputElement;
const btn = document.querySelector("button") as HTMLButtonElement;

const submitFunction = (e: any) => {
  e.preventDefault();
  console.log("Hello");

  if (myInput.value === "") {
    alert("Please fill all the places");
  } else {
    alert(`Hello ${myInput.value}`);
  }
};

btn.addEventListener("click", submitFunction);
