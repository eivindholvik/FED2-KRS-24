import { domBtnSubmit } from "./utils/domElements.mjs";

domBtnSubmit?.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target, "hei");
});

document.createElement("button").addEventListener("click", (e) => {
  console.log("hei");
});

let name: string = "Eivind";

let age: number;

age = 5;

let isPowerfull: boolean = false;

// isPowerfull = "no";

console.log(name);

// Functions

function sum(x: number, y: number): number | string {
  const sum: number = x + y;
  if (sum < 0) {
    return "you are poor, maaan";
  }
  return sum;
}

const mySum: string | number = sum(5, -6);

// class Person {
//   private name1: string;
//   public age: number;

//   constructor(name: string, age: number) {
//     this.name1 = name;
//     this.age = age;
//   }

//   set name(newName: string) {
//     this.name1 = newName;
//   }
// }

const touple: [number, string] = [2, "something"];

const myNumbers: number[] = [];

// myNumbers.push("Eivind");

const myNumbers1: Array<number> = [];

const myNumbers3: [string, ...number[]] = ["Hans", 5, 3, 5, 6, 2];

console.log(myNumbers3);

// Creating type

type Person = {
  name: string;
  age: number;
  adress: string;
  isPowerfull: boolean;
  children: Array<Person>;
  // children2: Person[];
};

const teacher: Person = {
  name: "Eivind Holvik",
  age: 30,
  adress: "Eivind Jarls Gate",
  isPowerfull: false,
  children: [],
};

type Colors = "green" | "red" | "blue";

let myColor: Colors = "green";

myColor = "red";

// myColor = "repurpld";

console.log(myColor);

type HTMLEleOrNull = HTMLElement | null;

const myDomObj: HTMLEleOrNull = document.querySelector(".someClass");
