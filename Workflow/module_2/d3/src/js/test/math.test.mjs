import { add, subtract, multiply, divide } from "../math.mjs";
import TestClass from "./testClass.mjs"

const mathTest = new TestClass("math");

mathTest.addCase(add, [1, 2], 3);
mathTest.addCase(add, [2, -2], 0);
mathTest.addCase(subtract, [2, 2], 0);
mathTest.addCase(subtract, [12, 2], 10);
mathTest.addCase(multiply, [2, 2], 4);
mathTest.addCase(multiply, [2, 0], 0);
mathTest.addCase(divide, [2, 0], Error);

export default mathTest;
