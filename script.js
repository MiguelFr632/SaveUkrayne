var linguagem = document.getElementById("language")

function getData() {
    const time = new Date().toLocaleTimeString();
    
    if(time >= "06:00:00" && time <= "11:59:59") {
        document.getElementById("boasVindas").innerHTML = "Bom dia!";
    }
    else if (time >= "12:00:00" && time <= "17:59:59"){
        document.getElementById("boasVindas").innerHTML = "Boa tarde!";
    }
    else {
        document.getElementById("boasVindas").innerHTML = "Boa noite!";
    }
    //alert(date)
}

function setLanguageOnLoad() {
    
    const storedLang = localStorage.getItem("lang")
    
    if (!storedLang || storedLang === "pt-BR") {
        linguagem.lang = "pt-BR"
        localStorage.setItem("lang", "pt-BR");
        return
    }
    linguagem.lang = "en"
    localStorage.setItem("lang", "en");
}

setLanguageOnLoad()

function changeLanguageToBr() {
    linguagem.lang = "pt-BR"
    localStorage.setItem("lang", "pt-BR");
}

function changeLanguageToEn() {
    linguagem.lang = "en"
    localStorage.setItem("lang", "en");
}

function enviar() {
    var idadePessoa = document.getElementById("idade")

    idadePessoa.style.borderColor = "black"

    if (idadePessoa.value <= 0 || idadePessoa.value == "" || idadePessoa.value == null) {

        idadePessoa.style.borderColor = "red";
        return alert("Idade não pode ser negativa ou vazia!");
    }

    $("#submit").click(function () {
        swal("Atenção!", "Suas informações foram enviadas com sucesso!");
    });
}