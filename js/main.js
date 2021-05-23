$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})




function iniciarModal(modalTrailer){
    const modal = document.getElementById(modalTrailer)
    modal.classList.add('mostrar');
}

function fecharModal(modalTrailer){
    const remover = document.getElementById(modalTrailer)
    remover.classList.remove('mostrar');

}




