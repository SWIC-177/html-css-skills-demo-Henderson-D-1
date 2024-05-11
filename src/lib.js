import validator from "validator";

export const ERRORS = [
  {
    id: "name",
    msg: "Please enter your full name.",
    validate(val) {
      return val.trim().length > 6 && val.includes(" ");
    },
  },
  {
    id: "email",
    msg: "Please enter a valid email address.",
    validate(val) {
      return validator.isEmail(val);
    },
  },
  {
    id: "phone",
    msg: "Please enter a valid phone number.",
    validate(val) {
      return validator.isMobilePhone(val);
    },
  },
  {
    id: "message",
    msg: "Please enter a message between 10 and 100 characters.",
    validate(val) {
      return val.length >= 10 && val.length <= 100;
    },
  },
];

export const hideError = (el) => {
  const errorEl = el.parentNode.querySelector(".error");
  if (errorEl) {
    errorEl.remove();
  }
};

export const renderError = (el, msg) => {
  const elParent = el.parentNode;
  const errorEl = elParent.querySelector(".error");

  if (errorEl) {
    errorEl.textContent = msg; // Update existing error message
  } else {
    const errorElement = document.createElement("p");
    errorElement.className = "error is-error";
    errorElement.textContent = msg;
    elParent.appendChild(errorElement);
  }
};
