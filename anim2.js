// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
/*
Solo quiero verte sonreír
I just wanna see you smile

Solo quiero hacerte mía
I just wanna make you mine

Podemos pasar el tiempo, fumando y relajando
We can spend time, smoke away the time

Podemos ir a donde quieras
We can go anywhere you ever wanted

Cualquier cosa que hayas soñado
Anything you ever dreamed


Puedo volver realidad tus sueños
I can make your dreams come true

Estaré solo, sin tripulación
I'll be on my own, no crew

Aquí afuera haciendo estos movimientos
Out here making these moves

Cantando estos blues de la gran ciudad
Singing these big city blues

No quiero pensar en ti
I don't wanna think about you

Cada vez que pienso en ti
Every time I think about you

Te juro que me vuelvo a enamorar
I swear I fall in love again

Recuerdo todo lo que dijiste
I remember everything you said

Prométeme que es real
Promise me it's real

Chica, tengo un trato
Girl, I got a deal

Podrías ser mi chica si yo pudiera ser tu mundo
You could be my girl if I could be your world

Prométeme que es real
Promise me it's real

Chica, tengo un trato
Girl, I got a deal

Podrías ser mi chica si yo pudiera ser tu mundo
You could be my girl if I could be your world

(Coldhart, Coldhart)
(Coldhart, Coldhart)

And we can leave this club
Y podemos dejar este club

And we can get fucked up
Y podemos jodernos

In the back of the Chevy
En la parte trasera del Chevy

Girl, I felt your heart beating heavy for me
Chica, sentí tu corazón latiendo fuerte por mí

And I just wanna see you shine
Y solo quiero verte brillar

Girl, you got stars for eyes
Chica, tus ojos son como las estrellas

And she sweet like Texas tea
Y ella dulce como el té de Texas

With a ass from Tennessee
Con un culo de Tennessee

And we can take the long way home
Y podemos tomar el camino más largo a casa

'Cause I don't wanna see you go
Porque no quiero verte ir

Sitting, drinking whiskey, hoping that you miss me
Sentado, bebiendo whisky, esperando que me extrañes

Baby, say you do (please, say you do)
Bebé, dime lo que haces (por favor, dime lo que haces)

Maybe say u doo
*/
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