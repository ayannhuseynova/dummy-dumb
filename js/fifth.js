alert(
  "Write a JavaScript program to find the number of even digits in a an array of integers"
);
let count = prompt("how many numbers you want to enter?");
const newArr = new Array();
const evenArr = new Array();
for (let index = 0; index < count; index++) {
  let newElement = Number(prompt("enter the number"));
  newArr.push(newElement);
}
alert(`you created an array with elements {${newArr}}`);
newArr.forEach((element) => {
  if (element % 2 == 0 && element != 0) {
    evenArr.push(element);
  }
});
// alert(evenArr, evenArr.length);
alert(
  `your array was {${newArr}} with the length of {${newArr.length
  }}. the new array is (${evenArr}), its' length is ${evenArr.length}`
);
