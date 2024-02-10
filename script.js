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

// Chat Interface JS Code
document.getElementById('send-btn').addEventListener('click', function() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if(message !== '') {
    displayMessage(message, 'user');
    simulateResponse(message); // Here, you could add more complex logic or API calls
    input.value = ''; // Clear input field
  }
});
function sendMessage() {
    const inputBox = document.getElementById('input-box');
    const userMessage = inputBox.value.trim();

    if (userMessage) {
        displayMessage(userMessage, 'user');
        displayMessage(getResponse(userMessage), 'bot');
        inputBox.value = ''; // Clear the input box
    }
}

function displayMessage(message, sender) {
    const messagesDiv = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');

    if (sender === 'user') {
        messageDiv.classList.add('user-message');
    } else {
        messageDiv.classList.add('bot-message');
    }

    messageDiv.textContent = message;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; 
}

function simulateResponse(userMessage) {
  const response = { "Echo: " + 'about': 'Hello, I am Abhisek. I am a Software Engineer.',
        'contact': 'You can reach me via email at abhisekjha2020@gmail.com or phone at .......',
        // Add more responses or a default response
        'default': 'I am not sure how to answer that. Here is some information about me: [Your Information].'
  setTimeout(() => displayMessage(response, 'bot'), 1000);
};
  const lowerInput = userMessage.toLowerCase();
  return responses[input.toLowerCase()] || responses['default'];
}

// Side Navigation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

cancelBtn.onclick = function() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close Side Navigation on Link Click
let navLinks = document.querySelectorAll(".menu li a");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

