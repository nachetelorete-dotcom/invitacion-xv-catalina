function openInvitation() {

    document.getElementById("welcome").style.display = "none";

    document.getElementById("invitation").classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



// Cuenta regresiva

const eventDate = new Date("September 19, 2026 21:00:00").getTime();


const countdown = setInterval(function() {


    const now = new Date().getTime();


    const distance = eventDate - now;


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;



    if (distance < 0) {

        clearInterval(countdown);

        document.querySelector(".timer").innerHTML =
        "¡Llegó el gran día! ✨";

    }


}, 1000);




// Copiar alias


function copyAlias(){

    navigator.clipboard.writeText(
        "catitagallardo"
    );


    alert(
        "Alias copiado: catitagallardo ✨"
    );

}

function sendConfirmation(){

    const name = document.getElementById("name").value;

    const attendance = document.getElementById("attendance").value;

    const food = document.getElementById("food").value;


    const message = 
    `Hola Catalina ✨

Soy ${name}.

Confirmo mi asistencia:
${attendance}

Tipo de alimentación:
${food}

¡Gracias por la invitación! 💙`;


    const phone = "5492243405031";


    const url =
    "https://wa.me/" + phone +
    "?text=" +
    encodeURIComponent(message);


    window.open(url, "_blank");

}

let currentSlide = 1;


const totalSlides = 6;


function changeSlide(direction){

    currentSlide += direction;


    if(currentSlide > totalSlides){

        currentSlide = 1;

    }


    if(currentSlide < 1){

        currentSlide = totalSlides;

    }


    document.getElementById("slideImage").src =
    "assets/foto" + currentSlide + ".jpg";

}

window.onload = function(){

    document.getElementById("slideImage").src =
    "assets/foto1.jpg";

};

/* =========================
   ANIMACIÓN AL HACER SCROLL
========================= */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.35
});

reveals.forEach(section => {

    observer.observe(section);

});

/* =========================
   PÉTALOS CANVAS
========================= */

const canvas = document.getElementById("petalCanvas");
const ctx = canvas.getContext("2d");

let petals = [];


function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}


resizeCanvas();


window.addEventListener("resize", resizeCanvas);



function createPetal(){

    return {

    x: Math.random() * canvas.width,

    y: Math.random() * canvas.height,

    size: 6 + Math.random() * 10,

    speed: 0.4 + Math.random() * 1.2,

    sway: Math.random() * 1.5,

    angle: Math.random() * Math.PI * 2,

    opacity: 0.25 + Math.random() * 0.35,

    color: Math.random() > 0.8
    ? "rgba(201,162,39,"
    : "rgba(255,220,230,"

};

}


for(let i = 0; i < 12; i++){

    petals.push(createPetal());

}



function animatePetals(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    petals.forEach(p => {


        p.y += p.speed;

        p.x += Math.sin(p.angle) * 0.8;

        p.angle += .02;


        ctx.save();


        ctx.translate(
            p.x,
            p.y
        );


        ctx.rotate(p.angle);


        const colors = [
           "rgba(255,220,230,.55)",
           "rgba(255,245,220,.45)",
           "rgba(255,255,255,.45)"
       ];

       ctx.fillStyle =
       p.color + p.opacity + ")";

       ctx.beginPath();

       ctx.ellipse(
           0,
           0,
           p.size,
           p.size / 2,
           0,
           0,
           Math.PI * 2
);


        ctx.fill();


        ctx.restore();



        if(p.y > canvas.height + 20){

            p.y = -20;

            p.x = Math.random() * canvas.width;

        }


    });


    requestAnimationFrame(animatePetals);

}


animatePetals();







