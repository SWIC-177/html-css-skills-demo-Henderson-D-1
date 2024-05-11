const formEls = [
  ...Array.from(document.querySelectorAll("input")),
  document.querySelector("#message"),
];
console.log(formEls);

const subButton = [document.querySelector("button[type='submit']")];

formEls.forEach((el) => {
  el.addEventListener("blur", (e) => {
    console.log("blur event", e.target.id);
  });
});
