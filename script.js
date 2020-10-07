const input = document.querySelector("#text_input");
const button = document.querySelector("#button_1");

button.addEventListener("click", reverseWord);

function myFunction(string) {
    return string.split("").reverse().join("").split(" ").reverse().join(" ")
};

function reverseWord() {
    let text = input.value.split(' ');
    
    for (let i = text.length; i >= 0; i--){
        
        text_2 = text_2.append(text[i]);
    }
    
    console.log(text_2);
    document.querySelector("#reversed_text").innerText = text_2;
};

var reverseWords = function(sentence){

	var words = sentence.split(" ").reverse(); // Split the sentence into an array of words and reverse it
	var string = "";
	for(word in words)
		string += (word > 0 ? " " : "") + words[word]; // Concatenate each word to the output and add spaces where required
	return string;
	
}


function StringUtil() {

    this.reverseWords = function(str) {
        var result = "";
        var wordArray = str.split(" ");
        for(var i = wordArray.length - 1; i >= 0; i--) {
            result += wordArray[i] + " ";
        }
        return result.trim();
    }

}

String.prototype.splitStr = function(delimiter) {
    var stringArray = [];
    var tempStr = "";
    for(var i = 0; i < this.length; i++) {
        if(this.charAt(i) === delimiter) {
            stringArray.push(tempStr);
            tempStr = "";
        } else {
            tempStr += this.charAt(i);
        }
    }
    if(tempStr !== "") {
        stringArray.push(tempStr);
    }
    return stringArray;
}

   