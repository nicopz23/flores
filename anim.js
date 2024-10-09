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
  { text: "Regando las flores que de viejos nos veo fumando", time: 75 },
  { text: "No me da miedo admitir que", time: 93 },
  { text: "Desde la primera vez que te vi", time: 95 },
  { text: "Yo ya me lo veía venir", time: 99 },
  { text: "Estar all in por ti", time: 100.5 },
  { text: "Porque yo ya sabía a lo que iba", time: 103 },
  { text: "Querer comprarnos un terreno y construirnos la vida", time: 105 },
  { text: "Porque contigo lo sabía", time: 109 },
  { text: "Que tú y yo vamos por la milla", time: 112.5 },
  { text: "Y que siempre voy a querer saber si va bien todo en tu día", time: 113.2 },
  { text: "¿Qué tal va tu día?", time: 118 },
  { text: "Es lo que me importa, mi vida", time: 123 },
  { text: "Si vamos tarde por tu culpa, decir que es la mía", time: 127 },
  { text: "Aventando patadas de ahogado", time: 135 },
  { text: "Sin saber si la armamos, seguimos nadando", time: 138 },
  { text: "Por ti sigo tratando, cavando", time: 145 },
  { text: "Regando las flores que de viejos nos veo fumando", time: 148 },
  { text: "Aventando patadas de ahogado", time: 157 },
  { text: "Sin saber si la armamos, seguimos nadando", time: 159 },
  { text: "Por ti sigo tratando, cavando", time: 166 },
  { text: "Regando las flores que de viejos nos veo fumando", time: 171 },
  { text: "Llevaba tiempo buscando a quién cantarle", time: 176 },
  { text: "Sobre cuando me siento vulnerable", time: 181 },
  { text: "Te quiero...", time: 190 },

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