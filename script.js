document.addEventListener('DOMContentLoaded', () => {
    // Sticky Navigation Menu JS Code
    let nav = document.querySelector("nav");
    let scrollBtn = document.querySelector(".scroll-button a");
    
    window.onscroll = function() {
        if (document.documentElement.scrollTop > 20) {
            nav.classList.add("sticky");
            scrollBtn.style.display = "block";
        } else {
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

    // Send message on Enter key press
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Prevent the default action
            sendBtn.click(); // Click the send button programmatically
        }
    });

    // Display message in chat
    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);

        if (sender === 'bot') {
            let typedText = '';
            let charIndex = 0;
            const typingSpeed = 50; // Milliseconds between each character

            function typeChar() {
                if (charIndex < message.length) {
                    typedText += message.charAt(charIndex++);
                    messageElement.textContent = typedText;
                    setTimeout(typeChar, typingSpeed);
                }
            }
            typeChar();
        } else {
            messageElement.textContent = message;
        }
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
    }

    // Simulate response based on user input
    function simulateResponse(userMessage) {
        const responses = {
            "hello": "Hi there! How can I help you today?",
            "what do you do": "I'm a virtual assistant designed to provide information about Abhisek Jha's portfolio.",
            "contact": "You can reach me via email at abhisekjha2020@gmail.com.",
            "projects": "You can check out the Projects section for more details on my work!"
        };

        let response = "Sorry, I didn't quite catch that. Could you rephrase your question or ask something else?";
        const messageLower = userMessage.toLowerCase();
        
        Object.keys(responses).forEach(key => {
            if (messageLower.includes(key)) {
                response = responses[key];
            }
        });

        displayMessage(response, 'bot');
    }

    window.sendPredefinedMessage = sendPredefinedMessage;

    function sendPredefinedMessage(message) {
        displayMessage(message, 'user');
        setTimeout(() => simulateResponse(message), 1000);
    }

    // Typed.js for Typewriter Effect Initialization
    new Typed(".auto-type", {
        strings: ["am Abhisek", "am a Software Developer", "am fascinated about Quantum Computing"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
    });
});
