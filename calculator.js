// standard calculator 

let number = "";
let display = document.getElementById('display');
document.addEventListener('DOMContentLoaded', (event) => {
    let buttons = document.querySelectorAll('.button');

    Array.from(buttons).forEach((button) => {
        button.addEventListener("click", (element) => {
            let buttonText = element.target.innerHTML;

            if (buttonText === "AC") {
                number = "";
                display.value = number;
            }

            else if (buttonText === "←") {
                number = number.slice(0, -1);
                display.value = number;
            }

            else if (buttonText === "=") {
                try {
                    let result = eval(number).toString();
                    updatehistory(number + " = " + result);
                    number = result;
                    display.value = number;
                }

                catch (error) {
                    display.value = "Error";
                    number = "";
                    resettinghistory();
                }
            }

            else if (buttonText === "x²") {
                let result = (parseFloat(number) ** 2).toString();
                updatehistory(number + "² = " + result);
                display.value = result;
                number = result;
            }

            else if (buttonText === "±") {
                number = (parseFloat(number) * -1).toString();
                display.value = number;
            }

            else if (buttonText === "²√x") {
                let result = Math.sqrt(parseFloat(number)).toString();
                display.value = result;
                number = result;
                updatehistory("√" + number + " = " + result);
                if (display.value === "Error") {
                    resettinghistory();
                }
            }

            else if (buttonText === "%") {
                let result = (parseFloat(number) / 100).toString();
                display.value = result;
                updatehistory(number + "% = " + result);
                number = result;
            }

            else {
                number += buttonText;
                display.value = number;
            }
        });
    });

    // Menu bar buttons
    let menuBar = document.querySelector('.click-event');
    let programmer = document.querySelector('.programmer');
    let scientific = document.querySelector('.scientific');
    let calculatorType = document.querySelectorAll('.menu-button');


    calculatorType.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target === programmer) {
                menuBar.innerHTML = "Programmer";
            }

            else if (e.target === scientific) {
                menuBar.innerHTML = "Scientific";
                trigonometricRatio();
            }

            else {
                menuBar.innerHTML = "Standard";
                resetStandardButtons();
            }
        });
    });

    // Keyboard function
    let keyArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "-", "+", "*", "/", "Enter", "Backspace", ".", "%", "(", ")", "c"];

    document.body.addEventListener('keydown', (event) => {
        if (keyArray.includes(event.key)) {
            if (event.key === "Enter") {
                try {
                    let result = eval(display.value).toString();
                    updatehistory(display.value + " = " + result);
                    number = result;
                    display.value = number;
                }

                catch (e) {
                    display.value = "Error";
                    number = "";
                }
            }

            else if (event.key === "c") {
                number = "";
                display.value = number;
            }

            else if (event.key === "Backspace") {
                event.preventDefault();
                number = number.slice(0, -1);
                display.value = number;
            }

            else if (event.key === "%") {
                let result = (parseFloat(number) / 100).toString();
                display.value = result;
                updatehistory(number + "% = " + result);
                number = result;
            }

            else {
                number += event.key;
                display.value = number;
            }
        }
    });

    // Updating history
    function updatehistory(entry) {
        let updateBox = document.getElementById('updatehistory');
        updateBox.value += entry + '\n';
        updateBox.scrollTop = updateBox.scrollHeight;
    }

    // Resetting history
    function resettinghistory() {
        let updateBox = document.getElementById('updatehistory');
        updateBox.value = '';
    }

    // Trigonometric function buttons
    function trigonometricRatio() {
        let appendButtons = document.querySelector('.number-box');
        appendButtons.className = "trigonometryStructure";
        appendButtons.innerHTML = '';

        let secondphase = document.createElement('button');
        secondphase.className = "trigonometry2ndButton";
        secondphase.innerHTML = "2nd";
        appendButtons.appendChild(secondphase);

        let sin = document.createElement('button');
        sin.className = 'trigonometryButton';
        sin.innerHTML = 'sin';
        appendButtons.appendChild(sin);

        let sinh = document.createElement('button');
        sinh.className = "trigonometryButton";
        sinh.innerHTML = "sinh";
        appendButtons.appendChild(sinh);

        let cos = document.createElement('button');
        cos.className = 'trigonometryButton';
        cos.innerHTML = 'cos';
        appendButtons.appendChild(cos);

        let cosh = document.createElement("button");
        cosh.className = "trigonometryButton";
        cosh.innerHTML = "cosh";
        appendButtons.appendChild(cosh);

        let tan = document.createElement('button');
        tan.className = "trigonometryButton";
        tan.innerHTML = "tan";
        appendButtons.appendChild(tan);

        let tanh = document.createElement('button');
        tanh.className = "trigonometryButton";
        tanh.innerHTML = "tanh";
        appendButtons.appendChild(tanh);

        let modulus = document.createElement('button');
        modulus.className = "trigonometryButton";
        modulus.innerHTML = "|x|";
        appendButtons.appendChild(modulus);

        let log = document.createElement('button');
        log.className = "trigonometryButton";
        log.innerHTML = "log";
        appendButtons.appendChild(log);

        let factorial = document.createElement('button');
        factorial.className = "trigonometryButton";
        factorial.innerHTML = "n!";
        appendButtons.appendChild(factorial);

        let e = document.createElement('button');
        e.className = "trigonometryButton";
        e.innerHTML = "e";
        appendButtons.appendChild(e);

        let pi = document.createElement('button');
        pi.className = "trigonometryButton";
        pi.innerHTML = "\u03C0";
        appendButtons.appendChild(pi);

        let rad = document.createElement('button');
        rad.className = "trigonometryButton";
        rad.innerHTML = "rad";
        appendButtons.appendChild(rad);

        let numberArray = ["AC", "←","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "+", "-", "/", "*", "=", "(", ")", "x²", "±", "²√x"];
        numberArray.forEach((no) => {
            let button = document.createElement("button");
            button.className = "trigonometryButton";
            button.setAttribute("data-number", no);
            button.innerHTML = no;
            appendButtons.appendChild(button);

            button.addEventListener('click', (e) => {
                let target = e.target.innerHTML;

                if (target === "AC") {
                    display.value = "";
                }

                else if (target === "=") {
                    try {
                        display.value = eval(display.value);
                    updatehistory("√" + number + " = " + result);
                    }

                    catch (error) {
                        display.value = "Error";
                        resettinghistory();
                    }
                }

                else if (target === "←") {
                    display.value = display.value.slice(0, -1);
                }

                else if (target === "x²") {
                    let number = parseFloat(display.value);
                    if (!isNaN(number)) {
                        display.value = Math.pow(number, 2).toString();
                    updatehistory(number + "² = " + result);
                    }

                    else {
                        display.value = "Error";
                        resettinghistory();
                    }
                }

                else if (target === "±") {
                    let number = parseFloat(display.value);
                    if (!isNaN(number)) {
                        display.value = (-number).toString();
                    }

                    else {
                        display.value = "Error";
                        resettinghistory();
                    }
                }

                else if (target === "²√x") {
                    let number = parseFloat(display.value);
                    if (!isNaN(number)) {
                        display.value = Math.sqrt(number).toString();
                    updatehistory("√" + number + " = " + result);
                        number = display.value;
                    }

                    else {
                        display.value = "Error";
                        resettinghistory();
                    }
                }

                else {
                    display.value += target;
                }
            });
        });

        // Add event listeners for trigonometric buttons
        let isSecondPhase = false;
        let isRadianMode = false;

        secondphase.addEventListener('click', () => {
            isSecondPhase = !isSecondPhase;
            secondphase.classList.toggle("active");
            sin.innerHTML = isSecondPhase ? "sin<sup>-1</sup>(x)" : "sin";
            cos.innerHTML = isSecondPhase ? "cos<sup>-1</sup>(x)" : "cos";
            tan.innerHTML = isSecondPhase ? "tan<sup>-1</sup>(x)" : "tan";
            sinh.innerHTML = isSecondPhase ? "sinh<sup>-1</sup>(x)" : "sinh";
            cosh.innerHTML = isSecondPhase ? "cosh<sup>-1</sup>(x)" : "cosh";
            tanh.innerHTML = isSecondPhase ? "tanh<sup>-1</sup>(x)" : "tanh";
            log.innerHTML = isSecondPhase ? "log<sub>y</sub><sup>x</sup>" : "log";
        });

        rad.addEventListener('click', () => {
            isRadianMode = !isRadianMode;
            rad.innerHTML = isRadianMode ? "deg" : "rad";
        });

        sin.addEventListener('click', () => {
            let inputValue = parseFloat(display.value);
            if (!isNaN(inputValue)) {
                let result;
                if (isSecondPhase) {
                    result = Math.asin(isRadianMode ? inputValue : inputValue * (Math.PI / 180));
                    if (!isRadianMode) {
                        result = result * (180 / Math.PI);
                    }
                    result = result.toString();
                    updatehistory("sin<sup>-1</sup>(" + inputValue + ") = " + result);
                }

                else {
                    result = Math.sin(isRadianMode ? inputValue : inputValue * (Math.PI / 180)).toString();
                    updatehistory("sin(" + inputValue + ") = " + result);
                }
                display.value = result;
            }

            else {
                display.value = "Error";
            }
        });

        cos.addEventListener('click', () => {
            let inputValue = parseFloat(display.value);
            if (!isNaN(inputValue)) {
                let result;
                if (isSecondPhase) {
                    result = Math.acos(isRadianMode ? inputValue : inputValue * (Math.PI / 180));
                    if (!isRadianMode) {
                        result = result * (180 / Math.PI);
                    }
                    result = result.toString();
                    updatehistory("cos<sup>-1</sup>(" + inputValue + ") = " + result);
                }

                else {
                    result = Math.cos(isRadianMode ? inputValue : inputValue * (Math.PI / 180)).toString();
                    updatehistory("cos(" + inputValue + ") = " + result);
                }
                display.value = result;
            }

            else {
                display.value = "Error";
            }
        });

        tan.addEventListener('click', () => {
            let inputValue = parseFloat(display.value);
            if (!isNaN(inputValue)) {
                let result;
                if (isSecondPhase) {
                    result = Math.atan(isRadianMode ? inputValue : inputValue * (Math.PI / 180));
                    if (!isRadianMode) {
                        result = result * (180 / Math.PI);
                    }
                    result = result.toString();
                    updatehistory("tan<sup>-1</sup>(" + inputValue + ") = " + result);
                }

                else {
                    result = Math.tan(isRadianMode ? inputValue : inputValue * (Math.PI / 180)).toString();
                    updatehistory("tan(" + inputValue + ") = " + result);
                }
                display.value = result;
            }

            else {
                display.value = "Error";
            }
        });

        sinh.addEventListener('click', () => {
            let inputValue = parseFloat(display.value);
            if (!isNaN(inputValue)) {
                let result;
                if (isSecondPhase) {
                    result = Math.asinh(inputValue).toString();
                    updatehistory("sinh<sup>-1</sup>(" + inputValue + ") = " + result);
                }

                else {
                    result = Math.sinh(inputValue).toString();
                    updatehistory("sinh(" + inputValue + ") = " + result);
                }
                display.value = result;
            }

            else {
                display.value = "Error";
            }
        });

        cosh.addEventListener('click', () => {
            let inputValue = parseFloat(display.value);
            if (!isNaN(inputValue)) {
                let result;
                if (isSecondPhase) {
                    result = Math.acosh(inputValue).toString();
                    updatehistory("cosh<sup>-1</sup>(" + inputValue + ") = " + result);
                }

                else {
                    result = Math.cosh(inputValue).toString();
                    updatehistory("cosh(" + inputValue + ") = " + result);
                }
                display.value = result;
            }

            else {
                display.value = "Error";
            }
        });

        tanh.addEventListener('click', () => {
            let inputValue = parseFloat(display.value);
            if (!isNaN(inputValue)) {
                let result;
                if (isSecondPhase) {
                    result = Math.atanh(inputValue).toString();
                    updatehistory("tanh<sup>-1</sup>(" + inputValue + ") = " + result);
                }

                else {
                    result = Math.tanh(inputValue).toString();
                    updatehistory("tanh(" + inputValue + ") = " + result);
                }
                display.value = result;
            }

            else {
                display.value = "Error";
            }
        });

        log.addEventListener('click', () => {
            let number = parseFloat(display.value);
            if (!isNaN(number)) {
                let result;
                if (isSecondPhase) {
                    let base = parseFloat(prompt("Enter the base y:"));
                    if (!isNaN(base) && base > 0 && base !== 1) {
                        result = (Math.log(number) / Math.log(base)).toString();
                        updatehistory("log<sub>" + base + "</sub>(" + number + ") = " + result);
                    }

                    else {
                        result = "Error: Invalid base";
                    }
                }

                else {
                    result = Math.log10(number).toString();
                    updatehistory("log(" + number + ") = " + result);
                }
                display.value = result;
            }

            else {
                display.value = "Error";
            }
        });


        modulus.addEventListener('click', () => {
            let number = parseFloat(display.value);
            if (!isNaN(number)) {
                let result = Math.abs(number).toString();
                updatehistory("|" + number + "| = " + result);
                display.value = result;
            }

            else {
                display.value = "Error";
            }
        });


        factorial.addEventListener('click', () => {
            let number = parseInt(display.value);
            if (!isNaN(number) && number >= 0) {
                let result = factorialize(number).toString();
                updatehistory(number + "! = " + result);
                display.value = result;
            }

            else {
                display.value = "Error";
            }
        });

        e.addEventListener('click', () => {
            display.value += Math.E.toString();
        });

        pi.addEventListener('click', () => {
            display.value += Math.PI.toString();
        });
    }


    function factorialize(num) {
        if (num < 0) {
            return -1;
        }

        else if (num === 0) {
            return 1;
        }

        else {
            return (num * factorialize(num - 1));
        }
    }


    // Reset to standard buttons
    function resetStandardButtons() {
        let appendButtons = document.querySelector('.number-box');
        appendButtons.innerHTML = '';

        // Recreate standard calculator buttons
        let standardButtons = ['AC', '←', "(", ")", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "%", "0", ".", "+", "x²", "±", "²√x", "="];
        standardButtons.forEach((text) => {
            let button = document.createElement('button');
            button.className = 'button';
            button.innerHTML = text;
            appendButtons.appendChild(button);

            button.addEventListener('click', (element) => {
                let buttonText = element.target.innerHTML;

                if (buttonText === "AC") {
                    number = "";
                    display.value = number;
                }

                else if (buttonText === "←") {
                    number = number.slice(0, -1);
                    display.value = number;
                }

                else if (buttonText === "=") {
                    try {
                        let result = eval(number).toString();
                        updatehistory(number + " = " + result);
                        number = result;
                        display.value = number;
                    }

                    catch (error) {
                        display.value = "Error";
                        number = "";
                        resettinghistory();
                    }
                }

                else if (buttonText === "x²") {
                    let result = (parseFloat(number) ** 2).toString();
                    updatehistory(number + "² = " + result);
                    display.value = result;
                }

                else if (buttonText === "±") {
                    number = (parseFloat(number) * -1).toString();
                    display.value = number;
                }

                else if (buttonText === "²√x") {
                    let result = Math.sqrt(parseFloat(number)).toString();
                    display.value = result;
                    updatehistory("√" + number + " = " + result);
                    if (display.value === "Error") {
                        resettinghistory();
                    }
                }

                else if (buttonText === "%") {
                    let result = (parseFloat(number) / 100).toString();
                    display.value = result;
                    updatehistory(number + "% = " + result);
                    number = result;
                }

                else {
                    number += buttonText;
                    display.value = number;
                }
            });
        });
    }
});