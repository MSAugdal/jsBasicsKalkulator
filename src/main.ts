
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="wrapper" class="bg-grey-900 p-3 rounded grid grid-cols-4 grid-rows-6 gap-2 justify-center items-center mx-auto my-auto max-h-96">
    <div class="text-black col-span-4 bg-white rounded px-3 py-4"><p id="display" class="h-5"></p></div>
  </div>
`
const calc_wrapper: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#wrapper')!
const display: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#display');

let evalString: Array<string> = [];
const symbols: Array<string> = ['+', '-', '*', '/', '%'];
const buttons: Array<string> = [
  'AC', 'DEL', '%', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', ',', '='
];

const handleCLick = (e: Event) => {
  const target: HTMLDivElement | null = <HTMLDivElement>e.target;
  if (target === null) return `Error: target of event "${e}" not found`;

  if (symbols.includes(target.id) && evalString.length === 0) return;
  if (symbols.includes(target.id) && symbols.includes(evalString[evalString.length - 1])) return;

  if (target.id === '=') {
    if (evalString.length === 0) return;
    if (symbols.includes(evalString[evalString.length - 1])) return;
    evalString = [eval(evalString.join(''))];
    display!.innerHTML = evalString.join('');
  }
  else if (target.id === 'DEL') {
    if (evalString.length === 0) return;
    evalString.pop();
    display!.innerHTML = evalString.join('');
  }
  else if (target.id === 'AC') {
    evalString = [];
    display!.innerHTML = evalString.join('');
  }
  else {
    evalString.push(target.id);
    display!.innerHTML = evalString.join('');
  }
};

const styling: Array<string> = ["hover:scale-[1.02]", "hover:bg-orange-300", "w-[100%]", "h-[100%]", "rounded", "flex", "justify-center", "items-center", "bg-orange-400", "p-3", "m-auto"]
buttons.forEach((value: string) => {
  let buttonElement: HTMLDivElement = document.createElement("div");

  if (value === '0') buttonElement.classList.add("col-span-2");

  styling.forEach((style) => {
    buttonElement.classList.add(style);
  });

  buttonElement.addEventListener('click', (e) => {
    handleCLick(e);
  });

  buttonElement.id = value;
  buttonElement.innerHTML = `<p class="pointer-events-none">${value}</p>`;
  calc_wrapper.appendChild(buttonElement);
});

