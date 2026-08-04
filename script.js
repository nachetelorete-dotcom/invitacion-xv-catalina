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





