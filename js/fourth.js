alert(
  "Given two values, write a JavaScript program to find out which one is nearest to 100"
);

let a = Number(prompt("first number"));
let b = Number(prompt("second number"));

Nearest(a, b);

function Nearest(num1, num2) {
  if (100 - num1 < 100 - num2) {
    alert(`${num1} is closer to 100, than ${num2}`);
  } else {
    alert(`${num2} is closer to 100, than ${num1}`);
  }
}
