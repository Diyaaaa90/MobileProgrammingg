function calculate(operator){
    let num1=Number(document.getElementById("num1").value);
      let num2=Number(document.getElementById("num2").value);

      let result;

      if(operator === "+"){
        result = num1 + num2;
      }
      else if(operator === "-"){
        result = num1 - num2;
      }
      else if(operator === "*"){
        result = num1 * num2;
      }
      else if(operator === "/"){
        if (num2 === 0) {
            result = "Cannot divide by zero";
        } else {
            result = num1 / num2;
        }
    }
    else{
        result = "Invalid operator";
    }

    // Display result
    document.getElementById("result").innerHTML = "Result: " + result;
}

