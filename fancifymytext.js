function BiggerButton() {
   var text = document.getElementById("feedme");
   text.style.fontSize = "24pt";
}

//bold
function FancyShmancyRadio() {
   var text = document.getElementById("feedme");
   text.style.fontWeight = "bold";
   text.style.color= "blue";
   text.style.textDecoration= "underline";
}

//unbold
function BoringBettyRadio() {
   var text = document.getElementById("feedme");
   text.style.fontSize = "initial";
   text.style.fontWeight = "normal";
   text.style.color = "black";
   text.style.textDecoration= "none";
}

//uppercase+ -Moo suffix
function MooButton(){
    let str = document.getElementById("userText");
    str.style.textTransform = "uppercase";
    let part = str.value.split(".");
    str.value = part.join("-Moo");
}
