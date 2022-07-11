const nu = document.querySelector('.nu');
const ladrao = document.querySelector('.ladrao')
const barco1 = document.querySelector('.barco1')
const barco2 = document.querySelector('.barco2')
const barco3 = document.querySelector('.barco3')

const pulo = () => {

   nu.classList.add('pulo');

   setTimeout(() => {

      nu.classList.remove('pulo');

   }, 700);
}

const loop = setInterval(() => {


   const barco1Position = barco1.offsetLeft;
   const barco2Position = barco2.offsetLeft;
   const barco3Position = barco3.offsetLeft;
   const ladraoPosition = ladrao.offsetLeft;
   const nuPosition = +window.getComputedStyle(nu).bottom.replace('px', '');

   if (ladraoPosition <= 228 && ladraoPosition > 140 && nuPosition < 63) {

      ladrao.style.animation = 'none';
      ladrao.style.left = `${ladraoPosition}px`;

      nu.style.animation = 'none';
      nu.style.bottom = `${nuPosition}px`;

      nu.src = './img/game-over.png';
      nu.style.width = '50px';

      barco1.style.animation = 'none';
      barco1.style.left = `${barco1Position}px`;
      barco2.style.animation = 'none';
      barco2.style.left = `${barco2Position}px`;
      barco3.style.animation = 'none';
      barco3.style.left = `${barco3Position}px`;

      clearInterval(loop);

   }


}, 10);

document.addEventListener('keydown', pulo);