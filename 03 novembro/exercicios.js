//Exercícios 3 de novembro

//Definição do while

var soma = 0;
var cont = 0;
while (cont <= 100) {
    soma = soma + cont; cont++;
}
console.log(soma);

//Exercício do quadrado usando a função while

function retangulo(numeroLinhas, numeroAsteriscos) {
    var contLinhas = 1;
    while (contLinhas <= numeroLinhas) {
        var contAsteriscos = 1;
        var tiraDeAsteriscos = "";
        while (contAsteriscos <= numeroAsteriscos) {
            tiraDeAsteriscos = tiraDeAsteriscos + "*";
            contAsteriscos++;
        }
        console.log(contLinhas + tiraDeAsteriscos);

        contLinhas++;
    }
}

// Exercício do jogo do PIN - solução da Tainá

function jogoDoPin(n){
    var i = 0;
    var x = "PIN";
    for (var i = 1; i <=n; i++){
        if (x % 4 == 0){
            console.log (x);
        }
        else {
            console.log(i); 
        }
    }
}

// Aula sobre a função array

//a função length retorna o número de elementos do array

var x = [3, 7, 2, 18];
for (var i = 0; i < x.length; i++) {
    console.log(x[i]);
}

function tamanho(array) {
    var cont = 0;
    var i = 0;
    while (array[i] != undefined){
        cont++;
        i++;
    }
    return cont;
}
