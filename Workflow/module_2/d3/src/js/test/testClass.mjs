class TestClass {
  testArray = [];
  testArrayLen = 0;
  errors = [];
  errorsLen = 0;
  accepted = [];
  acceptedLen = 0;

  constructor(name) {
    this.name = name;
  }
  addCase(func, args, expected) {
    const testCase = { args: args, expected: expected };
    const i = this.testArray.findIndex(obj => obj.func === func);
    if (i !== -1) {
      this.testArray[i].testCases.push(testCase);
    } else {
      this.testArray.push({ func: func, testCases: [testCase] });
    }
    this.testArrayLen++;
  }

  addError(func, error) {
    const i = this.errors.findIndex(obj => obj.func === func);
    if (i !== -1) {
      this.errors[i].testCases.push(error);
    } else {
      this.errors.push({ func: func, testCases: [error] });
    }
    this.errorsLen++;
  }

  addAccepts(func, message) {
    const i = this.accepted.findIndex(obj => obj.func === func);
    if (i !== -1) {
      this.accepted[i].testCases.push(message);
    } else {
      this.accepted.push({ func: func, testCases: [message] });
    }
    this.acceptedLen++;
  }

  // updateTestArrayLen(){
  //   const mainLength = this.testArray.reduce((acc, obj) => {
  //     acc += obj.testCases.length;
  //   }, 0);
  // }

  runTests() {
    for (let i = 0; i < this.testArray.length; i++) {
      for (let j = 0; j < this.testArray[i].testCases.length; j++) {
        const { func, testCases } = this.testArray[i];
        let { args, expected } = testCases[j];
        if (!Array.isArray(args)) {
          args = [args];
        }
        if (expected === Error) {
          let temp = false;
          try {
            func(...args);
            temp = true;
            // this.addError(func, `Function with index ${i} did not pass test ${j} with the args of ${args} and result of ${expected}.`);
          } catch (e) {
            this.addAccepts(func, `Function with index ${i} passed test ${j} with the args of ${args} and expected result of Error.`);
          }
          if (temp) {
            this.addError(func, new Error(`Function with index ${i} did not pass test ${j} with the args of ${args} and expected result of Error.`))
          }
        } else {
          try {
            if (func(...args) === expected) {
              this.addAccepts(func, `Function with index ${i} passed test ${j} with the args of ${args} and expected result of ${expected}.`);
            } else {
              throw new Error(`Function with index ${i} did not pass test ${j} with the args of ${args} and expected result of ${expected}.`)
            }
          } catch (e) {
            this.addError(func, e);
          }
        }

      }
    }
    this.displayResults();
    return this.getResult();
  }

  getResult() {
    return {
      name: this.name,
      accepted: this.acceptedLen,
      errors: this.errorsLen
    }
  }

  displayResults() {
    console.log(`--- Test results from ${this.name.toUpperCase()} ---`);
    if (this.accepted.length > 0) {
      console.log(`Passed tests (${this.acceptedLen} / ${this.testArrayLen}):`);
      this.accepted.forEach(obj => {
        obj.testCases.forEach(message => {
          console.log(message);
        })
      })
    }
    if (this.errors.length > 0) {
      console.log(`Failed tests (${this.errorsLen} / ${this.testArrayLen}):`);
      this.errors.forEach(obj => {
        obj.testCases.forEach(error => {
          console.log(error.message);
        })
      })
    }
  }
}

export default TestClass;