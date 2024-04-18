
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="wrapper" class="bg-grey-900 p-3 rounded grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr_1fr] gap-2 justify-center items-center ml-auto mr-auto w-3/12 min-h-fit">
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

buttons.forEach((value: string) => {
  const styling: Array<string> = ["w-[100%]", "h-[100%]", "rounded", "flex", "justify-center", "items-center", "bg-orange-400", "p-3", "m-auto"]
  let buttonElement: HTMLDivElement = document.createElement("div");

  if (value === '0') buttonElement.classList.add("col-span-2");

  styling.forEach((style) => {
    buttonElement.classList.add(style);
  });

  buttonElement.id = value;
  buttonElement.innerHTML = `<p>${value}</p>`;
  calc_wrapper.appendChild(buttonElement);
});

