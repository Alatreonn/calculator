const display = document.querySelector(".display");
const allButtons = document.querySelectorAll("button");


//possibly modify it to show up on screen
function calculate(a, o, b){
  if (o === `+`) {
    return add(a, b)
  }
  if (o === `-`) {
    return subtract(a, b)
  }
  if (o === `*`) {
    return multiply(a, b)
  }
  if (o === `/`) {
    return divide(a, b)
  }
  else {
    return null;
  }
}

  function add(a, b) {
    return a + b
  }

  function subtract(a, b) {
    return a - b
  }

  function multiply(a, b) {
    return a * b
  }

  function divide(a, b) {
    return a / b
  }

function inputOnDisplay(value) {
  let oldValue = display.textContent;

  display.textContent = (oldValue === `0`) ? value : oldValue + value;
}

function backspace() {
  let delButton = document.querySelector(".del");
  delButton.addEventListener("click", function() {
    let oldValue = display.textContent;
    let newValue = oldValue.slice(0, -1);
      
    display.textContent = newValue;

    display.textContent = display.textContent === `` ? `0` : display.textContent;
    
  });
}

function ac() {
  let allDelButton = document.querySelector(".allDel");
  allDelButton.addEventListener("click", function() {

    display.textContent = `0`;
  });
}

backspace();
ac();