import { usdToEur, eurToUsd } from "../currency.mjs";
import TestClass from "./testClass.mjs"

const currencyTest = new TestClass("currency");

currencyTest.addCase(usdToEur, 100, 100);
currencyTest.addCase(usdToEur, 1000, 1000);
currencyTest.addCase(eurToUsd, 100, 100);
currencyTest.addCase(eurToUsd, 1000, 1000);

export default currencyTest;
