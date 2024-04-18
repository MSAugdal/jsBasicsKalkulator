document.querySelector('#app').innerHTML = "\n  <div id=\"wrapper\" class=\"bg-grey-900 p-3 rounded grid grid-cols-4 grid-rows-6 gap-2 justify-center items-center mx-auto my-auto max-h-96\">\n    <div class=\"text-black col-span-4 bg-white rounded px-3 py-4\"><p id=\"display\" class=\"h-5\"></p></div>\n  </div>\n";
var calc_wrapper = document.querySelector('#wrapper');
var display = document.querySelector('#display');
var evalString = [];
var symbols = ['+', '-', '*', '/', '%'];
var buttons = [
    'AC', 'DEL', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', ',', '='
];
var handleCLick = function (e) {
    var target = e.target;
    if (target === null)
        return "Error: target of event \"".concat(e, "\" not found");
    if (symbols.indexOf(target.id) !== -1 && evalString.length === 0)
        return;
    if (symbols.indexOf(target.id) !== -1 && symbols.indexOf(evalString[evalString.length - 1]) !== -1)
        return;
    if (target.id === '=') {
        if (evalString.length === 0)
            return;
        if (symbols.indexOf(evalString[evalString.length - 1]) !== -1)
            return;
        evalString = [eval(evalString.join(''))];
        display.innerHTML = evalString.join('');
    }
    else if (target.id === 'DEL') {
        if (evalString.length === 0)
            return;
        evalString.pop();
        display.innerHTML = evalString.join('');
    }
    else if (target.id === 'AC') {
        evalString = [];
        display.innerHTML = evalString.join('');
    }
    else {
        evalString.push(target.id);
        display.innerHTML = evalString.join('');
    }
};
var styling = ["hover:scale-[1.02]", "hover:bg-orange-300", "w-[100%]", "h-[100%]", "rounded", "flex", "justify-center", "items-center", "bg-orange-400", "p-3", "m-auto"];
buttons.forEach(function (value) {
    var buttonElement = document.createElement("div");
    if (value === '0')
        buttonElement.classList.add("col-span-2");
    styling.forEach(function (style) {
        buttonElement.classList.add(style);
    });
    buttonElement.addEventListener('click', function (e) {
        handleCLick(e);
    });
    buttonElement.id = value;
    buttonElement.innerHTML = "<p class=\"pointer-events-none\">".concat(value, "</p>");
    calc_wrapper.appendChild(buttonElement);
});
