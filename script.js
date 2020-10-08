const firstClause = document.querySelector("#firstClause");
const turnerButton = document.querySelector("#turnerButton");
const reverseClause = document.querySelector("#reverseClause");
turnerButton.addEventListener("click", reverseWord);
firstClause.addEventListener("keyup", enter);
function enter(event) {
  if (event.keyCode===13){
    turnerButton.click(reverseWord)
  }
};
function reverseWord() {
  if (firstClause.value === "") {
    alert("Please enter a sentence");
  }
  const reverse = firstClause.value.split(" ").reverse().join(" ");
  reverseClause.innerHTML = reverse;
  firstClause.focus();
  firstClause.value = "";
}
