// function harfleriBuyut() {
//     let harf_buyut = document.getElementById("title");
//     harf_buyut.style.textTransform = "uppercase";
//     harf_buyut.style.backgroundColor = "red";
//     harf_buyut.style.color = "white";
//  }

let value = "";

function topla() {
    let number_input = document.getElementById("number_input").value;
    
    if (number_input != '') {
        value += number_input + " + ";
        document.getElementById("number_input").value = "";
    }

    number_input = number_input + value;
}

function cikar() {
    let number_input = document.getElementById("number_input").value;
    
    if (number_input != '') {
        value += number_input + " - ";
        document.getElementById("number_input").value = "";
    }

    number_input = number_input + value;
}


function carp() {
    let number_input = document.getElementById("number_input").value;
    
    if (number_input != '') {
        value += number_input + " * ";
        document.getElementById("number_input").value = "";
    }

    number_input = number_input + value;
}

function bol() {
    let number_input = document.getElementById("number_input").value;
    
    if (number_input != '') {
        value += number_input + " / ";
        document.getElementById("number_input").value = "";
    }

    number_input = number_input + value;
}

function sonuc() {
    let number_input = document.getElementById("number_input").value;
    
    if(number_input != " ") {
        value += number_input;
    }

    try {
        let result = eval(value);
        document.getElementById("sonuc").textContent = "Sonuç: " + " " + result;
        value = " ";
        document.getElementById("number_input").value = " ";
    }

    catch {
        alert("Geçersiz işlem");
    }
}

function sayi_sil() {
    document.getElementById("number_input").value = "";
}
