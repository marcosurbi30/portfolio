

/*  Efecto de cambio de imagen   */ 

let photoMe  = document.getElementById ('image');

function mouseOver () {
    images.src="images/MY-PHOTO-EDIT.jpg"
};

image.addEventListener ('mouseover', mouseOver);

function mouseOut (){
    images.src = "images/profile.jpg"
}

image.addEventListener ('mouseout', mouseOut);


/* Mostrar más información en la sección de My Portfolio  */

function mostrar (){
    let textoAdicional = document.getElementById ('textoAdicional');

    textoAdicional.className = 'visible';
    let boton = document.getElementById ('boton');

    boton.className = 'ocultar';
};


boton.addEventListener ('click', mostrar);



/* Mensaje de "Enviado con éxito" en el formulario  */ 

function generarAlerta (){
    alert ('Enviado con exito')
};

let send = document.getElementById('btn');

send.addEventListener ('click', generarAlerta);



/* Slider para las cards en la sección "What I Do" */

var currentSlide = 0;
var slides = document.querySelectorAll('.slides .box');

function showSlide(n) {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${n * 100}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);
