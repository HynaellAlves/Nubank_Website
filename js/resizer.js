// Script que redimensiona os contents de acordo com o tamanho da janela do navegador

// Author: Hynaell Alves
// Github: https://github.com/HynaellAlves

/*
 A lógica consiste em pegar o tamanho total da janela e obter a porcentagem, em que ela foi reduzida 
 do tamanho máximo da tela, que neste caso é 1325x768 (mas estamos utilizando somente a largura na lógica 1325), e depois reduzir 
 o tamanho dos elementos na mesma porcentagem tirada. Desse modo não é necessário alterar o layout exclusivo do site
 */

// Capturando tamanho máximo da janela

const windowWidthMax = 1325;
console.log('Tamanho da janela: ' + windowWidthMax);

// Capturando contents a serem redimensionados

const nuVideos = document.querySelector('.nu-videos');
const carrosselDiv = document.querySelector('.carrossel');
const minigame = document.querySelector('.mini-game');

// Capturando altura dos contents

const nuVideosHeight = nuVideos.getBoundingClientRect().height;
const carrosselHeight = carrosselDiv.getBoundingClientRect().height;

// Capturando elementos de texto a serem redimensionados

const sobreNu = document.querySelector('#sobre-nu');
const enfase_SobreNu = document.querySelector('.enfase_SobreNu');
const carrossel_TextTitulo = document.querySelector('.titulo');
const carrossel_Text = document.querySelector('.carrossel-text');
const rodape_Text = document.querySelector('.rodape strong');
const rodape_Links = document.getElementsByClassName('links');

// Capturando tamanho da fonte máximo

var fontSobreNu = window.getComputedStyle(sobreNu, null);
var enfaseSobreNu = window.getComputedStyle(enfase_SobreNu, null);
var carrosselTitulo = window.getComputedStyle(carrossel_TextTitulo, null);
var carrosselText = window.getComputedStyle(carrossel_Text, null);

resizer();

var SobreNuMax = parseInt(fontSobreNu.getPropertyValue('font-size'));
var enfaseNuMax = parseInt(enfaseSobreNu.getPropertyValue('font-size'));
var carrosselTituloMax = parseInt(carrosselTitulo.getPropertyValue('font-size'));
var carrosselTextMax = parseInt(carrosselText.getPropertyValue('font-size'));

fontResizer();

// ----------------------------------------------------------------------------------- //


// Respectiva função para redimensionar os contents

function resizer() {

   // Capturando tamanho da janela do navegador

   var windowWidth = window.innerWidth;

   // Lógica para redimensionar os contents

   // Pega o tamanho atual da janela, multiplica por 100% e dividi pelo tamanho máximo que nesse caso é 1325 
   // assim obtendo a porcentagem atual em que se encontra a janela
   // depois subtrai de 100% para obter a porcentagem que foi reduzida

   // Para ajudar a entender abra o console do navegador, leia o que será printado e siga ajustando a janela;

   var porcentWindowResizerdown_teste = (windowWidth * 100) / windowWidthMax;

   console.log('Esta é a porcentagem em que a janela se encontra em relação ao tamanho total: ' + porcentWindowResizerdown_teste + '%');

   var porcentWindowResizerdown = (windowWidth * 100) / windowWidthMax - 100;

   console.log('Essa é a porcentagem em que foi reduzida a janela do tamanho total: ' + porcentWindowResizerdown + '%');

   // Essa parte serve somente para transformar o número negativo em positivo sem alterar seu valor se for diferente de zero

   var porcentWindowResizer = porcentWindowResizerdown * -1;

   console.log('Valor de cima porém positivo: ' + porcentWindowResizer + '%');
   console.log('---------------------------------------------------------');

   // Descobrindo quantos pixels dos elementos equivale a porcentagem tirada no código de cima
   // depois subtraindo deles este valor

   var calcContentHeight = nuVideosHeight * porcentWindowResizer / 100;
   var calcCarrosselHeight = carrosselHeight * porcentWindowResizer / 100;

   // Apenas formatação (Transformando de número com ponto flutuante para inteiro)

   var formatContent = Math.trunc(calcContentHeight);
   var formatCarrossel = Math.trunc(calcCarrosselHeight);

   // Subtraindo o valor nos elementos

   var newContentHeight = nuVideosHeight - formatContent + 80;
   var newCarrosselHeight = carrosselHeight - formatCarrossel;

   // Atribuindo novo tamanho dos contents de acordo com a lógica

   nuVideos.style.height = `${newContentHeight}px`;
   carrosselDiv.style.height = `${newCarrosselHeight}px`;

   if (windowWidth < 960) {

      minigame.style.display = 'none';


   } else {

      minigame.style.display = '';


   }

}

function fontResizer() {

   // Capturando tamanho da janela

   var windowWidth = window.innerWidth;

   // Tirando porcentagem do tamanho máximo para o tamanho atual

   var porcentWindowResizerdown = (windowWidth * 100) / windowWidthMax - 100;

   // Tornando esse valor positivo

   var porcentWindowResizer = porcentWindowResizerdown * - 1;

   // Calculando o valor equivalente a porcentagem tirada a cima, da fonte dos elementos

   var calcFontSize_sobreNu = SobreNuMax * porcentWindowResizer / 100;
   var calcFontSize_EnfaseSobreNu = enfaseNuMax * porcentWindowResizer / 100;
   var calcFontSize_CarrosselTitulo = carrosselTituloMax * porcentWindowResizer / 100;
   var calcFontSize_CarrosselText = carrosselTextMax * porcentWindowResizer / 100;

   // Retirando casas decimais dos valores

   var formatCalc_sobreNu = Math.trunc(calcFontSize_sobreNu);
   var formatCalc_EnfaseSobreNu = Math.trunc(calcFontSize_EnfaseSobreNu);
   var formatCalc_CarrosselTitulo = Math.trunc(calcFontSize_CarrosselTitulo);
   var formatCalc_CarrosselText = Math.trunc(calcFontSize_CarrosselText);

   // Calculando o novo valor de fonte a ser atribuido

   var newFontSize_sobreNu = SobreNuMax - formatCalc_sobreNu + 1;
   var newFontSize_EnfaseSobreNu = enfaseNuMax - formatCalc_EnfaseSobreNu + 1;
   var newFontSize_CarrosselTitulo = carrosselTituloMax - formatCalc_CarrosselTitulo;
   var newFontSize_CarrosselText = carrosselTextMax - formatCalc_CarrosselText + 2;

   // Atribuindo novo valor de fonte aos elementos

   sobreNu.style.fontSize = `${newFontSize_sobreNu}px`;
   enfase_SobreNu.style.fontSize = `${newFontSize_EnfaseSobreNu}px`;
   carrossel_TextTitulo.style.fontSize = `${newFontSize_CarrosselTitulo}px`;
   carrossel_Text.style.fontSize = `${newFontSize_CarrosselText}px`;
   rodape_Text.style.fontSize = `${newFontSize_sobreNu}px`;

   for (var i = 0; i < rodape_Links.length; i++) {
      rodape_Links[i].style.fontSize = `${newFontSize_sobreNu}px`;

      if (i == rodape_Links - 1) {
         i = 6
      }

   }

}

// Evento para toda vez que a tela for redmensionada a rotina ser executada

window.addEventListener('resize', function () {

   resizer();
   fontResizer();

});