// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}
document.getElementById('send-btn').addEventListener('click', function() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if(message !== '') {
    displayMessage(message, 'user');
    simulateResponse(message); // Simulate a response
    input.value = ''; // Clear input field
  }
});

function displayMessage(message, sender) {
  const chatBox = document.getElementById('chat-box');
  const msgDiv = document.createElement('div');
  msgDiv.textContent = message;
  msgDiv.classList.add('message');
  if(sender === 'user') {
    msgDiv.classList.add('user');
  }
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function simulateResponse(userMessage) {
  // Simulate a simple response based on user message
  const response = "Echo: " + userMessage;
  setTimeout(() => displayMessage(response, 'bot'), 1000); // Simulate bot response delay
}


// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
const faqs = {
  "what do you do?": "I'm a software developer specializing in web development and quantum computing.",
  "contact information": "You can reach me via email at abhisekjha2020[at]gmail[dot]com.",
  // Add more questions and answers as needed
};

document.getElementById('send-btn').addEventListener('click', function() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim().toLowerCase(); // Convert to lowercase for matching
  if(message !== '') {
    displayMessage(message, 'user');
    const response = faqs[message] || "Sorry, I don't have an answer for that.";
    setTimeout(() => displayMessage(response, 'bot'), 1000); // Simulate bot response delay
    input.value = ''; // Clear input field
  }
});
window.onload = function() {
  displayMessage("Hi there! Ask me about the portfolio.", 'bot');
};
window.onload = function() {
  setTimeout(() => {
    displayMessage("Hello! How can I help you today? Feel free to ask me anything about the portfolio.", 'bot');
  }, 1000); // Give users a moment to see the homepage
};
document.querySelector('.chat-container').addEventListener('click', function() {
  this.classList.toggle('active');
});



