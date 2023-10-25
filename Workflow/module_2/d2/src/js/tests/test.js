import { testSum } from "./math.test.js";

function doAllTests() {
  try {
    testSum(2, 2, 4);
    testSum(3, 3, 5);
    testLogin();
  } catch (e) {
    console.log(e);
    throw new Error("At least one test failed")
  }
}

doAllTests();