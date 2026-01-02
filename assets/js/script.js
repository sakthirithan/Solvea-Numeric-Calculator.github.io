const display =  document.getElementById("display");
const buttons = document.querySelectorAll("input[type='button']");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.value === "="){
            display.value = eval(display.value);
        }else if (btn.value === "AC"){
            display.value = '';
        }else if(btn.value === "DEL"){
            display.value = display.value.slice(0,-1);
        }else{
            display.value += btn.value;
        }
    });
});


// Keyboard Enabled Calculator
document.addEventListener("keydown", (e) => {
    if ("0123456789+-*/.".includes(e.key)) {
        display.value += e.key;
    }
    if (e.key === "Enter") {
        display.value = eval(display.value);
    }
    if (e.key === "Backspace"){
        display.value = display.value.toString().slice(0,-1);
    }
    if (e.key === "Delete") {
        display.value = '';
    }
});