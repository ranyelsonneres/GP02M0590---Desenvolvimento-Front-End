//console.log("teste");

document.getElementById("contatoFormulario").addEventListener("submit", function(event) {

        event.preventDefault();

        let nome = document.getElementById("nome").value;
        console.log(nome);
        let email = document.getElementById("email").value;
        let mensagem = document.getElementById("mensagem").value;
        let numero = document.getElementById("numero").value;
        let usuario = document.getElementById("usuario").value;
        let senha = document.getElementById("senha").value;
        let genero = document.querySelector('input[name="genero"]:checked').value;

        let resultado = `
            Nome: ${nome}<br>
            Email: ${email}<br>
            Mensagem: ${mensagem}<br>
            Número: ${numero} <br>
            Usuario: ${usuario} <br>
            Senha: ${senha}<br>
            Genero: ${genero} <br>
        `;

        document.getElementById("resultado").innerHTML = resultado;

});