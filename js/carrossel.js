// Capturando elementos de imagem e texto
const img = document.querySelector('.div-carrossel-img img')
const carrossel = document.querySelector('.carrossel-div')
const text = document.getElementById('text')
const titulo = document.querySelector('.titulo')
const alterar = document.querySelector('.bnt-carrossel')
var contador = 1


function transition() {

   alterar.disabled = true;


   if (contador == 1) {

      animation_transition()

      setTimeout(() => {

         insert_text()
         img.src = './img/nu-carrossel-img2.jpg';
         contador = 2;

      }, 1900)





   } else if (contador == 2) {

      animation_transition()

      setTimeout(() => {

         insert_text()
         img.src = './img/Nubank-office.jpg';
         contador = 3;

      }, 1900)




   } else {

      animation_transition()

      setTimeout(() => {

         insert_text()
         img.src = './img/Nu-cartao.png';
         contador = 1;

      }, 1900)



   }

   alterar.disabled = false;

}

function animation_transition() {

   carrossel.classList.add('avancar')

   setTimeout(() => {

      carrossel.classList.remove('avancar')

   }, 2000)

}

function insert_text() {

   if (contador == 1) {

      text.innerHTML = 'teste';

   } else if (contador == 2) {

      text.innerHTML = 'teste 2';

   } else {

      text.innerHTML = 'teste 3';

   }

}

const loop = setInterval(() => {

   transition();

}, 12000)

alterar.addEventListener('click', transition)