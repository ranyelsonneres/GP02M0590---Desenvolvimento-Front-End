//alert("teste");
//console.log("teste!!");

let resultadoVisivel = false;

function calcularOuEsconder(){
    if(resultadoVisivel){
        esconderResultado();
    } else{
        calcularSalario();
    }
}

function calcularSalario(){
    let nome = document.getElementById('nome').value;
    let salarioAtual = parseFloat(document.getElementById('salario').value);
    let porcentagemAumento = parseFloat(document.getElementById('aumento').value);
    let valorAumento = salarioAtual * (porcentagemAumento / 100);
    let novoSalario = salarioAtual + valorAumento;
    let resultado = document.getElementById('resultado');

    resultado.style.display = 'block';

    let mensagem = '';

    //definir pelo cargo:
    //1% a 10% - CEO
    //11% a 20% - diretor
    //21% acima - estagiario

    if (porcentagemAumento >= 1 && porcentagemAumento <=10){
        mensagem = 'CEO';
    } else if (porcentagemAumento >= 11 && porcentagemAumento <=20) {
        mensagem = 'Diretor';
    } else {
        mensagem = 'Estagiario'
    }

    resultado.innerHTML = `
        ${mensagem}
        <p><strong>Funcionario: </strong> ${nome} </p>
        <p><strong>Salario Atual: </strong> ${salarioAtual}</p>
        <p><strong>Novo Salario: </strong> ${novoSalario} </p>
    `

    resultadoVisivel = true;

    document.getElementById('alternar-button').textContent = 'Esconder Resultado';

}

function esconderResultado(){
    let resultado = document.getElementById('resultado');
    resultado.style.display = 'none';

    resultadoVisivel = false;

    document.getElementById('alternar-button').textContent = 'Calcular Aumento';    
}