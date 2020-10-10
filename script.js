const firstSentence = document.querySelector("#firstSentence");
const button_1 = document.querySelector("#button_1");
const reverseSentence = document.querySelector("#reverseSentence");

button_1.addEventListener("click", reverseWord);
firstSentence.addEventListener("keyup", enter);

function reverseWord() {
  if (firstSentence.value === "") {
    alert("Please enter a sentence");
  }
  const reverse = firstSentence.value.split(" ").reverse().join(" ");
  reverseSentence.innerHTML = reverse;
  firstSentence.focus();
  firstSentence.value = "";
};

function enter(event) {
  if (event.keyCode===13){
    // button_1.click(reverseWord)
    reverseWord();
  }
};


