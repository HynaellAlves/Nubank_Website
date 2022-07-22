// Capturando elementos de imagem e texto

const img1 = document.querySelector('.img-carrossel');
const text1 = document.querySelector('.sobre-cartao');
const img2 = document.querySelector('.img-carrossel2');
const text2 = document.querySelector('.sobre-cartao2');
const img3 = document.querySelector('.img-carrossel3');
const text3 = document.querySelector('.sobre-cartao3');
const alterar = document.querySelector('.bnt-carrossel');

// Criando variável e atribuindo valor inicial

var valueImg = 1;
var valueText = 1;

// Atribuindo valores iniciais dos elementos

img1.style.opacity = 1;
text1.style.opacity = 1;
img2.style.opacity = 0;
text2.style.opacity = 0;
img3.style.opacity = 0;
text3.style.opacity = 0;

// Troca de elementos automática com intervalo de 20s

const loop = setInterval(() => {

   trocar();


}, 20000)

// Função que efetua de fato a troca entre os elementos

function trocar() {

   alterar.disabled = true;

   if (valueImg == 1 && valueText == 1) {

      img1.classList.add('avancar');
      text1.classList.add('avancar');

      const n = setTimeout(() => {

         img2.style.opacity = 1;
         text2.style.opacity = 1;
         img1.style.opacity = 0;
         text1.style.opacity = 0;

      }, 1000)

      setTimeout(() => {

         img1.classList.remove('avancar');
         text1.classList.remove('avancar');
         alterar.disabled = false;

      }, 1000);

      valueImg = 2;
      valueText = 2;

   } else if (valueImg == 2 && valueText == 2) {

      img2.classList.add('avancar');
      text2.classList.add('avancar');

      const n = setTimeout(() => {

         img3.style.opacity = 1;
         text3.style.opacity = 1;
         img2.style.opacity = 0;
         text2.style.opacity = 0;

      }, 1000)

      setTimeout(() => {

         img2.classList.remove('avancar');
         text2.classList.remove('avancar');
         alterar.disabled = false;

      }, 1000);

      valueImg = 3;
      valueText = 3;

   } else {

      img3.classList.add('avancar');
      text3.classList.add('avancar');

      const n = setTimeout(() => {

         img1.style.opacity = 1;
         text1.style.opacity = 1;
         img3.style.opacity = 0;
         text3.style.opacity = 0;

      }, 1000)

      setTimeout(() => {

         img3.classList.remove('avancar');
         text3.classList.remove('avancar');
         alterar.disabled = false;

      }, 1000);

      valueImg = 1;
      valueText = 1;

   }

};

// Escutador de evento para o click no botão de troca

alterar.addEventListener('click', trocar);
