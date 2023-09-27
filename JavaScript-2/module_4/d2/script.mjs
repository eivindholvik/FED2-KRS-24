import { prefix } from "./env.mjs";

async function getAllPosts() {
  try {
    const response = await fetch("https://crud-examples.onrender.com/");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  } finally {

  }

};

async function postUser(name, content) {
  try {
    const response = await fetch("https://crud-examples.onrender.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${prefix} ${name}`,
        content: content
      })
    })
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

async function populateList(list, htmlTarget) {
  console.log(list);
  htmlTarget.innerHTML = "";
  const unList = document.createElement("ul");
  htmlTarget.append(unList);
  for (const item in list) {
    const { name, content } = list[item];
    unList.innerHTML += `<li>${name}: ${content}</li>`;
  }
}

(async () => {
  const myData = await getAllPosts();
  await populateList(myData, document.querySelector('.list'));
})();

postUser("Eivind", "This content should only be displayed for Marius")

// const myState = {
//   count: 0
// }



// function addNumbers(x, y) {
//   console.log(x + y);
//   myState.count++;
// }

// addNumbers(4, 5);

// function runAnotherFunction(fn, x) {
//   fn(5, x);
// }

// runAnotherFunction(addNumbers, 2);

// console.log(myState.count);

// runAnotherFunction((x, y) => {
//   console.log(x * y);
//   return x * y;
// }, 7)

// runAnotherFunction(function (x, y) {
//   console.log(x * y);
//   return x * y;
// }, 3)

// function hei(x, y) {
//   console.log(x * y);
//   return x * y;
// }

// const myPromise = new Promise((resolve, reject) => {
//   // We are hardcoding a value for this example
//   let shouldResolve;
//   if (Math.random() > 0.5) {
//     shouldResolve = true;
//   } else {
//     shouldResolve = false;
//   }
//   if (shouldResolve) {
//     // If the code inside of the promise was able to do what
//     // it needed to do, then it will call this 'resolve' callback
//     resolve('Promise resolved successfully.');
//   } else {
//     // If the code inside of the promise failed to do what
//     // it needed to do then it will call this 'reject' callback
//     reject('Promise has failed');
//   }
// });


// (async () => {
//   try {
//     const data = await myPromise;
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log("We are done!");
//   }
// })();
