function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - soma(+)\n 2 - subtração(-)\n 3 - multiplicação(*)\n 4 - divisão(/)\n 5 - potenciação(**)'));

    let numero1 = Number(prompt('Insira o primeiro valor'));

    CheckNumber(numero1);

    let numero2 = Number(prompt('Insira o segundo valor'));

    CheckNumber(numero2);

    let resultado;

    function CheckNumber(numero){
        if(!Number.isInteger(numero))
        {
            alert("Você digitou um valor incorretos, digite novamente");

            calculadora();
        }    
    }
    

    function soma(){
        resultado = numero1 + numero2;
        alert(numero1 + "+" + numero2 + "=" + resultado);
    }

    function subtracao(){
        resultado = numero1 - numero2;
        alert(numero1 + "-" + numero2 + "=" + resultado);
    }

    function multiplicacao(){
        resultado = numero1 * numero2;
        alert(numero1 + "*" + numero2 + "=" + resultado);
    }

    function divisao(){
        resultado = numero1 / numero2;
        alert(numero1 + "/" + numero2 + "=" + resultado);
    }

    function potenciacao(){
        resultado = numero1 ** numero2;
        alert(numero1 + "**" + numero2 + "=" + resultado);
    }

    switch(operacao){
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisao();
            break;
        case 5:
            potenciacao();
            break;
    }
}

calculadora();


let option = prompt("Deseja fazer outra conta? Digite S para sim");

while(option.toUpperCase() != "S")
{
    calculadora();
}
alert("Obrigado por usar a calculadora Guilherme Miguel");
