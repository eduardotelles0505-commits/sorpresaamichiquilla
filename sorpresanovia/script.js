const botonSi = document.getElementById("si");
const botonNo = document.getElementById("no");
const mensaje = document.getElementById("mensaje");
const pantallaFinal = document.getElementById("final");

let tamañoSi = 1;

const mensajes = [
    "¿Segura? 🥺",
    "Piénsalo otra vez ❤️",
    "No seas así conmigo 😭",
    "Mira que el Sí se está haciendo más grande 👀",
    "Cada vez te queda menos opción 😂❤️",
    "¿De verdad quieres decir que no? 🥹",
    "Yo sé que en el fondo quieres decir que sí ❤️",
    "Última oportunidad... 😏",
    "Ya sabes cuál es la respuesta correcta ❤️"
];

let contador = 0;

botonNo.addEventListener("click", function () {

    // Hacer crecer el botón SÍ
    tamañoSi += 0.25;

    botonSi.style.transform = `scale(${tamañoSi})`;

    // Cambiar mensaje
    mensaje.textContent = mensajes[contador % mensajes.length];

    contador++;

    // Hacer el botón NO un poquito más pequeño
    const tamañoNo = Math.max(0.55, 1 - contador * 0.06);
    botonNo.style.transform = `scale(${tamañoNo})`;
});


botonSi.addEventListener("click", function () {

    // Ocultar la pantalla inicial
    document.querySelector(".contenedor").style.display = "none";

    // Mostrar la pantalla final
    pantallaFinal.style.display = "flex";

    crearCorazones();
});


function crearCorazones() {

    for (let i = 0; i < 35; i++) {

        const corazon = document.createElement("div");

        corazon.textContent = "❤️";

        corazon.style.position = "fixed";
        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.top = "100vh";
        corazon.style.fontSize = (15 + Math.random() * 30) + "px";
        corazon.style.zIndex = "20";
        corazon.style.pointerEvents = "none";

        document.body.appendChild(corazon);

        const duracion = 3 + Math.random() * 4;

        corazon.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(-110vh) rotate(${Math.random() * 360}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duracion * 1000,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            corazon.remove();
        }, duracion * 1000);
    }
}