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
      this.totalLen += accepted + this.errors;
      this.totalAcc += accepted;
      this.totalErr += errors;
    });
    if (this.totalErr !== 0) {
      throw new Error("NOT ACCEPTED!!!!")
    }
  }
}

export default AllTests;