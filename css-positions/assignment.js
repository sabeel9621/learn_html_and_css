// let display = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');

// let buttonArray = Array.from(buttons);
// let string = '';
// buttonArray.forEach(btn=> {
//     // console.log(btn)

//     btn.addEventListener('click', function (event) {
//         if (event.target.innerHTML == 'DEL') {
//             string = string.substring(0, string.length - 1);
//             display.value = string;
//         }
//         else if (event.target.innerHTML == 'AC') {
//             string = '';
//             display.value=string
//         }
//         else if (event.target.innerHTML == '=') {
//             string = evel(string);
//             display.value = string;
//         }
//         else {

//             string += event.target.innerHTML;
//             display.value = string;
//         }
//         // console.log(event.target.innerHTML)
//     })
// })




const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('.calculator button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        if (button.classList.contains('ac')) {
            clearInput();
        } else if (button.classList.contains('del')) {
            deleteLastCharacter();
        } else if (button.classList.contains('equalbtn')) {
            calculateResult();
        } else {
            appendToInput(buttonValue);
        }
    });
});

function appendToInput (value) {
    if (inputBox.value === '0') {
        inputBox.value = value;
    } else {
        inputBox.value += value;
    }
}

function calculateResult () {
    try {
        inputBox.value = eval(inputBox.value);
    } catch {
        inputBox.value = 'Error';
    }
}

function clearInput () {
    inputBox.value = '0';
}

function deleteLastCharacter () {
    inputBox.value = inputBox.value.slice(0, -1) || '0';
}
