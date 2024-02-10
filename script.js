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
    window.sendPredefinedMessage = function(message) {
        displayMessage(message, 'user');
    
        // Simulate typing before showing the response
        setTimeout(() => {
            simulateResponse(message);
        }, 1000); // Adjust delay as needed to simulate typing speed
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
    document.getElementById('chat-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Prevent the default action
            document.getElementById('send-btn').click(); // Click the send button programmatically
        }
    });

    // Display message in chat
    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
    }

    // Simulate response based on user input
    function simulateResponse(userMessage) {
    let response;
    const messageLower = userMessage.toLowerCase();
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('typing-indicator');
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        typingIndicator.appendChild(dot);
    }


        function sendPredefinedMessage(message) {
        // Display the user's predefined message in the chat
        displayMessage(message, 'user');
    
        // Simulate typing before showing the response
        setTimeout(() => {
            simulateResponse(message);
        }, 1000); // Adjust delay as needed to simulate typing speed
    }


    // Define responses
    if (messageLower.includes("hello")) {
        response = "Hi there! How can I help you today?";
    } else if (messageLower.includes("what do you do")) {
        response = "I'm a virtual assistant designed to provide information about Abhisek Jha's portfolio.";
    } else if (messageLower.includes("contact")) {
        response = "You can reach me via email at abhisekjha2020@gmail.com.";
    } else if (messageLower.includes("projects")) {
        response = "You can check out the Projects section for more details on my work!";
    } else {
        response = "Sorry, I didn't quite catch that. Could you rephrase your question or ask something else?";
    }

    // Show typing indicator
    chatBox.appendChild(typingIndicator);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Remove typing indicator and show response after a delay
    setTimeout(() => {
        chatBox.removeChild(typingIndicator);
        displayMessage(response, 'bot');
    }, 2000); // Adjust delay as needed
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
      navLinks[i].addEventListener("click", () => {
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
