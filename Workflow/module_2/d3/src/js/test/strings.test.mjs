import { capitalize, reverse } from "../strings.mjs";
import TestClass from "./testClass.mjs"

const stringTest = new TestClass("string");

stringTest.addCase(capitalize, ["eivind"], "Eivind");
stringTest.addCase(capitalize, ["EiViND"], "Eivind");
stringTest.addCase(reverse, ["ditto"], "ottid");
stringTest.addCase(reverse, ["agnes"], "senga");

export default stringTest;
