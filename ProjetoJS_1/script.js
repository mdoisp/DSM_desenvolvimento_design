function calcularNovoSalario()
{
    novoSalario = 0;
    let salario = Number(document.getElementById('salario').value);
    let percent = Number(document.getElementById('percent').value);
    novoSalario = salario * (percent/100) + salario;
    console.log(novoSalario);
    document.getElementById('resultadoSalario').innerText = `O novo salário será R$${novoSalario}`;
}
function calcularArea()
{
    let base = Number(document.getElementById('base').value);
    let altura = Number(document.getElementById('altura').value);
    area = (base * altura) / 2;
    console.log(area);
    document.getElementById('resultadoArea').innerText = `A área será: ${area}`;
}
function mediaPonderada()
{
    media = 0;
    let nota1 = Number(document.getElementById('nota1').value);
    let nota2 = Number(document.getElementById('nota2').value);
    media = (nota1 * 0.3) + (nota2 * 0.7);
    console.log(media);
    document.getElementById('resultadoMedia').innerText = `A média ponderada será: ${media}`;
}
function calculoIdade()
{
    let anoNasc = Number(document.getElementById('anoNasc').value);
    console.log(anoNasc);
}