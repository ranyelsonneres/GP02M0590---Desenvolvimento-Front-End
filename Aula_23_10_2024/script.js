let atualSlideIndex = 0;

//carregar imagens
function carregarImagens(){
    const categoria = document.getElementById('imagem-categoria').value;
    //console.log(categoria);

    const carousel = document.getElementById('carousel');
    let imagens = ''; //armazenar as imagens

    switch (categoria) {
        case 'natureza':
            imagens = `
                <img src="img/natureza-1.jpg">
                <img src="img/natureza-2.jpg">
            `;
            break;
        case 'animais':
            imagens= `
            <img src="img/animal-1.jpg">
            <img src="img/animal-2.jpg">
            `;
            break;
        default:
            imagens = `<p>Escolha a categoria</p>`;        
    }

    carousel.innerHTML = imagens; //apresentar a imagem dentro da div carousel

    atualSlideIndex = 0;
    mostrarSlide();

}

//mostrar imagens
function mostrarSlide() {
    const slides = document.querySelectorAll('.carousel img'); //selecionar a image

    for (var i=0; i<slides.length; i++){
        //console.log(slides[i]);
        if (i == atualSlideIndex ){
            slides[i].style.display = 'block';
        } else {
            slides[i].style.display = 'none';
        }
    }

}

//anteriorSlide
function anteriorSlide(){
    const slides = document.querySelectorAll('.carousel img'); 
    if (atualSlideIndex > 0){
        atualSlideIndex  --;
    }

    mostrarSlide()

}

//proximoSlide
function proximoSlide(){
    const slides = document.querySelectorAll('.carousel img'); 
    if (atualSlideIndex < slides.length - 1){
        atualSlideIndex  ++;
    }

    mostrarSlide()
}
