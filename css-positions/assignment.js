let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let buttonArray = Array.from(buttons);
let string = '';
buttonArray.forEach(btn=> {
    // console.log(btn)

    btn.addEventListener('click', function (event) {
        if (event.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string;
        }
        else if (event.target.innerHTML == 'AC') {
            string = '';
            display.value=string
        }
        else if (event.target.innerHTML == '=') {
            string = evel(string);
            display.value = string;
        }
        else {

            string += event.target.innerHTML;
            display.value = string;
        }
        // console.log(event.target.innerHTML)
    })
})