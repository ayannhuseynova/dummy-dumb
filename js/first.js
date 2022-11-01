alert(
  "first task: Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100"
);
let a = Number(prompt("type in first number"));
let b = Number(prompt("type in second number"));

Sum(a, b);

function Sum(num1, num2) {
  if (num1 == 100 || num2 == 100 || num1 + num2 == 100) {
    alert("u did it!! correct");
  } else {
    alert("wrong! refresh the page to try again");
  }
}

alert("salam");