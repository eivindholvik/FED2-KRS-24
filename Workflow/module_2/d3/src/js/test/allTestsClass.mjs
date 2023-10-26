class AllTests {
  tests = [];
  totalLen = 0;
  totalErr = 0;
  totalAcc = 0;
  constructor() {

  }
  subscribe(TestClass) {
    this.tests.push(TestClass);
  }

  run() {
    this.tests.forEach(TestClass => {
      const { accepted, errors } = TestClass.runTests();
      this.totalLen += accepted + errors;
      this.totalAcc += accepted;
      this.totalErr += errors;
    });
    console.log("--- RESULT ---");
    if (this.totalErr !== 0) {
      console.log(`${this.totalErr} / ${this.totalLen} tests failed`);
      throw new Error("NOT ACCEPTED!!!!")
    } else {
      console.log(`All tests passed: ${this.totalAcc} / ${this.totalLen}`);
    }
  }
}

export default AllTests;