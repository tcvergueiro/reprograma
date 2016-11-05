//Exercício 1//
var numberOne = 1;
var numberTwo = 2;
alert(numberOne + numberTwo);

var numberThree = 3;
var numberFour = 4;
alert(numberThree / numberFour);

var numberFive = 5;
var numberSix = 6;
alert(numberSix - numberFive);

//Exercício 2//
/*
3>5
false
5>0
true
5>5
false
0>=1
false
1>-10
true

//Exercício 3//
(10+40)>=(50-10)
true
1>-10
true
(3>5)&&(5>6)
false
(5<0)&&(0==0)
false
(5!=4)||(4>4)
true
*/

//Exercício 4//
var Tatiane = 4;
var Taina = 8;
if (Tatiane > Taina) {
    alert("é maior");
}
else {
    alert("é menor");
}

//Exercício 5//
var numberOne = 1;
var numberTwo = 2;
if (numberOne > numberTwo) {
    alert("é maior");
}
else {
    alert("é menor");
}
var numberSeven = 7;
var numberSeven = 7;
if (numberSeven = numberSeven) {
    alert("variáveis têm o mesmo valor");
}

//Exercício 6//
var denominador1 = prompt("Por favor, digite o primeiro número:");
var denominador2 = prompt("Por favor, digite o segundo número:");
var resultado = denominador1 * denominador2;

alert(resultado);

//Exercício 7//
var pergunta = prompt("Qual a sua idade? Favor digitar um número");
if (pergunta > 18) {
    alert("Parabéns! Você já pode dirigir.");
}
else {
    alert("Olá, você precisa esperar um pouco para dirigir.");
}

//Exercício 8//
var nome = prompt("Por favor, informe qual seu nome:");
var mensagem = prompt("Favor informar seu sexo: M (masculino) ou F (feminino)");
if (mensagem == "M") {
    alert("Olá " + nome + " ,seja bem-vindo!");
}
else if (mensagem == "F") {
    alert("Olá " + nome + " ,seja bem-vinda!");
}
else {
    alert("Olá " + nome + " ,tenha um bom dia!");
}

//Exercício 9//
var horário = prompt("Por favor, informe que horas são:");
if (horário >= 0 && horário <= 19) {
    alert("Agora é dia!");
}
else if (horário >= 20 && horário <= 23) {
    alert("Agora é noite!");
}
else {
    alert("Desculpe, o horário informado está incorreto.");
}