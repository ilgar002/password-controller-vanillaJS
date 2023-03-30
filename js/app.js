import { checkPassword, generatePassword } from "./password.js";
const passwordInput = document.querySelector("#passwordInput");
const passwordForm = document.querySelector("#passwordForm");
const checkBtn = passwordForm.querySelector("button");
const messages = document.querySelector(".messages");
const score = document.querySelector(".score");
const result = document.querySelector(".result");
const generateBtn = document.querySelector(".generate");
const copyBtn = document.querySelector(".copy");
const offer = document.querySelector(".offer");

//generate password
const generate = () => {
  const password = generatePassword();
  generateBtn.innerHTML = `${password}`;
  offer.classList.add("clicked");
  offer.classList.remove("copied");
};
//copy
const copy = () => {
  const password = generateBtn.innerText;
  navigator.clipboard.writeText(password);
  offer.classList.add("copied");
};
//check
const check = (e) => {
  e.preventDefault();
  if (passwordInput.value.trim().length > 0) {
    messages.innerHTML = "";
    const finalResult = checkPassword(passwordInput.value);
    score.innerText = `Score: ${finalResult.power}`;
    result.innerText = finalResult.result;
    for (let i = 0; i < finalResult.messages.length; i++) {
      const message = document.createElement("li");
      message.classList.add("message");
      const status = document.createElement("div");
      status.classList.add("status", `${finalResult.messages[i].status}`);
      const text = document.createElement("span");
      text.classList.add("text");
      text.innerText = finalResult.messages[i].message;
      message.append(status, text);
      messages.append(message);
    }
  }
};
//input
const checkInput = (e) => {
  console.log();
  if (e.target.value.trim().length) {
    checkBtn.classList.add("abled");
    checkBtn.classList.remove("disabled");
  } else {
    checkBtn.classList.remove("abled");
    checkBtn.classList.add("disabled");
  }
};
generateBtn.addEventListener("click", generate);
copyBtn.addEventListener("click", copy);
passwordForm.addEventListener("submit", (e) => check(e));
passwordInput.addEventListener("input", (e) => checkInput(e));
