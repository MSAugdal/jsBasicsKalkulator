
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="wrapper" class="bg-blue-200 grid grid-cols-4 grid-rows-5 justify-center items-center ml-auto mr-auto max-w-screen-sm min-h-lvh">
  </div>
`
const calc_wrapper: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#wrapper')!
const buttons: Array<string> = [
  'AC', '+/-', '%', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', ',', '='
];

buttons.map((value: string) => {
  console.log(value);
  let buttonElement: HTMLDivElement = document.createElement("div");
  buttonElement.id = value;
  calc_wrapper.appendChild(buttonElement);
});

