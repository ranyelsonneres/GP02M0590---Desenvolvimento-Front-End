## CSS:
- **CSS (Cascading Style Sheets)** é uma linguagem usada para estilizar elementos em documentos HTML, proporcionando controle sobre o layout, aparência e responsividade de páginas web. O CSS define como os elementos HTML devem ser exibidos no navegador, permitindo que desenvolvedores ajustem cores, tamanhos, fontes, espaçamento, bordas e a posição dos elementos na página.

- **Características Principais:**
  - **Cascading (em português, “cascata”):** O CSS é baseado em um sistema de hierarquia em que o estilo aplicado a um elemento pode ser influenciado por estilos definidos em diferentes lugares (como estilo interno, externo e inline). Quando múltiplas regras afetam o mesmo elemento, a regra mais específica ou com maior “peso” prevalece.
  - **Separação de Estilo e Estrutura:** Com o CSS, a estrutura HTML e o estilo visual da página são mantidos separados. Isso facilita a manutenção, já que o estilo de uma página ou de um site inteiro pode ser alterado sem mexer na estrutura HTML, e vice-versa.
  - **Reutilização de Estilo:** Com um único arquivo CSS, é possível estilizar múltiplas páginas. Isso é eficiente e facilita a manutenção, já que as mudanças em um arquivo CSS se refletem em todo o site.
 
## Estrutura básica de CSS:
- O CSS utiliza regras de estilo compostas de seletor e declarações. A estrutura básica de uma regra CSS é:
```css
seletor {
  propriedade: valor;
}
```
  - Seletor: Especifica qual elemento será estilizado, como ```p``` (parágrafo), ```.classe```, ou ```#id```.
  - Propriedade: Define o aspecto do elemento que será alterado, como ```color``` ou ```font-size```.
  - Valor: Especifica o valor que a propriedade deve assumir, como ```blue``` para a cor ou ```16px``` para o tamanho da fonte.

#### Exemplo de CSS:
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  margin: 20px;
  line-height: 1.5;
}
```
## Tipos de folhas de estilo:
##### Folha de estilo externa
- A folha de estilo externa é um arquivo separado com a extensão ```.css```, que é vinculado ao documento HTML por meio da tag ```<link>``` no ```<head>``` do HTML.
- Exemplo de uso:
- Arquivo: HTML
```html
<head>
  <link rel="stylesheet" href="estilo.css">
</head>
```
- Arquivo: CSS
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

h1 {
  color: #333;
}
```
#### Folha de estilo interna
- Uma folha de estilo interna é definida diretamente dentro do documento HTML, na seção ```<head>```, usando a tag ```<style>```. Esse estilo é aplicado apenas ao documento em que está inserido.
- Exemplo de uso:
- Arquivo: HTML
```html
<head>
  <style>
    body {
      background-color: #f0f0f0;
      font-family: Arial, sans-serif;
    }

    h1 {
      color: #333;
    }
  </style>
</head>
```
#### Folha de estilo inline
- O estilo inline é aplicado diretamente no próprio elemento HTML, usando o atributo ```style```. Esse tipo de estilo afeta apenas o elemento onde é especificado.
- Exemplo de uso:
```css
    <h1 style="color: #333; text-align: center;">Título com Estilo Inline</h1>
```
## Comentários:
- Comentários em CSS são trechos de texto que não afetam o estilo da página e são usados para documentar e explicar o código, tornando-o mais fácil de entender e manter. Eles são ignorados pelo navegador na hora de aplicar os estilos.
#### Sintaxe:
- Em CSS, os comentários começam com ```/*``` e terminam com ```*/```.
```css
/* Define o estilo do corpo da página */
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}
```
- Podem ser inseridos em qualquer lugar do arquivo CSS, seja no início, entre declarações ou no final, e podem ocupar uma ou várias linhas.
```css
/* 
  Estilos para a navegação principal
  Inclui cores e espaçamento dos itens
*/
nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
```
## Seletores:
- Os seletores em CSS são usados para definir quais elementos HTML serão estilizados. Existem vários tipos de seletores, cada um com diferentes finalidades e níveis de especificidade.
#### Seletor de tipo (ou Seletor de elemento):
- Definição: Aplica o estilo a todos os elementos de um tipo específico.
- Sintaxe: Usado com o nome do elemento HTML.
- HTML:
```html
<p>Este é um parágrafo.</p>
<p>Este é outro parágrafo.</p>
```
- CSS:
```css
p {
  color: blue;
}
```
- Esse seletor aplica a cor azul a todos os elementos ```<p>``` da página.
  
#### Seletor de classe:
- Definição: Aplica o estilo a todos os elementos que possuem uma determinada classe. As classes são declaradas no HTML com o atributo ```class```.
- Sintaxe: Precede o nome da classe com um ponto ```.```.
- HTML:
```html
<div class="destaque">Conteúdo em destaque.</div>
<p class="destaque">Parágrafo em destaque.</p>

```
- CSS:
```css
.destaque {
  font-weight: bold;
  color: green;
}

```
- Resultado: O conteúdo dentro dos elementos ```<div>``` e ```<p>``` com a classe destaque será em negrito e verde.
#### Seletor de ID:
- Definição: Aplica o estilo a um elemento específico com um ID único. No HTML, os IDs são definidos com o atributo id.
- Sintaxe: Precede o nome do ID com um sinal ```#```.
- HTML:
```html
<h1 id="titulo-principal">Bem-vindo ao site!</h1>
```
- CSS:
```css
#titulo-principal {
  font-size: 2em;
  color: darkred;
}

```
#### Seletor universal:
- Definição: Aplica o estilo a todos os elementos da página.
- Sintaxe: Usado com o caractere ```*```.
- HTML:
```html
<h1>Este é um título</h1>
<p>Este é um parágrafo.</p>
```
- CSS:
```css
* {
  margin: 0;
  padding: 0;
}
```
- Resultado: Remove as margens e os preenchimentos padrão de todos os elementos, útil para "resetar" o estilo inicial.
#### Seletor Pseudo-classes:
- Definição: Aplica o estilo com base em um estado ou condição específica do elemento.
- HTML:
```html
<a href="#">Link</a>
<button>Clique em mim</button>
```
- CSS:
```css
a:hover {
  color: red;
}

button:active {
  background-color: yellow;
}

```
- Resultado: O link ficará vermelho quando o cursor passar sobre ele. O botão terá fundo amarelo enquanto estiver sendo pressionado.

## Propriedades básicas:
#### Cores
- As cores no CSS obedecem ao padrão hexadecimal RGB e as mais básicas podem também ser designadas pelo nome.
- As cores podem ser especificadas de várias maneiras: por nome (ex: ```red```), em código hexadecimal (ex: ```#ff0000```), em RGB (ex: ```rgb(255, 0, 0```)) ou em HSL (ex: ```hsl(0, 100%, 50%)```).
- Exemplo:
```css
/* Cor de texto com nome de cor */
p {
  color: blue;
}

/* Cor de fundo com código hexadecimal */
div {
  background-color: #ff5733;
}

/* Cor de borda com RGB */
h1 {
  border-color: rgb(0, 128, 128);
}

/* Usando HSL */
h2 {
  color: hsl(120, 100%, 25%);
}

```
#### Plano de fundo
- O plano de fundo de um elemento pode ser configurado com uma cor, uma imagem ou um gradiente. Propriedades como ```background-image```, ```background-color```, ```background-size``` e ```background-position```, ajudam a personalizar.
- Exemplo:
```css
/* Cor de fundo */
body {
  background-color: #f0f0f0;
}

/* Imagem de fundo */
header {
  background-image: url('imagem.jpg');
  background-size: cover;
  background-position: center;
}

/* Gradiente de fundo */
section {
  background: linear-gradient(to right, #ff7e5f, #feb47b);
}

```
#### Texto
- As propriedades de texto controlam como o texto aparece em um elemento. Isso inclui a cor (color), alinhamento (text-align), decoração (text-decoration), espaçamento (letter-spacing) e sombra (text-shadow).
- Principais propriedades:
  - color: Define a cor do texto.
  - text-ident: Define a distância de recuo do texto no início do parágrafo.
  - line-height: Define o espaçamento entre as linhas.
  - text-align: Define o alinhamento do texto, que pode ser ao centro, à direita, à esquerda ou no estilo justificado.
  - text-decoration: Define a decoração de um texto e é feita com os seguintes valores:
    - underline: sublinhado
    - overline: sobrelinhado
    - line-through: uma linha em cima do texto
    - blink: faz piscar o texto
  - text-transform: Define uma transformação ao texto, que podem ser as seguintes:
    - uppercase: torná-las todas maiúsculas
    - lowercase: todas minúsculas;
    - capitalize: todas as primeiras letras maiúsculas
- Exemplo
```css
/* Cor e alinhamento */
h1 {
  color: navy;
  text-align: center;
}

/* Texto sublinhado */
p {
  text-decoration: underline;
}

/* Espaçamento e sombra */
h2 {
  letter-spacing: 2px;
  text-shadow: 2px 2px 5px gray;
}
```
#### Fonte
- A fonte define o estilo do texto. Com CSS, é possível controlar o tipo de fonte ```(font-family)```, o tamanho ```(font-size)```, o estilo ```(font-style)```, o peso ```(font-weight)``` e a altura da linha ```(line-height)```.
- Propriedades:
  - font-family: Refere-se à família da fonte. O valor pode ter o nome específico da fonte (Arial, Verdana, Times New Roman) ou de fontes genéricas (menospace, serif). Vale ressaltar que a fonte escolhida deverá estar instalada na máquina do usuário.
  - font-size: Pode-se escolher o tamanho da fonte usando valores numéricos ou nomenclaturas: x-small, xx-small, x-large, xx-large, small, medium, large, smaller e larger.
  - font-style: Há 3 opções: normal, italic e oblique, que se referem a letras em sua fonte normal na vertical, letras inclinadas e letras obliquas, respectivamente.
  - font-weight: Define a intensidade de negrito que a fonte vai receber. Pode assumir 3 opções: bold, bolder e lighter ou valores numéricos.
- Exemplo:
```css
/* Família de fonte e tamanho */
body {
  font-family: Arial, sans-serif;
  font-size: 16px;
}

/* Peso e estilo */
h1 {
  font-weight: bold;
  font-style: italic;
}

/* Altura de linha */
p {
  line-height: 1.5;
}
```
#### Borda
- As bordas contornam elementos e podem ser personalizadas em largura, estilo, cor e raio (para bordas arredondadas). As propriedades incluem ```border-width```, ```border-style```, ```border-color``` e ```border-radius```.
- Propriedades:
  - border-width: Define a espessura da borda. Assume thin, medium e thick (fina, média e grossa respectivamente) como valores, ou um valor numérico.
  - border-color: Define a cor da borda. Assume "cor" ou "#AAAAAA" como valores.
  - border-style: Define o estilo da borda. Valores assumidos: dotted, dashed, solid, double, groove, ridge, inset, outset.
- Exemplo:
```css
/* Borda sólida */
div {
  border: 2px solid black;
}

/* Borda arredondada */
button {
  border: 1px solid #007bff;
  border-radius: 5px;
}

/* Borda de vários lados */
p {
  border-top: 3px dashed red;
  border-bottom: 2px dotted blue;
}

```
#### Margin
- Cria espaço em volta dos elementos, fora de suas bordas. Ela pode ser aplicada em quatro direções: superior ```(margin-top)```, direita ```(margin-right)```, inferior ```(margin-bottom)```, e esquerda ```(margin-left)```.
- Exemplo: margem uniforme:
```css
.box {
  margin: 20px;
}
```
  - Define uma margem de 20 pixels em todos os lados do elemento com a classe box.
- Exemplo: margem distintas para cada lado:
```css
.box {
  margin: 10px 15px 20px 25px; /* superior, direita, inferior, esquerda */
}
```
  - Define margens de 10px no topo, 15px à direita, 20px embaixo, e 25px à esquerda.
#### Padding
- A propriedade ```padding``` cria espaço dentro dos elementos, entre o conteúdo e as bordas. Assim como ```margin```, pode ser aplicada em quatro direções: superior, direita, inferior e esquerda.
- Exemplo: preenchimento uniforme:
```css
.container {
  padding: 15px;
}
```
- Define um preenchimento de 15 pixels em todos os lados do conteúdo do elemento container.
- Exemplo: preenchimento distinto para cada lado:
```css
.container {
  padding: 5px 10px 15px 20px; /* superior, direita, inferior, esquerda */
}
- Define um preenchimento de 5px no topo, 10px à direita, 15px embaixo, e 20px à esquerda
```
