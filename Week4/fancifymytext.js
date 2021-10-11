/* Mary Ballesteros       
  CSC 196W Fall 2021 */

function getBigger(){
  
document.getElementById("textarea").style.fontSize = "24pt";
}

function addMoo(){  
  
    str = document.getElementById("textarea").value.toUpperCase();
    str = str.split(".").join("Moo.")
    document.getElementById("textarea").value = str;
}

function getBold(){
  
    document.getElementById("textarea").style.fontWeight = 'bold';
    document.getElementById("textarea").style.color = "blue";
    document.getElementById("textarea").style.textDecoration = "underline";
}

function getNormal(){
  
    document.getElementById("textarea").style.fontWeight = "normal";
    document.getElementById("textarea").style.color = "black";
    document.getElementById("textarea").style.textDecoration = "none";
}

function clicked(){
  
    selected = document.querySelector('input[type="radio"]:checked').value;
    if(selected == "FancyShmancy"){
        getBold();
    }
    else if(selected == "BoringBetty"){
        getNormal();
    }
}
