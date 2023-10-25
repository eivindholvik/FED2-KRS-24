import { login } from "../login";
import dotenv from "dotenv";
dotenv.config();

export async function testLogin() {
  try {
    const data = await login({ pw: process.env.PW, email: process.env.EMAIL });
    if (data.accessToken) {
      console.log("login success");
      return true;
    }
    throw new Error("The login failed");
    return false;
  } catch (e) {
    throw new Error("The login failed");
  }
}