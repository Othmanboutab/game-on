const form = document.getElementById("form");
const confirmationMessage = document.getElementById("confirmation-message");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkForm();
});

function checkForm() {
  let valide = false;

  let isFormValid =
    checkFirstName() &&
    checkLastName() &&
    checkEmail() &&
    checkBirthdate() &&
    checkLocation() &&
    checkConditions();

  if (isFormValid) {
    confirmationMessage.classList.add("show");
    return valide;
  } else {
    confirmationMessage.classList.add("hide");
  }
}

function checkFirstName() {
  const firstName = document.getElementById("firstName");

  if (firstName.value.trim() === "") {
    let message = "Merci de remplir ce champs";
    setError(firstName, message);
  } else if (firstName.value.length < 2) {
    let message = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    setError(firstName, message);
    return false;
  } else {
    setSucces(firstName);
    return true;
  }
}

function checkLastName() {
  const lastName = document.getElementById("name");

  if (lastName.value.trim() === "") {
    let message = "Merci de remplir ce champs";
    setError(lastName, message);
  } else if (lastName.value.length < 2) {
    let message = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    setError(lastName, message);
    return false;
  } else {
    setSucces(lastName);
    return true;
  }
}

function checkEmail() {
  const email = document.getElementById("email");
  const emailValue = email.value.trim();
  if (emailValue == "") {
    let message = "Merci de remplir ce champs";
    setError(email, message);
    return false;
  } else if (!emailValid(emailValue)) {
    let message = "Votre e-mail n'est pas valide";
    setError(email, message);
    return false;
  } else {
    setSucces(email);
    return true;
  }
}

function emailValid(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function checkBirthdate() {
  const birthdate = document.getElementById("birthdate");
  if (birthdate.value.trim() === "") {
    let message = "Vous devez entrer votre date de naissance.";
    setError(birthdate, message);
    return false;
  } else {
    setSucces(birthdate);
    return true;
  }
}

function checkLocation() {
  const location = document.getElementsByName("location");
  const formData = document.getElementById("checkbox");
  const error = formData.querySelector(".errorMessage");
  let formValid = false;
  let i = 0;
  while (!formValid && i < location.length) {
    if (location[i].checked) formValid = true;
    i++;
  }

  if (!formValid) {
    error.innerText = "Vous devez choisir une option.";
  } else {
    error.innerText = "";
    return formValid;
  }
}

function checkConditions() {
  const inputConditions = document.getElementById("checkbox1");
  const inputConditionsValue = inputConditions.checked;

  if (!inputConditionsValue) {
    let message =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
    setError(inputConditions, message);
    return false;
  } else if (inputConditionsValue) {
    setSucces(inputConditions);
    return true;
  }
}

function setError(elem, message) {
  const formData = elem.parentElement;
  const error = formData.querySelector(".errorMessage");

  error.innerText = message;

  elem.classList.remove("success");
  elem.classList.add("error");
}

function setSucces(elem) {
  const formData = elem.parentElement;
  const error = formData.querySelector(".errorMessage");
  error.textContent = "";

  elem.classList.remove("error");
  elem.classList.add("success");
}
