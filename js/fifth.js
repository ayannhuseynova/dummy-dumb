alert(
  "Write a JavaScript program to find the number of even digits in a an array of integers"
);
const integers = [3, 2, 5, 7, 8, 2];
const newArr = new Array();
integers.forEach((element) => {
  if (element % 2 == 0) {
    newArr.push(element);
  }
});
alert(newArr.length);
