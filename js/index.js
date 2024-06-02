function inserir(valor) {
    var valorVoto = document.getElementById("campo").value;
    if (valorVoto == "") {
        document.getElementById("campo").value = valor;
    }
    if(valorVoto == 5 || valorVoto == 6){
        document.getElementById("campo").value = "";
    }
}

function corrige(){
    document.getElementById("campo").value = "";
}

var candidato1 = 0;
var candidato2 = 0;
var candidato3 = 0;
var candidato4 = 0;
var nulo = 0;
var branco = 0;
var totalVotos = 0;
var porcentagem = 0;

function votar(){
    var valorVoto = parseInt(document.getElementById("campo").value);
    if(valorVoto == 1){
        candidato1++;
        alert("O seu voto no candidato Afonso foi computado");
    }
    if(valorVoto == 2){
        candidato2++;
        alert("O seu voto no candidato César foi computado com sucesso");
    }
    if(valorVoto == 3){
        candidato3++;
        alert("O seu voto na candidata Fernanda foi computado com sucesso");
    }
    if(valorVoto == 4){
        candidato4++;
        alert("O seu voto na candidata Mariana foi computado com sucesso");
    }
    if(valorVoto == 5){
        nulo++;
        alert("O seu voto anulado foi computado com sucesso");
    }
    if(valorVoto == 6){
        branco++;
        alert("O seu voto branco foi computado com sucesso");
    }
    totalVotos = candidato1 + candidato2 + candidato3 + candidato4 + nulo + branco;
    porcentagem = (nulo + branco) * 100 / totalVotos;
    document.getElementById("campo").value = "";
}

function resultado() {
    document.getElementById("c1").innerHTML = candidato1;
    document.getElementById("c2").innerHTML = candidato2;
    document.getElementById("c3").innerHTML = candidato3;
    document.getElementById("c4").innerHTML = candidato4;
    document.getElementById("nulo").innerHTML = nulo;
    document.getElementById("branco").innerHTML = branco;
    document.getElementById("total").innerHTML = totalVotos;
    document.getElementById("percentual").innerHTML = porcentagem.toFixed(2) + "%";
}

function enviarWhatsApp() {
    var mensagem = `Resultado da Votação:
    Candidato 1: ${candidato1}
    Candidato 2: ${candidato2}
    Candidato 3: ${candidato3}
    Candidato 4: ${candidato4}
    Votos Nulos: ${nulo}
    Votos em Branco: ${branco}
    Total de Votos: ${totalVotos}
    Percentual de Nulos e Brancos: ${porcentagem.toFixed(2)}%`;

    var numero = '5583996750737'; 
            var url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
            window.open(url, '_blank');
}