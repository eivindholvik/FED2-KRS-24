import dotenv from "dotenv";
dotenv.config();

export function eurToUsd(eurAmount) {
  return eurAmount / process.env.USD_TO_EUR_EXCHANGE_RATE;
}

export function usdToEur(usdAmount) {
  return usdAmount * process.env.USD_TO_EUR_EXCHANGE_RATE;
}