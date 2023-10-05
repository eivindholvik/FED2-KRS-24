function Subject() {
  // This will contain our objects that are subscribed to
  // our subject
  this.observers = [];
}

Subject.prototype = {
  // This "subscribe" function adds objects to our
  // observer
  subscribe: function (functionToAdd) {
    this.observers.push(functionToAdd);
  },
  // This "unsubscribe" function removes objects to our
  // observer
  unsubscribe: function (functionToRemove) {
    this.observers = this.observers.filter((currentFunction) => currentFunction !== functionToRemove);
  },
  // This "fire" function calls for all of our subscribed
  // objects to act
  fire: function () {
    this.observers.forEach((currentFunction) => {
      currentFunction.call();
    });
  },
};

// This example function will get added to the
// Subject
function ExampleFunction1() {
  console.log('Example function 1');
}

// This example function will also get added to the
// Subject
function ExampleFunction2() {
  console.log('Example function 2');
}

function ExampleFunction3() {
  console.log('Example function 3');
}

// Creating a new subject which we will add our
// example functions to
const subject = new Subject();

// Adding both of our example functions to our subject
subject.subscribe(ExampleFunction1);
subject.subscribe(ExampleFunction2);
subject.subscribe(ExampleFunction3);

// Firing our subject with a single function which
// will then cause both of our subscribed functions to
// react
subject.fire();
// Logs:
// Example function 1
// Example function 2

subject.unsubscribe(ExampleFunction2);

subject.fire();

document.querySelector('button').addEventListener("click", () => {
  console.log("hei");
  subject.fire();
});


let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};
let intersectionCounter = 0;

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      let elem = entry.target;

      if (entry.intersectionRatio >= 0.75) {
        intersectionCounter++;
      }
    }
    console.log(intersectionCounter);
  });
}, options);

observer.observe(document.querySelector('#scrollArea'));
