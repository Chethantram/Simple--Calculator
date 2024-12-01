let String = "";
let buttons = document.querySelectorAll('.button');
let input = document.querySelector('input');
Array.from(buttons).forEach((btn) => {

    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            String = eval(String);
            input.value = String;
        }
        else if (e.target.innerHTML == 'AC') {
            input.value = 0;
            String = "";
        }

        else {
            String += e.target.innerHTML;
            input.value = String;
        }
    })
});


