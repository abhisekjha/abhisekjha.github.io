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

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.textContent = message;
    if (sender === 'bot') {
        messageDiv.style.backgroundColor = '#add8e6'; // Different color for bot messages
    }
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
}

function simulateResponse(userMessage) {
  const response = { "Echo: " + 'about': 'Hello, I am [Your Name]. I am a [Your Profession].',
        'contact': 'You can reach me via email at [Your Email] or phone at [Your Phone Number].',
        // Add more responses or a default response
        'default': 'I am not sure how to answer that. Here is some information about me: [Your Information].'
  setTimeout(() => displayMessage(response, 'bot'), 1000);
};
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

