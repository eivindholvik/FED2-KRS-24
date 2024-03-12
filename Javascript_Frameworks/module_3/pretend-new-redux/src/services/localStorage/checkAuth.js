export function isAuthenticated() {
  return localStorage.getItem("jwt") ? true : false;
}