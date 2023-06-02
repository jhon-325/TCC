const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = carouselSlide.querySelectorAll('img');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let counter = 0;
const imageWidth = carouselImages[0].clientWidth;

function nextSlide() {
  if (counter >= carouselImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  carouselSlide.style.transform = `translateX(${-imageWidth * counter}px)`;
}

// Configurando o intervalo de tempo para avançar para a próxima imagem a cada 3 segundos
const interval = setInterval(nextSlide, 3000);

// Adicionando listeners de eventos aos botões "anterior" e "próximo"
prevButton.addEventListener('click', () => {
  clearInterval(interval); // Limpa o intervalo para pausar a transição automática
  if (counter <= 0) {
    counter = carouselImages.length - 1;
  } else {
    counter--;
  }
  carouselSlide.style.transform = `translateX(${-imageWidth * counter}px)`;
});

nextButton.addEventListener('click', () => {
  clearInterval(interval); // Limpa o intervalo para pausar a transição automática
  nextSlide();
});
