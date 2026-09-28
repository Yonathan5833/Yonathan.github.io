
/* ========================================
   BOTÓN DE SORPRESA
======================================== */

const surpriseButton =
    document.getElementById("surpriseButton");

const surprise =
    document.getElementById("surprise");


surpriseButton.addEventListener("click", () => {

    surprise.classList.add("show");

    surpriseButton.innerHTML =
        "💜 ¡Sorpresa! 💜";

    surpriseButton.disabled = true;

    // Desplazarse hacia la sorpresa

    setTimeout(() => {

        surprise.scrollIntoView({
            behavior: "smooth"
        });

    }, 300);

    createConfetti();

});


/* ========================================
   CONFETI
======================================== */

function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            ["💜", "✨", "🌸", "💗", "⭐"][
                Math.floor(Math.random() * 5)
            ];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =
            Math.random() * 20 + 15 + "px";

        confetti.style.zIndex = "100";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);


        const duration =
            Math.random() * 3 + 2;


        confetti.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1

                },

                {
                    transform:
                        `translateY(110vh)
                         rotate(${Math.random() * 720}deg)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    duration * 1000,

                easing:
                    "cubic-bezier(.2,.7,.3,1)"

            }

        );


        setTimeout(() => {

            confetti.remove();

        }, duration * 1000);

    }

}


/* ========================================
   CREAR ESTRELLAS EXTRA
======================================== */

function createStars() {

    for (let i = 0; i < 35; i++) {

        const star =
            document.createElement("span");

        star.innerHTML = "✦";

        star.style.position = "fixed";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.color = "#ffffff";

        star.style.opacity =
            Math.random();

        star.style.fontSize =
            Math.random() * 12 + 5 + "px";

        star.style.pointerEvents = "none";

        star.style.zIndex = "0";

        star.animate(

            [
                {
                    opacity: .2,
                    transform: "scale(.7)"
                },

                {
                    opacity: 1,
                    transform: "scale(1.4)"
                },

                {
                    opacity: .2,
                    transform: "scale(.7)"
                }

            ],

            {

                duration:
                    Math.random() * 3000 + 2000,

                iterations: Infinity

            }

        );

        document.body.appendChild(star);

    }

}


createStars();


/* ========================================
   EFECTO AL MOVER EL MOUSE
======================================== */

document.addEventListener(
    "mousemove",
    (event) => {

        const x =
            (event.clientX / window.innerWidth - .5) * 10;

        const y =
            (event.clientY / window.innerHeight - .5) * 10;


        document.querySelectorAll(".flower")
            .forEach((flower, index) => {

                const strength =
                    (index + 1) * .5;

                flower.style.transform =
                    `translate(${x * strength}px,
                               ${y * strength}px)`;

            });

    }
);

/* ========================================
   BOTÓN 🎵 → ÁLBUM DE RECUERDOS
========================================= */

const musicButton =
    document.getElementById("musicButton");

const recuerdos =
    document.getElementById("recuerdos");


let albumAbierto = false;


musicButton.addEventListener("click", () => {

    albumAbierto = !albumAbierto;


    if (albumAbierto) {

        recuerdos.classList.add("show");

        musicButton.classList.add("album-activo");

        musicButton.innerHTML = "💜";


        setTimeout(() => {

            recuerdos.scrollIntoView({
                behavior: "smooth"
            });

        }, 200);


    } else {

        recuerdos.classList.remove("show");

        musicButton.classList.remove("album-activo");

        musicButton.innerHTML = "💕";


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});



