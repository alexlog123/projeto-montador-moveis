let slideIndex = 1;
showSlides(slideIndex);

// Função para avançar ou voltar nos slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Função para ir para um slide específico
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Se o slide for maior que o número de slides, volta para o primeiro
  if (n > slides.length) {
    slideIndex = 1;
  }

  // Se o slide for menor que 1, vai para o último
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Esconde todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove a classe 'active' de todos os indicadores
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Exibe o slide atual e adiciona a classe 'active' ao indicador correspondente
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}






