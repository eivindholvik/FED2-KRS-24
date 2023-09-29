const base = "noroff.dev/api/json/v1";
const dev_base = "localhost:5001/v1";
const isDev = false;

export function getApiBase() {
  if (isDev) {
    return dev_base;
  }
  return base;
}