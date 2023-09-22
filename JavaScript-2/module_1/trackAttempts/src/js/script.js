const container = document.querySelector('.container');
console.log("in script");


async function fetchPosts() {
  try {
    const data = await fetch("http://localhost:3000/posts");
    const posts = await data.json();

    return posts;
  } catch (e) {
    console.log(e);
    // container.innerHTML = "<p>Your call failed, please try refreshing, or waiting for the porbilem to be resolved at server-side.</p>";
    return e;
  }

}

(async () => {
  const posts = await fetchPosts();
  // const filteredArr = posts.filter(({ author }) => author === "eivind");

  // const mappedArr = posts.map((ele) => {
  //   const temp = { ...ele };
  //   temp.timestamp = Date.now();
  //   temp.author = `${ele.authorF} ${ele.authorL}`;
  //   return temp;
  // })

  // console.log(posts);

  // mappedArr.forEach(({ id, title, author, timestamp }) => {
  //   container.innerHTML += `<div key=${id}><h2>${title}</h2><p>${author}</p><p>rendered at ${timestamp}<p/></div>`;
  // });

  const postHTML = posts.map(({ id, title, authorF, authorL }) => {
    return `<div key=${id}><h2>${title}</h2><p>${authorF} ${authorL}</p><p>rendered at ${Date.now()}<p/></div>`
  });

  console.log(postHTML);

  postHTML.forEach((html) => {
    container.innerHTML += html;
  });

})();


// const myArr = [1, 4, 3, 6, 5];
// const myCallback = (ele) => {
//   console.log(ele);
// }

// function forEach1(arr, cbFn) {
//   for (let i = 0; i < arr.length; i++) {

//     cbFn(arr[i]);
//   }
// }

// forEach1(myArr, myCallback);