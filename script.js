const firstSentence = document.querySelector("#firstSentence");
const turnerButton = document.querySelector("#turnerButton");
const reverseSentence = document.querySelector("#reverseSentence");
turnerButton.addEventListener("click", reverseWord);
firstSentence.addEventListener("keyup", enter);
function enter(event) {
  if (event.keyCode===13){
    turnerButton.click(reverseWord)
  }
};
function reverseWord() {
  if (firstSentence.value === "") {
    alert("Please enter a sentence");
  }
  const reverse = firstSentence.value.split(" ").reverse().join(" ");
  reverseSentence.innerHTML = reverse;
  firstSentence.focus();
  firstSentence.value = "";
}
