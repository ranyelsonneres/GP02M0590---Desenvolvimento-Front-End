## JavaScript
- JavaScript é uma linguagem de programação de alto nível, interpretada e orientada a objetos, que é amplamente utilizada para adicionar interatividade e dinamismo a páginas web;
- É uma linguagem versátil que pode ser usada no desenvolvimento de aplicações web, servidores, jogos, aplicações móveis, automação de tarefas e muito mais.
- Tradicionalmente, JavaScript é executado no lado do cliente (navegador), permitindo que os scripts sejam executados diretamente na máquina do usuário. Com a introdução de ambientes de execução como Node.js, JavaScript também pode ser utilizado no lado do servidor, permitindo que desenvolvedores usem a mesma linguagem para construir toda a aplicação.
- JavaScript trabalha em conjunto com HTML e CSS para criar interfaces ricas e dinâmicas. Ele pode manipular o DOM (Document Object Model) para alterar a estrutura e o estilo de um documento HTML em tempo real.
- JavaScript possui um vasto ecossistema com uma grande variedade de bibliotecas e frameworks, como React, Angular e Vue.js, que facilitam o desenvolvimento de aplicações complexas e robustas. O gerenciador de pacotes NPM (Node Package Manager) também é uma parte fundamental do ecossistema, permitindo que os desenvolvedores compartilhem e reutilizem código.
- JavaScript é uma linguagem de tipagem dinâmica, o que significa que as variáveis não precisam ser declaradas com um tipo específico. O tipo de uma variável pode mudar durante a execução do programa.

## Tipos de variáveis: let, var e const
- var: Declara uma variável que pode ser reatribuída e tem escopo de função. É uma forma mais antiga de declarar variáveis e não é recomendada para uso em código moderno devido a problemas de escopo.
```javascript
var idade = 30;
idade = 31; // Pode ser reatribuído
console.log(idade); // 31

```
- let: Declara uma variável que pode ser reatribuída, mas tem escopo de bloco, o que significa que só está disponível dentro do bloco onde foi definida.
```javascript
let nome = "Alice";
nome = "Bob"; // Pode ser reatribuído
console.log(nome); // Bob
```
- const: Declara uma variável que não pode ser reatribuída. O valor deve ser atribuído no momento da declaração, e essa variável tem escopo de bloco.
```javascript
const pi = 3.14;
// pi = 3.15; // Isso causaria um erro, pois `pi` não pode ser reatribuído
console.log(pi); // 3.14

```
## DOM
- Document Object Model (Modelo de Objeto de Documento), é uma interface de programação que permite a manipulação estruturada de documentos HTML e XML. Ele representa a estrutura do documento como uma árvore de objetos, onde cada nó da árvore corresponde a uma parte do documento (como elementos, atributos e texto).
### Estrutur em árvore
- No DOM, um documento HTML é representado como uma estrutura em forma de árvore. Cada elemento HTML (como ```<div>```, ```<p>```, ```<a>```, etc.) é um nó na árvore. O nó raiz é geralmente o documento em si, e cada elemento é um filho do nó que o contém.

### Manipulação de elementos
- O DOM permite que os desenvolvedores acessem, modifiquem, adicionem ou removam elementos da árvore. Isso é feito através de métodos e propriedades disponíveis na API do DOM. Por exemplo:
- Acessar um elemento:
```javascript
const elemento = document.getElementById("meuElemento");

```
- Modificar conteúdo:
```javascript
elemento.innerHTML = "Novo Conteúdo"; // Altera o conteúdo HTML

```

### Eventos
- O DOM também lida com eventos, permitindo que os desenvolvedores respondam a interações do usuário, como cliques, passagens de mouse e teclas pressionadas. Os eventos podem ser adicionados a elementos usando métodos como ```addEventListener()```.
```javascript
const botao = document.getElementById("meuBotao");
botao.addEventListener("click", function() {
  alert("Botão clicado!");
});

```
### Estrutas básicas
### If e Else
- As estruturas if e else permitem que você execute diferentes blocos de código com base em condições específicas.
- Sintaxe básica:
```javascript
if (condição) {
  // Código a ser executado se a condição for verdadeira
} else {
  // Código a ser executado se a condição for falsa
}
```
- Exemplo:
```javascript
let idade = 20;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

### For
- A estrutura for é usada para executar um bloco de código um número específico de vezes. Ela é muito útil para iterar sobre arrays e coleções.
- Sintaxe básica:
```javascript
for (inicialização; condição; incremento) {
  // Código a ser executado em cada iteração
}
```
- Exemplo:
```javascript
for (let i = 0; i < 5; i++) {
  console.log("Número: " + i);
}
```

### Switch-case
- A estrutura switch-case é usada para executar um bloco de código com base na correspondência de um valor específico. É uma alternativa ao uso de múltiplas instruções if.
- Sintaxe básica:
```javascript
switch (expressão) {
  case valor1:
    // Código a ser executado se expressão === valor1
    break;
  case valor2:
    // Código a ser executado se expressão === valor2
    break;
  default:
    // Código a ser executado se nenhum caso corresponder
}
```
- Exemplo:
```javascript
let diaDaSemana = 3;
let nomeDoDia;

switch (diaDaSemana) {
  case 1:
    nomeDoDia = "Segunda-feira";
    break;
  case 2:
    nomeDoDia = "Terça-feira";
    break;
  case 3:
    nomeDoDia = "Quarta-feira";
    break;
  case 4:
    nomeDoDia = "Quinta-feira";
    break;
  case 5:
    nomeDoDia = "Sexta-feira";
    break;
  case 6:
    nomeDoDia = "Sábado";
    break;
  case 7:
    nomeDoDia = "Domingo";
    break;
  default:
    nomeDoDia = "Dia inválido";
}

console.log(nomeDoDia); // Quarta-feira

```
