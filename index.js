const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let buttonOne = document.getElementById("copyOne-el")
let buttonTwo = document.getElementById("copyTwo-el")



function generate() { 
    let generateString = ' ';
    for (let i = 0; i < 16; i++){
    let randomCharacterIndex = Math.floor(Math.random()*characters.length);
    generateString += characters[randomCharacterIndex];
    }
    
    buttonOne.textContent = generateString

let generateString2 = ' ';
    for (let i = 0; i < 16; i++){
    let randomCharacterIndex2 = Math.floor(Math.random()*characters.length);
    generateString2 += characters[randomCharacterIndex2];
    }
    
    buttonTwo.textContent = generateString2
}


buttonOne.addEventListener("click", function() {
    let buttonText = buttonOne.textContent;
    navigator.clipboard.writeText(buttonText)
    .then(() => {
            console.log('Text copied to clipboard:', buttonText);
            alert('Text copied to clipboard: ' + buttonText);
        })
});

buttonTwo.addEventListener("click", function() {
    let buttonText = buttonOne.textContent;
    navigator.clipboard.writeText(buttonText)                    
    .then(() => {
            console.log('Text copied to clipboard:', buttonText);
            alert('Text copied to clipboard: ' + buttonText);
        })
});