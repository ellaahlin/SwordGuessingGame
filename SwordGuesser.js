//Några konstanter och ett objekt att utgå från
const eu = "europeiskt";
const jpn = "japanskt";
const fantasy = "fantasi";

function Svärd(typ, bild) {
    this.typ = typ;
    this.bild = bild;
}

//Använden den här listan på svärd för godkänt, för VG ska du hämta den större listan via fetch
let allaSvärd = [
    new Svärd(eu, "img/european/1.jpg"),
    new Svärd(eu, "img/european/2.jpg"),
    new Svärd(jpn, "img/japanese/1.jpg"),
    new Svärd(jpn, "img/japanese/2.jpg"),
    new Svärd(fantasy, "img/fantasy/1.jpg"),
    new Svärd(fantasy, "img/fantasy/2.jpg")
]

//***Låt koden ovanför vara, du får inte ändra på den***

//Skriv din kod nedanför
console.log("Ta gärna bort denna rad innan inlämning!");
const randomSvärd = [];
let menyDiv = document.getElementById("meny");
let svarDiv = document.getElementById("svar");
let startButton = document.getElementsByTagName("button")[3];
let currentSvärd;
let count = 0;
function getRandomSvärd() {
    const randomIndex = Math.floor(Math.random() * allaSvärd.length);
    currentSvärd = allaSvärd[randomIndex];
    document.querySelector('.svärdbild').src=currentSvärd.bild;
    console.log(currentSvärd.typ);
}

startButton.addEventListener("click", () => {
    this.getRandomSvärd();
    menyDiv.style.display = 'none';
    svarDiv.style.visibility = "visible";
});

let image = document.getElementsByClassName("img-responsive center-block svärdbild")[0];
let div = document.getElementsByClassName("knapprad osynlig")[0];

image.addEventListener('mouseover', function showDiv() {
    div.style.visibility = 'visible';
});
image.addEventListener('mouseout', function hideDiv() {
    div.style.visibility = 'hidden';
});
div.addEventListener('mouseover', function showDiv() {
    div.style.visibility = 'visible';
});
div.addEventListener('mouseout', function hideDiv() {
    div.style.visibility = 'hidden';
});
  
let buttons = document.querySelectorAll("button");
var h2Element = document.getElementsByTagName("h2")[1];

for (let i = 0; i < 3; i++) {
    buttons[i].addEventListener("click", function () {
        if (buttons[i].className === currentSvärd.typ) {
            count++;
            h2Element.innerHTML = "Antal rätt i rad: " + count;
            getRandomSvärd();
        } 
        else {
            console.log("not a match");
            count = 0;
            h2Element.innerHTML = "Antal rätt i rad: " + count;
            menyDiv.style.display = 'initial';
            svarDiv.style.display = 'hidden';
        }
    });
}









