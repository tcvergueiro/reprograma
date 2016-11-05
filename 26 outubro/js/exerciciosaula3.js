var num1 = prompt("Por favor, digite um número:");
var num2 = prompt("Por favor, digite outro número:");

function maiorNumero(num1, num2) {

    if (num1 > num2) {
        alert("O maior número é o primeiro, ou seja:" + num1);
    }
    else if (num2 > num1) {
        alert("O maior número é o segundo, ou seja:" + num2);
    }
    else {
        alert("os números são iguais");
    }

}

maiorNumero(num1, num2);


function digaMeuFuturo (nomeDaProfissao, nomeDoLugar, nomeDoNamorado, quantosFilhos)
{
    var futuro = "Você será uma " + nomeDaProfissao + " na " + nomeDoLugar + " e vai se casar com " + nomeDoNamorado + " e vocês terão " + quantosFilhos + " filhos.";
    alert (futuro);
}

digaMeuFuturo("veterinária", "México", "Fábio Jr.", "40");



