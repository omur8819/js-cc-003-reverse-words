const firstSentence = document.querySelector("#firstSentence");
const button_1 = document.querySelector("#button_1");
const reverseSentence = document.querySelector("#reverseSentence");


button_1.addEventListener("click", reverseWord);
firstSentence.addEventListener("keyup", enter);

function reverseWord() {
  if(firstSentence.value === "") {
    alert("lütfen cümle giriniz : ")
  }
  const reverse = firstSentence.value.split(" ").reverse().join(" ");
  reverseSentence.innerHTML = reverse;
};

function enter(event) {
  if(event.keyCode === 13){
    reverseWord();
  }
};