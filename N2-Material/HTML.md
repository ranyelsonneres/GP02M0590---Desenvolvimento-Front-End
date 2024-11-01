## HTML
## Audio
- O elemento ```<audio>``` permite incorporar áudio em uma página web. É uma maneira fácil de adicionar som, como música ou efeitos sonoros. O elemento oferece controles como play, pause e volume.
- Exemplo:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exemplo de Audio</title>
</head>
<body>
    <h1>Exemplo de Audio</h1>
    <audio controls>
        <source src="musica.mp3" type="audio/mpeg">
        Seu navegador não suporta o elemento audio.
    </audio>
</body>
</html>
```
- controls: adiciona controles de áudio.
- source: especifica o arquivo de áudio e seu tipo.

## Vídeo
- O elemento ```<video>``` permite a inclusão de vídeos em uma página. Assim como o ```<audio>```, o ```<video>``` também pode incluir controles para reproduzir, pausar e ajustar o volume do vídeo.
- Exemplo:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exemplo de Vídeo</title>
</head>
<body>
    <h1>Exemplo de Vídeo</h1>
    <video width="640" height="360" controls>
        <source src="video.mp4" type="video/mp4">
        Seu navegador não suporta o elemento video.
    </video>
</body>
</html>
```
- width e height: definem a largura e a altura do vídeo.
- controls: adiciona controles de vídeo.

## Favicons
- Favicons são pequenos ícones que aparecem na aba do navegador, na barra de favoritos e em outras áreas. Eles ajudam a identificar rapidamente um site.
- Exemplo:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exemplo de Favicon</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>
<body>
    <h1>Exemplo de Favicon</h1>
    <p>Veja o ícone na aba do navegador.</p>
</body>
</html>

```
- ```<link rel="icon">```: define o favicon do site.
- href: o caminho do arquivo de ícone

## Formulários
- Os formulários ```<form>``` são utilizados para selecionar diferentes tipos de entradas do usuário e para enviar dados ao servidor. O elemento ```<form>``` pode conter outros elementos de entrada.
- Um formulário é definido pelo elemento ```<form>```, que pode conter uma variedade de elementos de entrada (```<input>```, ```<textarea>```, ```<select>```, etc.). A estrutura básica de um formulário é a seguinte:

```html
<form action="URL_DO_SERVIDOR" method="POST">
    <!-- Elementos de entrada -->
</form>

```
- action: Especifica o URL para onde os dados do formulário serão enviados quando o formulário for enviado.
- method: Define o método HTTP a ser usado ao enviar o formulário. Os métodos mais comuns são:
  - GET: Os dados são enviados na URL e são visíveis. É usado para solicitações que não alteram o estado do servidor.
  - POST: Os dados são enviados no corpo da requisição e não são visíveis na URL. É usado para enviar dados sensíveis ou para ações que modificam o estado do servidor.
- Principais Elementos de Entrada:
- ```<input>```: Permite a entrada de dados. Os tipos de entrada incluem texto, senha, e-mail, número, arquivo, entre outros.
```html
<label for="nome">Nome:</label>
<input type="text" id="nome" name="nome" required>

```  
- ```<textarea>```: Um campo de texto para entradas de múltiplas linhas.
```html
<label for="mensagem">Mensagem:</label>
<textarea id="mensagem" name="mensagem" rows="4" required></textarea>

```
- ```<select>```: Um menu suspenso para selecionar uma opção dentre várias.
```html
<label for="cidade">Cidade:</label>
<select id="cidade" name="cidade">
    <option value="sao-paulo">São Paulo</option>
    <option value="rio-de-janeiro">Rio de Janeiro</option>
    <option value="belo-horizonte">Belo Horizonte</option>
</select>

```
- ```<button>```: Um botão que pode ser configurado para enviar o formulário ou executar ações JavaScript.
```html
<label for="cidade">Cidade:</label>
<select id="cidade" name="cidade">
    <option value="sao-paulo">São Paulo</option>
    <option value="rio-de-janeiro">Rio de Janeiro</option>
    <option value="belo-horizonte">Belo Horizonte</option>
</select>

```
- ```<checkbox>```
```html
<label>
    <input type="checkbox" name="newsletter" value="sim"> Quero receber a newsletter
</label>
```
- ```<radio>```
```html
<label>
    <input type="radio" name="genero" value="masculino"> Masculino
</label>
<label>
    <input type="radio" name="genero" value="feminino"> Feminino
</label>

```
