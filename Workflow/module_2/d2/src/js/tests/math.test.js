import sum from "../math.js";

export function testSum(x, y, expected) {
  const res = sum(x, y);
  if (expected === res) {
    console.log("everything is fine");
  } else {
    throw new Error(`Expect the sum of ${x} and ${y} to be ${expected}, not ${res}`);
  }
}