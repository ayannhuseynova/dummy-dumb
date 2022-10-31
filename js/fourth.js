alert(
  "Given two values, write a JavaScript program to find out which one is nearest to 100"
);

let a = prompt("first number");
let b = prompt("second number");

Nearest(a, b);

function Nearest(num1, num2) {
  if (100 - Number(num1) < 100 - Number(num2)) {
    alert(`${num1} is closer to 100, than ${num2}`);
  } else {
    alert(`${num2} is closer to 100, than ${num1}`);
  }
}
