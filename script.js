// script.js

document.addEventListener('DOMContentLoaded', function() {
  const words = document.querySelectorAll('#animated-text .word');

  // Ensure each word starts with opacity 0
  words.forEach(word => {
    word.style.opacity = 0;
  });

  // Animate each word with a delay
  words.forEach((word, index) => {
    setTimeout(() => {
      word.style.opacity = 1;
      word.style.transition = 'opacity 0.5s ease-in-out'; // Smooth transition
    }, index * 300); // Delay between each word
  });
});
