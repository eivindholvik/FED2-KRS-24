import AllTests from "./allTestsClass.mjs";
import mathTest from "./math.test.mjs";
import stringTest from "./strings.test.mjs";
import currencyTest from "./currency.test.mjs";

const allTests = new AllTests();
allTests.subscribe(mathTest);
allTests.subscribe(stringTest);
allTests.subscribe(currencyTest);

allTests.run();