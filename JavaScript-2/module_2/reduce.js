// const numbers = [1, 3, 6, 7, 5, 4];

// const initialValue = 0;

// const cbFn = (acc, number, index, originalArray) => {
//   return acc + number;
// }

// const sum = numbers.reduce(cbFn);

// console.log(sum);

// const shoppingCart = [
//   {
//     product: "Milk",
//     price: 23,
//     quantity: 3
//   },
//   {
//     product: "Juice",
//     price: 43,
//     quantity: 1
//   },
//   {
//     product: "Bread",
//     price: 34,
//     quantity: 1
//   }
// ];

// const totalShoppingCart = shoppingCart.reduce((acc, { price, quantity }) => {
//   return { totalPrice: acc.totalPrice + (price * quantity), totalQuantity: acc.totalQuantity + quantity };
// }, { totalPrice: 0, totalQuantity: 0 })

// // console.log(totalShoppingCart);

// // loop example for reduce
// const totalShop = { totalPrice: 0, totalQuantity: 0 };
// for (let i = 0; i < shoppingCart.length; i++) {
//   const { price, quantity } = shoppingCart[i];
//   totalShop.totalPrice += (price * quantity);
//   totalShop.totalQuantity += quantity;
// }
// console.log(totalShop);


// const winners = {
//   hawks: 60,
//   dolphins: 50
// }

const myObj = {
  id: 4
}

const name1 = "Hawks";
const score = 40;

myObj[name1.toLowerCase()] = score;


console.log(myObj);