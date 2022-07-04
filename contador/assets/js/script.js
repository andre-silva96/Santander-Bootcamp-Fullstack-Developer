var current_Number_Wrapper = document.getElementById('currentNumber');
var current_Number = 0;

function increment() {
    current_Number = current_Number + 1;
    current_Number_Wrapper.innerHTML = current_Number;

    if (current_Number > 10) {
        stopIncrement();
    } else {
        current_Number_Wrapper.style.color = 'blue';
    }
}

// Função de parada do increment():
function stopIncrement() {
    current_Number_Wrapper.innerHTML = 10;
    stopclick;
}

function decrement() {
    current_Number = current_Number - 1;
    current_Number_Wrapper.innerHTML = current_Number;

    if(current_Number < -10) {
        stopDecrement();
    } else {
        current_Number_Wrapper.style.color = 'red';
    }
}

// Função de parada do decrement():
function stopDecrement() {
    current_Number_Wrapper.innerHTML = -10;
    stopclick;
}