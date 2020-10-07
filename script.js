

const input = document.querySelector("#text_input");
const button = document.querySelector("#button_1");

button.addEventListener("click", reverseWord);

function reverseWord(str) {
    let text = str.split(' ');
    console.log(text);
    }



    document.querySelector("#reversed_text").innerText = text;
};