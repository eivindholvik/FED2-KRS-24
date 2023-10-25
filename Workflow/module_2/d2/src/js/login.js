import { API_BASE } from "./env_vars";

export async function login({ email, pw }) {

  try {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": email,
        "password": pw
      })
    });
    const data = await response.json();
    if (data.response !== "ok") {
      throw new Error("was not ok");
    }
  } catch (e) {
    console.log(e);
  }
}