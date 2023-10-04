// const user = {
//   _firstName: 'John',
//   _counter: 0,


//   // The 'setter'
//   set firstName(newFirstName) {
//     this._counter++;
//     this._firstName = newFirstName;
//   },

//   get counter() {
//     return this._counter;
//   }
//   // The 'getter'
//   // get firstName() {
//   //   console.log("this is the getter");
//   //   return this._firstName;
//   // },
// };

// console.log(user.counter);
// console.log(user.firstName = "Mikkel");
// console.log(user.counter);
// // console.log(user.counter);

// 1
// (function () {
//   console.log('This function is called as soon as the function is defined');
// })();

// // 2
// console.log('This function is called as soon as the function is defined');

// (async () => {
//   try {
//     const response = await fetch("https://crud-examples.onrender.com/4");
//     const data = await response.json();
//     console.log("1", data);
//   } catch (e) {
//     console.log(e);
//   }
// })();

// (async () => {
//   try {
//     const response = await fetch("https://crud-examples.onrender.com/2");
//     const data = await response.json();
//     console.log("2", data);
//   } catch (e) {
//     console.log(e);
//   }
// })();

// const response = fetch("https://crud-examples.onrender.com/");
// console.log(response);
// setTimeout(() => {
//   console.log(response);
// }, 1000)


async function getById(id) {
  try {
    const response = await fetch("https://crud-examples.onrender.com/" + id);
    const data = await response.json();
    console.log("3", data);
  } catch (e) {
    console.log(e);
  }
}

(async () => {
  for (let i = 4; i >= 1; i--) {
    getById(i);
    // await getById(i);
  }

  let i = 4;
  while (i >= 1) {
    console.log(i);
    i--;
  }
})();

