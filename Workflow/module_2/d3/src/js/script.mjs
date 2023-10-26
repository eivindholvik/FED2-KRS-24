import dotenv from "dotenv";
dotenv.config();

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function reverse(str) {
  return str.split('').reverse().join('');
}

function usdToEur(usdAmount) {
  return usdAmount * process.env.USD_TO_EUR_EXCHANGE_RATE;
}

function multiply(a, b) {
  return a * b;
}

function eurToUsd(eurAmount) {
  return eurAmount / process.env.USD_TO_EUR_EXCHANGE_RATE;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}