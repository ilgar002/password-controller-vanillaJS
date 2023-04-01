//upper case
function checkUpperCase(password) {
  if (/[A-Z]/.test(password)) {
    let numOfUp = password.length - password.replace(/[A-Z]/g, "").length;
    return {
      status: true,
      message: "Password contains uppercase - (e.g., A,B,C)",
      power: (password.length - numOfUp) * 2,
    };
  } else {
    return {
      status: false,
      message: "Password doesn't contain uppercase - (e.g., A,B,C)",
      power: 0,
    };
  }
}
//lower case
function checkLowerCase(password) {
  if (/[a-z]/.test(password)) {
    let numOfLow = password.length - password.replace(/[a-z]/g, "").length;
    return {
      status: true,
      message: "Password contains lowercase - (e.g., a,b,c)",
      power: (password.length - numOfLow) * 2,
    };
  } else {
    return {
      status: false,
      message: "Password doesn't contain lowercase - (e.g., a,b,c) ",
      power: 0,
    };
  }
}
//length
function checkLength(password) {
  if (password.length >= 8) {
    return {
      status: true,
      message: "Pasword's length is okay (min:8)",
      power: password.length * 4,
    };
  } else {
    return {
      status: false,
      message: "Pasword's length is not enough (min:8)",
      power: password.length * 4,
    };
  }
}
//number
function checkNumber(password) {
  if (/\d/.test(password)) {
    let numOfNum = password.length - password.replace(/\d/g, "").length;
    return {
      status: true,
      message: "Password contains number - (e.g., 1,5,9)",
      power: numOfNum * 4,
    };
  } else {
    return {
      status: false,
      message: "Password doesn't contain number - (e.g., 1,5,9)",
      power: 0,
    };
  }
}
//symbole
function checkSymbole(password) {
  if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
    let numOfSym =
      password.length -
      password.replace(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g, "").length;
    return {
      status: true,
      message: "Password contains symbole - (e.g., @,#,$)",
      power: numOfSym * 6,
    };
  } else {
    return {
      status: false,
      message: "Password doesn't contain symbole - (e.g., @,#,$)",
      power: 0,
    };
  }
}
//number & symboles
function numSymb(password) {
  password = password.slice(1, password.length - 1);
  let num =
    password.length -
    password.replace(/\d/g, "").length +
    (password.length -
      password.replace(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g, "").length);
  if (
    /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password) &&
    /\d/.test(password)
  ) {
    return {
      status: true,
      message:
        "Password contains symbole and number with the exception of the first and last characters - (e.g., *_1@#__*)",
      power: num * 2,
    };
  } else if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
    return {
      status: "half",
      message:
        "Password contains symbole but need number with the exception of the first and last characters - (e.g., *_1@#__*)",
      power: num * 2,
    };
  } else if (/\d/.test(password)) {
    return {
      status: "half",
      message:
        "Password contains number but need symbole with the exception of the first and last characters - (e.g., *_1@#__*)",
      power: num * 2,
    };
  } else {
    return {
      status: false,
      message:
        "Password doesn't contain symbole or number with the exception of the first and last characters - (e.g., *_1@#__*)",
      power: 0,
    };
  }
}
//minimum requirements
function minReq(password) {
  let resNum = 0;
  password.length >= 8 && resNum++;
  let num = 0;
  /[A-Z]/.test(password) && num++;
  /[a-z]/.test(password) && num++;
  /\d/.test(password) && num++;
  /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password) && num++;
  num >= 3 && (resNum = resNum + num);
  if (resNum > 0) {
    return {
      status: true,
      message: "Password matchs with minimum requirements",
      power: resNum * 2,
    };
  } else {
    return {
      status: false,
      message: "Password doesn't match with minimum requirements",
      power: 0,
    };
  }
}
//continually numbers
function continuallyNums(password) {
  let n = 0;
  for (let i = 0; i < password.length - 1; i++) {
    if (/\d/.test(password[i]) && /\d/.test(password[i + 1])) {
      n++;
    }
  }
  if (n == 0) {
    return {
      status: true,
      message: "Password doesn't contain continually number - (e.g., '926')",
      power: 0,
    };
  } else {
    return {
      status: false,
      message: "Password contains continually number - (e.g., '926')",
      power: -(n * 2),
    };
  }
}
//continually lowercase
function contLowCase(password) {
  let n = 0;
  for (let i = 0; i < password.length - 1; i++) {
    if (/[a-z]/.test(password[i]) && /[a-z]/.test(password[i + 1])) {
      n++;
    }
  }
  if (n == 0) {
    return {
      status: true,
      message: "Password doesn't contain continually lowercase - (e.g., 'afh')",
      power: 0,
    };
  } else {
    return {
      status: false,
      message: "Password contains continually lowercase - (e.g., 'afh')",
      power: -(n * 2),
    };
  }
}
//continually uppercase
function contUppCase(password) {
  let n = 0;
  for (let i = 0; i < password.length - 1; i++) {
    if (/[A-Z]/.test(password[i]) && /[A-Z]/.test(password[i + 1])) {
      n++;
    }
  }
  if (n == 0) {
    return {
      status: true,
      message: "Password doesn't contain continually uppercase - (e.g., 'AFH')",
      power: 0,
    };
  } else {
    return {
      status: false,
      message: "Password contains continually uppercase - (e.g., 'AFH')",
      power: -(n * 2),
    };
  }
}
//semantic numbers
function semanticNums(password) {
  let n = 0;
  for (let i = 0; i < password.length - 2; i++) {
    if (
      (Number(password[i]) + 1 == Number(password[i + 1]) &&
        Number(password[i + 1]) + 1 == Number(password[i + 2])) ||
      (Number(password[i]) - 1 == Number(password[i + 1]) &&
        Number(password[i + 1]) - 1 == Number(password[i + 2]))
    ) {
      n++;
    }
  }
  if (n == 0) {
    return {
      status: true,
      message:
        "Password doesn't contain semantic numbers(min:3) - (e.g., '123','321')",
      power: 0,
    };
  } else {
    return {
      status: false,
      message:
        "Password contains semantic numbers(min:3) - (e.g., '123','321')",
      power: -(n * 3),
    };
  }
}
//semantic letters
function semanticLetters(password) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let n = 0;
  for (let i = 0; i < password.length - 2; i++) {
    if (
      (alphabet.indexOf(password[i]) + 1 == alphabet.indexOf(password[i + 1]) &&
        alphabet.indexOf(password[i + 1]) + 1 ==
          alphabet.indexOf(password[i + 2])) ||
      (alphabet.indexOf(password[i]) - 1 == alphabet.indexOf(password[i + 1]) &&
        alphabet.indexOf(password[i + 1]) - 1 ==
          alphabet.indexOf(password[i + 2]))
    ) {
      n++;
    }
  }
  if (n == 0) {
    return {
      status: true,
      message:
        "Password doesn't contain semantic letters(min:3) - (e.g., 'abc','cba')",
      power: 0,
    };
  } else {
    return {
      status: false,
      message:
        "Password contains semantic letters(min:3) - (e.g., 'abc','cba')",
      power: -(n * 3),
    };
  }
}
//semantic symbols
function semanticSymbols(password) {
  const symbols = ")!@#$%^&*()".split("");
  let n = 0;
  for (let i = 0; i < password.length - 2; i++) {
    if (
      (symbols.indexOf(password[i]) + 1 == symbols.indexOf(password[i + 1]) &&
        symbols.indexOf(password[i + 1]) + 1 ==
          symbols.indexOf(password[i + 2])) ||
      (symbols.indexOf(password[i]) - 1 == symbols.indexOf(password[i + 1]) &&
        symbols.indexOf(password[i + 1]) - 1 ==
          symbols.indexOf(password[i + 2]))
    ) {
      n++;
    }
  }
  if (n == 0) {
    return {
      status: true,
      message:
        "Password doesn't contain semantic symbols(min:3) - (e.g., '!@#','#@!')",
      power: 0,
    };
  } else {
    return {
      status: false,
      message:
        "Password contains semantic symbols(min:3) - (e.g., '!@#$','#@!')",
      power: -(n * 3),
    };
  }
}
//repeated symbols
function repeatedSymbols(password) {
  let n = 0;
  for (let i = 0; i < password.length; i++) {
    let count = 0;
    for (let j = 0; j < password.length; j++) {
      if (password[i] == password[j]) {
        count++;
      }
    }
    if (count > 1) {
      n++;
    }
  }
  if (n == 0) {
    return {
      status: true,
      message: "Password doesn't contain repeated symbols - (e.g., 'ss')",
      power: 0,
    };
  } else {
    return {
      status: false,
      message: "Password contains repeated symbols - (e.g., 'ss')",
      power: -n,
    };
  }
}
//only letters
function onlyLetters(password) {
  let status = false;
  for (let i = 0; i < password.length; i++) {
    if (!/[a-z]/.test(password[i].toLowerCase())) {
      status = true;
    }
  }
  if (status) {
    return {
      status: true,
      message: "Password doesn't contains only letter - (e.g., 'hello')",
      power: 0,
    };
  } else {
    return {
      status: false,
      message: "Password contains only letter - (e.g., 'hello')",
      power: -password.length,
    };
  }
}
//only numbers
function onlyNumbers(password) {
  let status = false;
  for (let i = 0; i < password.length; i++) {
    if (!/\d/.test(password[i])) {
      status = true;
    }
  }
  if (status) {
    return {
      status: true,
      message: "Password doesn't contains only number - (e.g., '298')",
      power: 0,
    };
  } else {
    return {
      status: false,
      message: "Password contains only letter - (e.g., '298')",
      power: -password.length,
    };
  }
}
//weakness comments
function detectWeakness(password) {
  let allFunc = [
    checkUpperCase(password),
    checkLowerCase(password),
    checkLength(password),
    checkNumber(password),
    checkSymbole(password),
    numSymb(password),
    minReq(password),
    continuallyNums(password),
    contLowCase(password),
    contUppCase(password),
    semanticNums(password),
    semanticLetters(password),
    semanticSymbols(password),
    repeatedSymbols(password),
    onlyLetters(password),
    onlyNumbers(password),
  ];
  let messages = [];
  for (let i = 0; i < allFunc.length; i++) {
    messages.push({
      status: allFunc[i].status,
      message: allFunc[i].message,
    });
  }
  return messages;
}
//result power
function calcResultPower(password) {
  let resultPower =
    checkUpperCase(password).power +
    checkLowerCase(password).power +
    checkLength(password).power +
    checkNumber(password).power +
    checkSymbole(password).power +
    numSymb(password).power +
    minReq(password).power +
    continuallyNums(password).power +
    contLowCase(password).power +
    contUppCase(password).power +
    semanticNums(password).power +
    semanticSymbols(password).power +
    repeatedSymbols(password).power +
    onlyLetters(password).power +
    onlyNumbers(password).power +
    semanticLetters(password).power;
  if (resultPower > 100) {
    resultPower = 100;
  }
  return resultPower;
}
//check password
export function checkPassword(password) {
  let resultPower = calcResultPower(password);
  let powerComment;
  if (resultPower <= 19) {
    powerComment = "Very weak";
  } else if (resultPower <= 39) {
    powerComment = "Weak";
  } else if (resultPower <= 59) {
    powerComment = "Good";
  } else if (resultPower <= 79) {
    powerComment = "Strong";
  } else if (resultPower <= 100) {
    powerComment = "Very Strong";
  }
  let allMessages = detectWeakness(password);
  return {
    power: resultPower,
    result: powerComment,
    messages: allMessages,
  };
}
//shuffle array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
//generate password
export function generatePassword() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const numbers = "1234567890".split("");
  const symbols = "!@#$%^&*()_+?-=[]{}".split("");

  let password = [];
  for (let i = 0; i < 3; i++) {
    password.push(alphabet[parseInt(Math.random() * alphabet.length)]);
    password.push(numbers[parseInt(Math.random() * numbers.length)]);
    password.push(symbols[parseInt(Math.random() * symbols.length)]);
    password.push(
      alphabet[parseInt(Math.random() * alphabet.length)].toUpperCase()
    );
  }
  for (let i = 0; i < 2; i++) {}
  const arr = [password[0], password[password.length - 1]];
  password = shuffle(password.slice(1, password.length - 1));
  password.push(arr[1]);
  password.unshift(arr[0]);
  return password.join("");
}
