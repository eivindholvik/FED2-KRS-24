// import { domInnName } from "../utils/domElements.mjs"


// async function logIn() {
//   body = {
//     name: domInnName
//   }
// }


class Person {
  #id;

  constructor(id) {
    this.#id = id;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }
}

const eivind = new Person(2);

console.log(eivind.id);
eivind.id = 6;
console.log(eivind.id);
