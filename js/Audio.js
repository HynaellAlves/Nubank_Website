// Capturando elemento audio

const audio = document.querySelector('audio');

//  Armazenando caminhos das faixas de audio

const Tracks = {

   track1: '/media/track1.mp3',
   track2: '/media/track2.mp3',
   track3: '/media/track3.mp3',

   // Método para verificar a faixa que está rodando
   //OBS: loop de faixas

   start() {

      const fila = audio.src.replace('http://127.0.0.1:5500', '');

      if (fila == '') {

         audio.src = Tracks.track1;

      } else if (fila == '/media/track1.mp3') {

         audio.src = Tracks.track2;

      } else if (fila == '/media/track2.mp3') {


         audio.src = Tracks.track3;

      } else {

         audio.src = Tracks.track1

      }


      audio.play();
      audio.volume = 0.1;

   },
   
   // Método para pausar faixa

   pause() {

      audio.pause();

   }


};

// Escutador de eventos que é executado assim que uma faixa termina de ser executada

audio.addEventListener('ended', () => {

   Tracks.start();



});

