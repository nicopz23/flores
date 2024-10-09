// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
/*
Solo quiero hacerte mía

Podemos pasar el tiempo, fumando y relajando

Podemos ir a donde quieras

Cualquier cosa que hayas soñado

Puedo volver realidad tus sueños

Estaré solo, sin tripulación

Aquí afuera haciendo estos movimientos

Cantando estos blues de la gran ciudad

No quiero pensar en ti

Cada vez que pienso en ti

Te juro que me vuelvo a enamorar

Recuerdo todo lo que dijiste

Prométeme que es real

Chica, tengo un trato

Podrías ser mi chica si yo pudiera ser tu mundo

Prométeme que es real

Chica, tengo un trato

Podrías ser mi chica si yo pudiera ser tu mundo

Y podemos dejar este club

Y podemos jodernos

En la parte trasera del Chevy

Chica, sentí tu corazón latiendo fuerte por mí

Y solo quiero verte brillar

Chica, tus ojos son como las estrellas

Y ella dulce como el té de Texas

Con un culo de Tennessee

Y podemos tomar el camino más largo a casa

Porque no quiero verte ir

Sentado, bebiendo whisky, esperando que me extrañes

Bebé, dime lo que haces (por favor, dime lo que haces)
*/
var lyricsData = [
  { text: "I just wanna see you smile", time: 10 },
  { text: "I just wanna make you mine", time: 11 },
  { text: "We can spend time, smoke away the time", time: 15  },
  { text: "We can go anywhere you ever wanted", time: 17 },
  { text: "Anything you ever dreamed", time: 21 },
  { text: "I can make your dreams come true", time: 22 },
  { text: "I'll be on my own, no crew", time: 25 },
  { text: "Out here making these moves", time: 27 },
  { text: "Singing these big city blues", time: 31 },
  { text: "I don't wanna think about you", time: 34 },
  { text: "Every time I think about you", time: 37 },
  { text: "I swear I fall in love again", time: 41 },
  { text: "I remember everything you said", time: 47 },
  { text: "Promise me it's real", time: 49 },
  { text: "Girl, I got a deal", time: 51 },
  { text: "You could be my girl if I can be your world", time: 54 },
  { text: "Promise me it's real", time: 64 },
  { text: "Girl, I got a deal", time: 65 },
  { text: "You could be my girl if I can be your world", time: 69 },
  { text: "And we can leave this club", time: 88 },
  { text: "And we can get fucked up", time: 89.5 },
  { text: "In the back of the Chevy", time: 93 },
  { text: "Girl, I felt your heart beating heavy for me", time: 97 },
  { text: "And I just wanna see you shine", time: 100 },
  { text: "Girl, you got stars for eyes", time: 104 },
  { text: "And she sweet like Texas tea", time: 107 },
  { text: "With a ass from Tennessee", time: 110 },
  { text: "And we can take the long way home", time: 113 },
  { text: "'Cause I don't wanna see you go", time: 115 },
  { text: "Sitting, drinking whiskey, hoping that you miss me", time: 118 },
  { text: "Baby, say you do", time: 122 },
  { text: "  .     .    Maybe say u doo.", time: 137 },
  { text: " .   Love U.", time: 150 },
  { text: "For u", time: 155 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 200 segundos (200,000 milisegundos)
setTimeout(ocultarTitulo, 200000);