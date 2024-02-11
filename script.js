document.addEventListener('DOMContentLoaded', () => {
    // Sticky Navigation Menu JS Code
    let nav = document.querySelector("nav");
    let scrollBtn = document.querySelector(".scroll-button a");
    window.onscroll = function() {
      if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
      }else{
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
      }
    };

    // Menu Toggle for Mobile
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    // Scroll to Top Button
    scrollBtn.addEventListener('click', (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        e.preventDefault();
    });

    // Chat Interface JS Code
    const sendBtn = document.getElementById('send-btn');
    const chatInput = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');

    sendBtn.addEventListener('click', () => {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            displayMessage(userMessage, 'user');
            simulateResponse(userMessage);
            chatInput.value = ''; // Clear input field
        }
    });

    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
    }

    function simulateResponse(userMessage) {
    let response;

    // Convert the user message to lowercase for easier comparison
    const messageLower = userMessage.toLowerCase();

    // Example of adding more personalized responses
    if (messageLower.includes("hello")) {
        response = "Hi there! How can I help you today?";
    } else if (messageLower.includes("what do you do")) {
        response = "I'm a virtual assistant designed to provide information about Abhisek Jha's portfolio.";
    } else if (messageLower.includes("contact")) {
        response = "You can reach me via email at abhisekjha2020@gmail.com.";
    } else if (messageLower.includes("projects")) {
        response = "You can check out the Projects section for more details on my work!";
    } else {
        // Default response for unrecognized inputs
        response = "Sorry, I didn't quite catch that. Could you rephrase your question or ask something else?";
    }

    setTimeout(() => displayMessage(response, 'bot'), 1000);
}


    // Side Navigation Menu JS Code
    let cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = function() {
      navbar.classList.add("active");
      menuBtn.style.opacity = "0";
      menuBtn.style.pointerEvents = "none";
      document.body.style.overflow = "hidden";
      scrollBtn.style.pointerEvents = "none";
    };

    cancelBtn.onclick = function() {
      navbar.classList.remove("active");
      menuBtn.style.opacity = "1";
      menuBtn.style.pointerEvents = "auto";
      document.body.style.overflow = "auto";
      scrollBtn.style.pointerEvents = "auto";
    };

    // Close Side Navigation on Link Click
    let navLinks = document.querySelectorAll(".menu li a");
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", function() {
        navbar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
      });
    }

    // Typed.js for Typewriter Effect Initialization
    new Typed(".auto-type", {
        strings: ["am Abhisek", "am a Software Developer", "am fascinated about Quantum Computing"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
    });
});
