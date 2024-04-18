
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="display"></div>
  <div id="wrapper" class="bg-grey-900 p-3 rounded grid grid-cols-4 grid-rows-6 gap-2 justify-center items-center ml-auto mr-auto w-3/12 min-h-fit">
  </div>
`
const calc_wrapper: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#wrapper')!

const calc_display: HTMLDivElement = document.createElement("div");
const disp_style: Array<string> = ["col-span-4", "bg-white", "rounded", "p-3", "pt-9", "pb-9", "text-xl"];
disp_style.forEach((style) => {
  calc_display.classList.add(style);
});
calc_wrapper.appendChild(calc_display);

const buttons: Array<string> = [
  'AC', '+/-', '%', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', ',', '='
];

const styling: Array<string> = ["hover:scale-[1.02]", "hover:bg-orange-300", "w-[100%]", "h-[100%]", "rounded", "flex", "justify-center", "items-center", "bg-orange-400", "p-3", "m-auto"]
buttons.forEach((value: string) => {
  let buttonElement: HTMLDivElement = document.createElement("div");

  if (value === '0') buttonElement.classList.add("col-span-2");

  styling.forEach((style) => {
    buttonElement.classList.add(style);
  });

  buttonElement.id = value;
  buttonElement.innerHTML = `<p>${value}</p>`;
  calc_wrapper.appendChild(buttonElement);
});

