const modulePatternExample = (function () {
  /* Private variables and methods */

  // Private variable
  let _privateVariable = 'Private';
  let _counter = 0;

  const _privateMethod = function () {
    console.log('Private method');
  };

  /* Public variables and methods */
  // These variables and methods added to the 'return'  so they can be accessed

  // Public variable

  const getPublicVariable = function () {
    return _privateVariable;
  }

  const setPublicVariable = function (newValue) {
    _counter++;
    _privateVariable = newValue;
    return _counter;
  }

  // Public method
  const publicMethod = function () {
    console.log('Public method');
  };


  // Return the public variables and functions so they can be accessed
  return {
    getPublicVariable,
    publicMethod,
    setPublicVariable
  };
})();

modulePatternExample.publicMethod();
console.log(modulePatternExample.setPublicVariable("This is now accessable"));
console.log(modulePatternExample.getPublicVariable());
console.log(modulePatternExample.setPublicVariable("new change"));
console.log(modulePatternExample.getPublicVariable());