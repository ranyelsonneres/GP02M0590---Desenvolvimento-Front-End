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
