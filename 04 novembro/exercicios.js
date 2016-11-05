//Exercícios 04 de novembro - arrays

//Exemplo de função
function tamanho(arr) {
    var resultado = 0;
    var i = 0;

    while (arr[i] != undefined) {
        resultado++;
        i++;
    }
    return resultado;
}

//Exemplos de variáveis e de termos que chamam a função
var x = [];
tamanho(x);
var y = [12, 4, 5, 18, 21];
tamanho(y);
tamanho([1]);
var bola = [1, 6, 2];
tamanho([7, 12]);

//Exercício do jogo do Pin - solução professor - usando arrays

// Para verificar se o número é múltiplo de 4:
// x % 4 == 0
// x significa o número a ser multiplicado e o % é o resultado da divisão. Se o resultado da divisão é 0 ela não tem resto (ou seja, é múltiplo de 4).

function jogoDoPin(n) {
    var resultado = [];
    var i=1;
    while(i<=n) {
        if(i % 4 == 0){
            resultado.push("PIN");
        } else {
            resultado.push(i);
        }
        i++;
    }
    return resultado;
}

//Escreva uma função que receba um array de números e retorne elementos do array. Exemplo:

function soma(meuArray){
    var resultado = 0;
    for(var i = 0; i < meuArray.length; i++){
       resultado = resultado + meuArray [i]; 
    }
    return resultado;
}

//Exemplo de como chamar a função no console:

soma([39,45,37]);
121

