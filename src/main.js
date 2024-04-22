document.querySelector('#app').innerHTML = "\n  <div id=\"wrapper\" class=\"bg-grey-900 p-3 rounded grid grid-cols-4 grid-rows-6 gap-2 justify-center items-center mx-auto my-auto max-h-96\">\n    <div class=\"text-black col-span-4 bg-white rounded px-3 py-4\"><p id=\"display\" class=\"h-5\"></p></div>\n  </div>\n";
var calc_wrapper = document.querySelector('#wrapper');
var buttons = [
    'AC', 'DEL', '%', '/',
    7, 8, 9, '*',
    4, 5, 6, '-',
    1, 2, 3, '+',
    0, '.', '='
];
var evalArr = '';
var display = document.querySelector('#display');
var Symbols;
(function (Symbols) {
    Symbols["DEL"] = "DEL";
    Symbols["AC"] = "AC";
})(Symbols || (Symbols = {}));
function handleCLick(e) {
    var target = e.target;
    if (target === null)
        return console.log("Error: target of event \"".concat(e, "\" not found"));
    if (target.id == '=') {
        evalArr = eval(evalArr).toString();
        display.innerHTML = evalArr;
        return;
    }
    else if (target.id == Symbols.AC) {
        evalArr = '';
    }
    else if (target.id == Symbols.DEL) {
        evalArr = evalArr.slice(0, evalArr.length - 1);
    }
    else if (isNaN(+target.id)) {
        if (!isNaN(+evalArr[evalArr.length - 1])) {
            console.log("sym");
            evalArr = evalArr.concat(target.id);
        }
    }
    else {
        console.log("num");
        evalArr = evalArr.concat(target.id);
    }
    display.innerHTML = evalArr;
    return;
}
var styling = ["hover:scale-[1.02]", "hover:bg-orange-300", "w-[100%]", "h-[100%]", "rounded", "flex", "justify-center", "items-center", "bg-orange-400", "p-3", "m-auto"];
buttons.forEach(function (value) {
    var buttonElement = document.createElement("div");
    if (value == '0')
        buttonElement.classList.add("col-span-2");
    styling.forEach(function (style) {
        buttonElement.classList.add(style);
    });
    buttonElement.addEventListener('click', function (e) {
        handleCLick(e);
    });
    buttonElement.id = value;
    buttonElement.innerHTML = "".concat(value);
    calc_wrapper.appendChild(buttonElement);
});
