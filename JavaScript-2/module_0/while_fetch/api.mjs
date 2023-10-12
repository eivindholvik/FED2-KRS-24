const base = "https://api.noroff.dev/api/v1/social";

export default async function api(endpoint, jwt, offset, limit = 100) {
  let data = [];
  try {
    const response = await fetch(`${base}${endpoint}?limit=${limit}&offset=${offset * limit}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`
      }
    });
    data = await response.json();
  } catch (e) {
    console.log(e);
  } finally {
    return data;
  }
}