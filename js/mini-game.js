// Colocar uma musica de fundo.

//Importando elementos

const iniciar = document.getElementById('iniciar')
const reiniciar = document.getElementById('reiniciar')
const instrucoes = document.getElementById('instrucoes')
const info = document.getElementById('info')
const nu = document.querySelector('.nu');
const ladrao = document.querySelector('.ladrao')
const barco1 = document.querySelector('.barco1')
const barco2 = document.querySelector('.barco2')
const barco3 = document.querySelector('.barco3')
const FxJump = new Audio('./media/FXnu-jump.wav')


// Estabelecendo valores iniciais do mini-game

info.style.opacity = 0;
reiniciar.style.opacity = 0;
reiniciar.disabled = true;
ladrao.style.animation = 'none';
ladrao.style.opacity = 0;
const information = (validation) => {

   validation = instrucoes.value;

   if (validation == 'desativado') {

      validation = 'ativado'
      info.style.opacity = 1;
      instrucoes.innerHTML = 'Voltar';

   } else {

      validation = 'desativado'
      info.style.opacity = 0;
      instrucoes.innerHTML = 'Instruções';

   }

   instrucoes.value = validation;


}

// Escutador de evento do botão Iniciar e reiniciar

iniciar.addEventListener('click', start)
reiniciar.addEventListener('click', restart)
instrucoes.addEventListener('click', information)


function start() {

   validation = 'desativado'
   info.style.opacity = 0;
   instrucoes.style.opacity = 0;
   instrucoes.disabled = true;
   reiniciar.style.opacity = 0;
   reiniciar.disabled = true;
   iniciar.style.opacity = 0;
   iniciar.disabled = true;
   ladrao.style.animation = '';
   ladrao.style.opacity = 1;

   // Função de pulo

   const pulo = () => {

      FxJump.play();
      nu.classList.add('pulo');

      setTimeout(() => {

         nu.classList.remove('pulo');

      }, 700);
   }

   // Função para capturar posicionamento dos elementos caso de Game-Over

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
         barco2.style.animation = 'none';
         barco3.style.left = `${barco3Position}px`;

         clearInterval(loop);

         reiniciar.style.opacity = 1;
         reiniciar.disabled = false;

      }


   }, 10);

   // Escutador de eventos que nesse caso aguarda o pressionamento de qualquer tecla

   document.addEventListener('keydown', pulo);



}

function restart() {

   window.location.reload()

}


