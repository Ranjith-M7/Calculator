const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["+", "-", "*", "/", "%", "="];
let output = "";

// Define a function to calculate based on the button clicked
const calculate = (btnValue) => {
  if (output === "Error") {
    output = "";
  } else if (btnValue === "=" && specialChars.includes(output.slice(-1))) {
    output = "Error";
  } else if (output !== "" && btnValue === "=") {
    output = eval(output);
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && btnValue === "=") {
      return;
    }
    output += btnValue;
  }

  display.value = output;
};
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    calculate(e.target.dataset.value);
  });
});
