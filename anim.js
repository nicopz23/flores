// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tu hueles a vainilla, te quiero", time: 2 },
  { text: "Dale abrazame otro rato", time: 4 },
  { text: "Dejame te soy sincero", time: 11  },
  { text: "Tiene tiempo que yo trato", time: 17 },
  { text: "Llevaba tiempo buscando a quien cantarle", time: 23 },
  { text: "Sobre cuando me siento vulnerable", time: 28 },
  { text: "Dale abrazame otro rato", time: 32 },
  { text: "Apapachame la vida entera", time: 38 },
  { text: "Quiero saberte a lo que quieres ", time: 39 },
  { text: "Llorar por lo que te hace llorar", time: 41 },
  { text: "Ser música de la que prefieres ", time: 44 },
  { text: "Y que nunca me quieras pausar", time: 46 },
  { text: "Quiero saberte a lo que quieres", time: 47 },
  { text: "Llorar por lo que te hace llorar", time: 50 },
  { text: "Ser música de la que prefieres", time: 52 },
  { text: "Y que nunca me quieras pausar", time: 54 },
  { text: "Aventando patadas de ahogado", time: 61 },
  { text: "Sin saber si la armamos, seguimos nadando", time: 67 },
  { text: "Por ti sigo tratando, cavando", time: 72 },
  { text: "Regando las flores que de viejos nos veo fumando", time: 78 },
  { text: "I only want to live in clouds", time: 83 },
  { text: "Where I'm now? I don't know why", time: 91 },
  { text: "Nice butterflies in my hands", time: 97 },
  { text: "Too much light for twilight", time: 104 },
  { text: "In the mood for the flowers love", time: 108 },
  { text: "At the time", time: 144 },
  { text: "The whisper of birds", time: 148 },
  { text: "Lonely before the sun cried", time: 153 },
  { text: "Fell from the sky", time: 158 },
  { text: "Like water drops", time: 164 },
  { text: "Where I'm now? I don't know why", time: 169 },
  { text: "Nice butterflies in my hands", time: 176 },
  { text: "Too much light for twilight", time: 183 },
  { text: "In the mood for the flowers", time: 188 },
  { text: "Love.", time: 140 },
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

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);