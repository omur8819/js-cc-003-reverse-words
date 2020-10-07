const input = document.querySelector("#text_input");
const button = document.querySelector("#button_1");

button.addEventListener("click", reverseWord);

function reverseWord() {
    let text = input.value.split(' ');
    
    for (let i = text.length; i >= 0; i--){
        
        text_2 = text_2.append(text[i]);
    }
    
    console.log(text_2);
    document.querySelector("#reversed_text").innerText = text_2;
};

   