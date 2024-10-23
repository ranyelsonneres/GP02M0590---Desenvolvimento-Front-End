

//carregar imagens
function carregarImagens(){
    const categoria = document.getElementById('imagem-categoria').value;
    //console.log(categoria);

    const carousel = document.getElementById('carousel');
    let imagens = ''; //armazenar as imagens

    switch (categoria) {
        case 'natureza':
            imagens = ` estrutura natureza `;
            break;
        case 'animais':
            imagens= `estrutura imagens`;
            break;
        default:
            imagens = `<p>Escolha a categoria</p>`;        
    }

    carousel.innerHTML = imagens; //apresentar a imagem dentro da div carousel


}

//mostrar imagens

//anteriorSlide

//proximoSlide
