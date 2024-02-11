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
    chatToggleBtn.addEventListener('click', () => {
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

    scrollBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    let menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    });

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
            simulateResponse(message);
            chatInput.value = ''; // Clear input field
        }
    }

    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        if (sender === 'bot') {
            simulateTypingEffect(messageElement, message);
        } else {
            messageElement.textContent = message;
        }
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
    }

    function simulateResponse(userMessage) {
        // Example static responses
        const response = "This is a static response. For dynamic responses, integrate with a server-side API.";
        setTimeout(() => displayMessage(response, 'bot'), 1000); // Simulate bot response delay
    }

    function simulateTypingEffect(element, message) {
        let index = 0;
        function type() {
            if (index < message.length) {
                element.textContent += message.charAt(index);
                index++;
                setTimeout(type, 50); // Typing speed in milliseconds
            }
        }
        type();
    }

    new Typed(".auto-type", {
        strings: ["am Abhisek", "am a Software Developer", "am fascinated about Quantum Computing"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
    });
});
