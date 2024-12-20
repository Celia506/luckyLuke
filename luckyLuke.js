// boite secrete ///////////////////////////

function myFunction() {
    var x = document.getElementById("myDiv");
    if (window.getComputedStyle(x).visibility === "hidden") {
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "hidden";
    }
}

// formulaire/////////////////////////

function handleSubmit(event) {
    event.preventDefault();

    const formName = document.getElementById("name");
    const formEmail = document.getElementById("email");
    let valid = true;

    if (formName.value === "" || formEmail.value === "") {
        alert("Veuillez remplir votre Nom et e-mail");
        valid = false;
    }

    const messageField = document.getElementById("message");
    if (messageField.value.length < 50) {
        alert("Votre message doit contenir au moins 50 caractères");
        valid = false;
    }

    if (valid) {
        alert("Merci pour votre message");
        event.target.submit();
    }
}

document
    .getElementById("formulaire__id")
    .addEventListener("submit", handleSubmit);

    
// ///Image lightbox///////////////////

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll("img");
images.forEach(image => {
    image.addEventListener("click", e => {
        lightbox.classList.add("active");
        const img = document.createElement("img");
        img.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});
lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});
