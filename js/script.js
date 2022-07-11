const nu = document.querySelector('.nu');
const ladrao = document.querySelector('.ladrao')

const pulo = () => {

   nu.classList.add('pulo');

   setTimeout(() => {

      nu.classList.remove('pulo');

   }, 700);
}

const loop = setInterval(() => {

   const ladraoPosition = ladrao.offsetLeft;
   const nuPosition = +window.getComputedStyle(nu).bottom.replace('px', '');

   if (ladraoPosition <= 228 && ladraoPosition > 140 && nuPosition < 63) {

      ladrao.style.animation = 'none';
      ladrao.style.left = `${ladraoPosition}px`;

      nu.style.animation = 'none';
      nu.style.bottom = `${nuPosition}px`;

      nu.src = './img/game-over.png';
      nu.style.width = '50px';

      clearInterval(loop);

   }


}, 10);

document.addEventListener('keydown', pulo);