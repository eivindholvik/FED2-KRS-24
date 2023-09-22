
// const shoppingCart = new Set();

// // const arr2 = new Array();
// // arr2.push(1);
// // console.log(arr2);

const items = [
  {
    name: "carrots",
    id: 1,
    price: 4
  },
  {
    name: "tomatos",
    id: 2,
    price: 7
  }
];

// shoppingCart.add(1);
// shoppingCart.add(2);

// shoppingCart.delete(1);

// if (shoppingCart.has(1)) {
//   console.log("you are going to buy carrots");
// }

// console.log(shoppingCart);

const sCart = new Map([[1, 4], [2, 7]]);

sCart.set(1, 4);
sCart.set(2, 1);

console.log(sCart);

function decreaseAmount(id) {
  if (!sCart.has(id)) return;
  const value = sCart.get(id);
  if (value === 1) {
    sCart.delete(id);
  } else {
    sCart.set(id, value - 1);
  }
}

console.log(sCart);
decreaseAmount(1);
console.log(sCart);
decreaseAmount(1);
console.log(sCart);
decreaseAmount(1);
console.log(sCart);
decreaseAmount(1);
console.log(sCart);
decreaseAmount(1);
console.log(sCart);

