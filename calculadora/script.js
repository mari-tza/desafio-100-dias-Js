cont display = document.querySelector("#display"); 
cont buttons = document.querySelectorAll("button"); 

buttons.array.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear") {
            display.innerText = "";
        } else if (item.id == "backspace") {
          let string = display.innerText.toString();
          display.innerText = string.subr
        }
    }
});

let result = document.getElementById('result');
		
function addDigit(digit) {
    result.value += digit;
}

function addOperator(operator) {
    result.value += ' ' + operator + ' ';
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (e) {
        alert('Erro: ' + e.message);
    }
}

function clearResult() {
    result.value = '';
}