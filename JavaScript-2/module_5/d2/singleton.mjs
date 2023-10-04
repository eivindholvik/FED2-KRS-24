const Singleton = (function () {
  // This is our main instance data
  let instance;

  // This creates a new instance
  function createInstance() {
    const object = { message: 'Hello world' };
    return object;
  }

  return {
    // We return our instance, but we first check if it
    // doesn't exist. If it doesn't exist, we create a new
    // one before we return
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1);
// Logs: {message: 'Hello world'}
console.log(instance2);
// Logs: {message: 'Hello world'}
console.log('Is the same object:', instance1 === instance2);
// Logs: Is the same object: true

instance1.name = "Eivind";

console.log(Singleton.getInstance());
