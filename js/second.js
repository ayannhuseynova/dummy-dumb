alert(
  ")Write a JavaScript program to create a new string adding `New!` in front of a given string. If the given string begins with `New!` already then return the original string."
);
let typeIn = prompt("type in ur word in here");
checkNew(typeIn);

function checkNew(word) {
  if (word.substring(0, 4) === "New!" || word == null || word == undefined) {
    alert(word);
  } else {
    alert(`New! ${word}`);
  }
}
