document.addEventListener('DOMContentLoaded', () => {
    // Sticky Navigation Menu JS Code
    let nav = document.querySelector("nav");
    let scrollBtn = document.querySelector(".scroll-button a");
    let chatToggleBtn = document.getElementById('chat-toggle-btn');
    let chatContainer = document.getElementById('chat-container');
    let sendBtn = document.getElementById('send-btn');
    let chatInput = document.getElementById('chat-input');
    let chatBox = document.getElementById('chat-box');

    // Toggle Chat Container
    chatToggleBtn.addEventListener('click', function() {
        chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';
    });

    window.onscroll = function() {
        if (document.documentElement.scrollTop > 20) {
            nav.classList.add("sticky");
            scrollBtn.style.display = "block";
        } else {
            nav.classList.remove("sticky");
            scrollBtn.style.display = "none";
        }
    };

    // Smooth scroll to top
    scrollBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mobile Menu Toggle
    let menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    });

    // Send Message on Button Click or Enter Key Press
    sendBtn.addEventListener('click', () => sendMessage());
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            displayMessage(message, 'user');
            fetchDynamicResponse(message); // Fetch dynamic response
            chatInput.value = ''; // Clear input field
        }
    }

    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
    }

    // Example function to fetch dynamic response (to be implemented)
    async function fetchDynamicResponse(userMessage) {
        // Placeholder: Implement API call or server request here
        // Simulate API call delay
        setTimeout(() => {
            const response = "This is a simulated response.";
            displayMessage(response, 'bot');
        }, 1000);
    }

    // Initialize typewriter effect
    new Typed(".auto-type", {
        strings: ["am Abhisek", "am a Software Developer", "am fascinated about Quantum Computing"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
    });
});
