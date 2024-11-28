// Variable para almacenar el idioma seleccionado
let selectedLanguage = '';

// Traducciones
const translations = {
    es: {
        greeting: "¡Hola amigos!",
        message: "En este Día de Acción de Gracias, quiero agradecerles por su apoyo, su amistad y por estar siempre presentes. ¡Son muy importantes para mí!",
        hiddenText: "Quiero que sepan que valoro cada momento compartido con ustedes. Gracias por ser parte de mi vida.",
        signature: "Con cariño, Victor ❤️",
        revealButton: "Haz clic para leer más...",
        backButton: "Volver"
    },
    en: {
        greeting: "Hello friends!",
        message: "On this Thanksgiving Day, I want to thank you for your support, friendship, and always being there. You mean so much to me!",
        hiddenText: "I want you to know that I treasure every moment shared with you. Thank you for being part of my life.",
        signature: "With love, Victor ❤️",
        revealButton: "Click to read more...",
        backButton: "Back"
    },
    pt: {
        greeting: "Olá amigos!",
        message: "Neste Dia de Ação de Graças, quero agradecer pelo apoio, amizade e por sempre estarem presentes. Vocês são muito importantes para mim!",
        hiddenText: "Quero que saibam que valorizo cada momento compartilhado com vocês. Obrigado por fazerem parte da minha vida.",
        signature: "Com carinho, Victor ❤️",
        revealButton: "Clique para ler mais...",
        backButton: "Voltar"
    }
};

// Función para seleccionar idioma
function selectLanguage(lang) {
    selectedLanguage = lang; // Almacenar el idioma seleccionado
    const { greeting, message, hiddenText, signature, revealButton, backButton } = translations[lang];

    // Actualizar los textos en la tarjeta
    document.getElementById("greeting").innerText = greeting;
    document.getElementById("message").innerText = message;
    document.getElementById("hiddenText").innerText = hiddenText;
    document.getElementById("signature").innerText = signature;
    document.querySelector(".reveal-button").innerText = revealButton; // Botón traducido
    document.querySelector(".back-button").innerText = backButton; // Botón traducido

    // Restablecer el estado de la tarjeta
    const hiddenMessage = document.getElementById("hiddenMessage");
    hiddenMessage.style.display = "none"; // Ocultar mensaje final
    document.querySelector(".card").classList.remove("revealed"); // Mostrar mensaje inicial

    // Mostrar la tarjeta y ocultar la selección de idioma
    document.getElementById("languageSelection").classList.add("hidden");
    document.getElementById("card").style.display = "block";
}

// Función para revelar el mensaje oculto
function revealMessage() {
    const hiddenMessage = document.getElementById("hiddenMessage");
    const card = document.querySelector(".card");
    hiddenMessage.style.display = "block"; // Mostrar mensaje final
    card.classList.add("revealed"); // Ocultar contenido inicial
}

// Función para volver a la selección de idioma
function goBack() {
    // Ocultar la tarjeta y mostrar la selección de idioma
    document.getElementById("card").style.display = "none";
    document.getElementById("languageSelection").classList.remove("hidden");
}
