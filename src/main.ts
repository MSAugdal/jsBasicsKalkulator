document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="wrapper" class="bg-grey-900 p-3 rounded grid grid-cols-4 grid-rows-6 gap-2 justify-center items-center mx-auto my-auto max-h-96">
    <div class="text-black col-span-4 bg-white rounded px-3 py-4"><p id="display" class="h-5"></p></div>
  </div>
`
const calc_wrapper: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#wrapper')!

const buttons: Array<string | number> = [
  'AC', 'DEL', '%', '/',
  7, 8, 9, '*',
  4, 5, 6, '-',
  1, 2, 3, '+',
  0, '.', '='
];

let evalArr: string = '';
const display: HTMLInputElement | null = document.querySelector<HTMLInputElement>('#display');

enum Symbols {
  DEL = "DEL",
  AC = "AC",
}


function handleCLick(e: Event): void {
  const target: HTMLDivElement | null = <HTMLDivElement>e.target;
  if (target === null) return console.log(`Error: target of event "${e}" not found`);
  if (target.id == '=') {
    evalArr = eval(evalArr).toString();
    display!.innerHTML = evalArr;
    return
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
  display!.innerHTML = evalArr;
  return
}


const styling: Array<string> = ["hover:scale-[1.02]", "hover:bg-orange-300", "w-[100%]", "h-[100%]", "rounded", "flex", "justify-center", "items-center", "bg-orange-400", "p-3", "m-auto"]
buttons.forEach((value: string | number) => {
  let buttonElement: HTMLDivElement = document.createElement("div");

  if (value == '0') buttonElement.classList.add("col-span-2");

  styling.forEach((style) => {
    buttonElement.classList.add(style);
  });

  buttonElement.addEventListener('click', (e) => {
    handleCLick(e);
  });

  buttonElement.id = <string>value;
  buttonElement.innerHTML = `${value}`;
  calc_wrapper.appendChild(buttonElement);
});

