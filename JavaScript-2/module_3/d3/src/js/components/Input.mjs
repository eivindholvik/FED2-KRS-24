export default function Input(iName, placeholder = "enter something to do", type = "text", styles = "") {
  const input = document.createElement("input");
  input.classList.add(`input${styles ? `,${styles}` : ""}`);
  input.setAttribute("type", type);
  input.setAttribute("placeholder", placeholder);
  iName ? input.setAttribute("name", iName) : "";
  return input;
}