const user = {
  userName: "Eivind",
  pw: "asdf1234",
  id: 2,
  age: 30
}

// const userName = user.userName;
// const pw = user.pw;
// const id = user.id;
// const age = user.age;

function logUser(harald) {
  const { userName, age, id, pw } = harald;

  console.log(`The user id is ${id}, the name is ${userName}, age: ${age}. The user does ${pw ? "" : "not "}have a password`);
}

// logUser(user);

// Destructuring Arrays

const prices = [2, 1, 70000, 12000000, 12, 12000, 111];
const items = ["bamse", "sutt", "bil", "gravemaskin", "gulrot", "pc", "burrito"];

// items = ["bamse", "sutt", "bil", "gravemaskin", "gulrot", "pc", "burrito"];

// const x1 = coord[0];
// const y1 = coord[1];

const pricesDup = [...prices];

// console.log(pricesDup.pop());

const [bamse, , bil, ...rest] = prices;

// console.log(rest, pricesDup);

//Map

const myMap = new Map();

const myFunc = () => {
  console.log("hei");
}
// The 'a' key will be set to 1
myMap.set('a', 1);
myMap.set(myFunc, 1);

console.log(myMap);

console.log(myMap.get(myFunc));

const arr = [1, 2, 3, 4, 5];
console.log(arr.length);

console.log(myMap.size);

console.log(Array.from(myMap.keys())[1]);

//set

const mySet = new Set(["a", 2, 3, 4]);

console.log(mySet);

const constructorMap = new Map([["key", 2], ["key2", 3]]);

// ---- extra

const helpItem = {
  id: 14,
  quantity: 1
}

const shoppingCart = {
  owner: "Eivind",
  products: [{
    id: 14,
    quntity: 1
  }, {
    id: 12,
    quntity: 3
  }],
  totalPrice: 23
};

const { products: harald, owner } = shoppingCart;

// console.log(harald, owner);

//--- shoppingCart set

