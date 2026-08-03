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
