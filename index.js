/* eslint-disable no-unused-vars */
let display = document.getElementById("display");
let num1 = "";
let num2 = "";
let operator = null;
let result;

const addNumber = (num) => {
  if (operator === null) {
    num1 += num.toString();
    display.innerHTML = num1;
  } else {
    num2 += num.toString();
    display.innerHTML = num2;
  }
};

const equal = () => {
  switch (operator) {
    case "add":
      result = parseFloat(num1, 10) + parseFloat(num2, 10);
      display.innerHTML = result;
      num1 = result;
      num2 = "";
      break;
    case "minus":
      result = parseFloat(num1, 10) - parseFloat(num2, 10);
      display.innerHTML = result;
      num1 = result;
      num2 = "";
      break;
    case "multiply":
      result = parseFloat(num1, 10) * parseFloat(num2, 10);
      display.innerHTML = result;
      num1 = result;
      num2 = "";
      break;
    default:
      result = parseFloat(num1, 10) / parseFloat(num2, 10);
      display.innerHTML = result;
      num1 = result;
      num2 = "";
      break;
  }
  //
};

// const add = () => {
//   if (operator === null) {
//     operator = "add";
//   } else {
//     equal();
//     operator = "add";
//   }
// };
// const minus = () => {
//   if (operator === null) {
//     operator = "minus";
//   } else {
//     equal();
//     operator = "minus";
//   }
// };
// const multiply = () => {
//   if (operator === null) {
//     operator = "multiply";
//   } else {
//     equal();
//     operator = "multiply";
//   }
// };

// const divide = () => {
//   if (operator === null) {
//     operator = "divide";
//   } else {
//     equal();
//     operator = "divide";
//   }
// };

const operation = (o) => {
  if (operator === null) {
    operator = o;
  } else {
    equal();
    operator = o;
  }
};
const reset = () => {
  operator = null;
  result = 0;
  num1 = "";
  num2 = "";
  display.innerHTML = result;
};
const del = () => {
  if (display.innerHTML === num1) {
    num1 = num1.slice(0, -1);
    display.innerHTML = num1;
  } else {
    num2 = num2.slice(0, -1);
    display.innerHTML = num2;
  }
};
