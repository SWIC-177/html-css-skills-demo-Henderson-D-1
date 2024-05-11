import { ERRORS, hideError, renderError } from "./src/lib";

console.log(ERRORS);

const formEls = [
  ...Array.from(document.querySelectorAll("input")),
  document.querySelector("#message"),
];

const subButton = [document.querySelector("button[type='submit']")];

formEls.forEach((el) => {
  el.addEventListener("blur", (e) => {
    console.log("blur event", e.target.id, e.target.value);
  });
});
