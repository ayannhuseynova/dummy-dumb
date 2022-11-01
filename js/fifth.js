alert(
  "Write a JavaScript program to find the number of even digits in a an array of integers"
);

let count = Number(prompt("how many numbers you want to enter?"));

const newArr = new Array();
const evenArr = new Array();

ConvertingToEven(newArr, evenArr, count);

alert(
  `your array was {${newArr}} with the length of ${newArr.length}. the new array is (${evenArr}), its' length is ${evenArr.length}`
);

function ConvertingToEven(array1, array2, count) {
  for (let index = 0; index < count; index++) {
    let newElement = Number(prompt("enter the number"));
    array1.push(newElement);
  }
  array1.forEach((element) => {
    if (element % 2 == 0 && element != 0) {
      array2.push(element);
    }
  });
}
