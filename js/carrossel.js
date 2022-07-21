const img1 = document.getElementById('nu-cartoes');
const text1 = document.getElementById('sobre-cartao');
const img2 = document.getElementById('img-carrossel2');
const text2 = document.getElementById('sobre-cartao2');
const alterar = document.getElementById('bnt-carrossel');

var valueImg = 1;
var valueText = 1;

img2.style.opacity = 0;
text2.style.opacity = 0;
img1.style.opacity = 1;
text1.style.opacity = 1;

const loop = (() => {

   if (valueImg == 1 && valueText == 1) {

      img2.style.opacity = 1;
      text2.style.opacity = 1;
      img1.style.opacity = 0;
      text1.style.opacity = 0;

      valueImg = 2;
      valueText = 2;
      
   } else if (valueImg == 2 && valueText == 2) {

      img1.style.opacity = 1;
      text1.style.opacity = 1;
      img2.style.opacity = 0;
      text2.style.opacity = 0;

      valueImg = 1;
      valueText = 1;
      

   }



})

alterar.addEventListener('click', loop);
