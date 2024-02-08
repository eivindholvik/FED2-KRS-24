export function handleCodes(e) {
  if (e.message === "Token required") {
    return 400;
  }
  if (e.message === "Token expired") {
    return 401;
  }
  if (e.message === "Invalid token") {
    return 401;
  }
  if (e.message === "Invalid username or password") {
    return 401;
  }
  if (e.message === "Not found") {
    return 404;
  }
  return 500;
}