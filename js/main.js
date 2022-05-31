// burger icon effect, toggler menu
const burgerIcon = document.querySelector(".burger-icon");
const navMenu = document.querySelector(".navbar-nav");
const navLinks = document.querySelectorAll(".nav-link");

burgerIcon.addEventListener("click", () => {
  navMenu.classList.toggle("open-menu");
  burgerIcon.classList.toggle("effect");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navMenu.classList.toggle("open-menu");
  });
});

// create sticky navbar
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > navbar.offsetHeight - 40) {
    navbar.classList.add("sticky-nav");
  } else {
    navbar.classList.remove("sticky-nav");
  }
});

// achievement counter effect

let counterTarget = document.querySelectorAll(".counter-numbers");

window.addEventListener("load", () => {
  counterTarget.forEach((ele) => {
    function startCount() {
      let targetCount = +ele.dataset.target;
      let currentValue = +ele.textContent;
      let increment = targetCount / 500;
      if (currentValue < targetCount) {
        ele.textContent = Math.ceil(currentValue + increment);
        setTimeout(startCount, 1);
      } else {
        ele.textContent = targetCount;
      }
    }
    startCount();
  });
});

// validation the form
let submitBtn = document.querySelector(".button-effect");
let firstNameInp = document.querySelector("#first-name-input");
let lastNameInp = document.querySelector("#last-name-input");
let emailInp = document.querySelector("#email-input");
let massageArea = document.querySelector("#massage");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  checkOfValidation();
});

function checkOfValidation() {
  let valueFirstNameInp = firstNameInp.value.trim();
  let valueLastNameInp = lastNameInp.value.trim();
  let valueEmailInp = emailInp.value.trim();
  let valueMassageArea = massageArea.value.trim();

  // check the first name
  if (
    valueFirstNameInp === null ||
    valueFirstNameInp === "" ||
    valueFirstNameInp.length < 3 ||
    valueFirstNameInp.length > 25
  ) {
    setError(
      firstNameInp,
      "Last Name Cannot Be Blank Or Less Than (3) Char Or  Grater Than (25) char"
    );
  } else {
    setSuccess(firstNameInp);
  }

  // check the last name
  if (
    valueLastNameInp === null ||
    valueLastNameInp === "" ||
    valueLastNameInp.length < 3 ||
    valueLastNameInp.length > 25
  ) {
    setError(
      lastNameInp,
      "Last Name Cannot Be Blank Or Less Than (3) Char Or  Grater Than (25) char"
    );
  } else {
    setSuccess(lastNameInp);
  }

  // check the email
  if (valueEmailInp == "") {
    setError(emailInp, "Email Cannot Be Blank");
  } else if (!rgxPatterEmail(valueEmailInp)) {
    setError(
      emailInp,
      "email must be like hello@example.com also can contain any of (., -, _) or number"
    );
  } else {
    setSuccess(emailInp);
  }

  // issue validation
  if (valueMassageArea === "" || valueMassageArea.length < 25) {
    setError(massageArea, "massage cannot blank Or Cannot Be Less Than 25 char");
  } else {
    setSuccess(massageArea);
  }
}

function setError(element, massage) {
  const inputControl = element.parentElement;
  const smallMassage = inputControl.querySelector("small");
  const errorIcon = inputControl.querySelector(".error");
  let correctIcon = inputControl.querySelector(".correct-mark");

  smallMassage.textContent = massage;

  // reset
  inputControl.classList.remove("success");
  correctIcon.classList.remove("text-success");
  correctIcon.style.visibility = "hidden";

  inputControl.classList.add("error");
  errorIcon.classList.add("text-danger");
  smallMassage.style.visibility = "visible";
  errorIcon.style.visibility = "visible";
}

function setSuccess(element) {
  let inputControl = element.parentElement;
  let correctIcon = inputControl.querySelector(".correct-mark");
  const errorIcon = inputControl.querySelector(".error");
  const smallMassage = inputControl.querySelector("small");

  // reset
  inputControl.classList.remove("error");
  errorIcon.classList.remove("text-danger");
  smallMassage.style.visibility = "hidden";
  errorIcon.style.visibility = "hidden";

  inputControl.classList.add("success");
  correctIcon.classList.add("text-success");
  correctIcon.style.visibility = "visible";
}

// email pattern rg
function rgxPatterEmail(emailValue) {
  return /\w+(.|-|_|\d+)?(\w+)?@\w+.\w+/gi.test(emailValue);
}
