//lots of vulnerabilities here.
// need procedure to catch all possible form of input from user
//this code needs to be rewritten if you want to show it to the world.

function operate(operator, num1, num2) {
    //Handle the floating point arithmetic
    let decimalDigit = 0;
    let temp;
    let tempArray = [num1, num2]

    for (let i = 0; i<2; i++) {
      console.log(tempArray[i])
        temp = tempArray[i].split(".");
        if (temp[1]) {
          if (temp[1].length > decimalDigit) {
            decimalDigit = temp[1].length
          }
        }
    }
    num1 *= (10**decimalDigit)
    num2 *= (10**decimalDigit)


    const operatorList = [
      {name: "+",
      formula: (num1+num2)/(10**(2*decimalDigit))},

      {name: "-",
      formula: (num1-num2)/(10**(2*decimalDigit))},

      {name: "*",
      formula: (num1*num2)/(10**(2*decimalDigit))},

      {name: "/",
      formula: (num1/num2)/(10**(2*decimalDigit))},
    ]

    for (let i = 0; i<4; i++) {
      if (operator === operatorList[i].name) {
        return (operatorList[i].formula).toString()
      }
    }
}
function numClicked(num) {


  /*after an operation and equal were clicked, clean the stored value because
  it is new term.
  */
  if (newTerm) {
    storedValue = "";
    newTerm = false;
  }
  //store the value as string to be parsed by operator and equal
  storedValue += num;

  //display current expression on calculator
  divDisplayTop.textContent= num1Var + operatorVar + num2Var;
  divDisplayBottom.textContent = storedValue;
}
function decimalClicked() {
  /*after an operation and equal were clicked, clean the stored value because
  it is new term.
  */
  if (newTerm) {
    storedValue = "";
    newTerm = false;
  }

  //if the stored value already has decimal point, then do nothing
  if (storedValue.includes(".")) {

  } else {
    //if decimal is clicked without number, then zeros is in the ones place
    if (storedValue === "") {
      storedValue = "0."
    } else {
      //store the value as string to be parsed by operator and equal
      storedValue += ".";
    }
    //display current expression on calculator
    divDisplayTop.textContent= num1Var + operatorVar + num2Var;
    divDisplayBottom.textContent = storedValue;
  }

}
function operatorClicked(operator) {
  //This operation needs to be simplified

  /*if num2Var has not been inputed into storedValue, change the operator or
  do nothing if num1Var doesnt exist.  If storedValue has been inputed,
  then proceed.
  */
  if (storedValue === "") {
    if (num1Var === "") {

    } else {
      operatorVar = operator;
      divDisplayTop.textContent= num1Var + operatorVar + num2Var;  
    }
  } else {
    /*if user has provided both number, then calculate them first
    example :
    "addition" is clicked after the expression 5x6.
    The result is 30 + .....(waiting for another input)
    */
    if (num1Var !== "") {
      equalClicked();
    }

    num1Var = storedValue;
    operatorVar = operator;
    divDisplayTop.textContent= num1Var + operatorVar + num2Var;

    //prepare for next calculation
    storedValue = ""
    newTerm = true

  }


}
function equalClicked() {
  //only run if all necessary input exist
  if (num1Var !== "" && operatorVar !== "" && storedValue !== "") {
    num2Var = storedValue;
    divDisplayTop.textContent= num1Var + operatorVar + num2Var +"=";

    resultVar = operate(operatorVar, num1Var, num2Var);
    divDisplayBottom.textContent = resultVar;

    //prepare for next calculation
    newTerm = true;
    storedValue = resultVar;
    num1Var = "";
    num2Var = "";
    operatorVar = "";
    resultVar = "";

  }
}
function delClicked() {
  //DEL deletes the right most digit of storedValue.
  //Display it on calculator.
  //Top display of calculator is not changed.
  if (storedValue.length <=1) {
    storedValue = "";
    divDisplayBottom.textContent = "";
  } else {
    storedValue = storedValue.slice(0,-1)
    divDisplayBottom.textContent = storedValue;
  }
}
function clearClicked() {
  //Clear the plate and return the state into the initial state
  storedValue = "";
  num1Var = "";
  num2Var = "";
  operatorVar = "";
  resultVar = "";
  newTerm = true;
  //clear the display
  divDisplayTop.textContent= "";
  divDisplayBottom.textContent = "";
}

//initialize the variable
let storedValue = "";
let num1Var = "";
let num2Var = "";
let operatorVar = "";
let resultVar = "";
let newTerm = true;
const divDisplayTop = document.querySelector("#display-input")
const divDisplayBottom = document.querySelector("#display-result")

//capture the number pressed, display it to #display-input and store in variable storedValue
const numButtons = document.querySelectorAll(".num-btns")
numButtons.forEach(btn=>btn.addEventListener("click", (e)=>{
  numClicked(e.target.textContent)
  }
))



//capture the operator pressed, display it to #display-input
//store storedValue into num1Var
//store operator into operatorVar
const operatorButtons = document.querySelectorAll(".operator-btns")
operatorButtons.forEach(btn=>btn.addEventListener("click", (e)=>{
  operatorClicked(e.target.textContent)
  }
))
const decimalButton = document.querySelector("#btn-decimal")
decimalButton.addEventListener("click", decimalClicked)

/*when equal is pressed, assign storedValue to num2
call the operate function
assign it #display-result
assign it resultVar*/
const equalButton = document.querySelector("#btn-equal")
equalButton.addEventListener("click", equalClicked)

//Event listener for del and CLEAR
const delButton = document.querySelector("#btn-del")
const clearButton = document.querySelector("#btn-clear")
delButton.addEventListener("click", delClicked)
clearButton.addEventListener("click", clearClicked)

//handle keyboard press
document.addEventListener("keydown", (e)=>{
  console.log(e)
  if ("0123456789".includes(e.key)) {
  numClicked(e.key)
} else if (".".includes(e.key)) {
  decimalClicked()
} else if ("+-*/".includes(e.key)) {
  operatorClicked(e.key)
} else if ("=Enter".includes(e.key)) {
  equalClicked()
} else if ("Backspace.Delete".includes(e.key)){
  delClicked()
}


  }
)
