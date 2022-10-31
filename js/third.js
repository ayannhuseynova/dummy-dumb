alert(
  "Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more, if not, the original string is returned."
);

let typeIn = prompt("type in ur word here");
newWord(typeIn);

function newWord(word) {
  let lastThreeChar = String(word).substring(word.length - 3, word.length);
  //   alert(lastThreeChar);
  if (String(word).length > 3) {
    alert(
      `the word u have entered was: ${word}. the new word is: ${
        lastThreeChar + word + lastThreeChar
      }`
    );
  } else if (word.length <= 3 || word.length != 0) {
    alert(`u entered a word with only 3 letters, the word is ${word}`);
  } else {
    alert("no word was typed in");
  }
}
