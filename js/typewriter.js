const textArray = ["Damilare", "Samuel"];

let count = 0;
let index = 0;
let letter = "";
let currentText = "";

(function typwritter(){
    if(count === textArray.length){
        count = 0
    }

    currentText.textArray[count];
    letter= currentText.slice(0, ++index);

    document.querySelector(".type").textContent = letter;

})
