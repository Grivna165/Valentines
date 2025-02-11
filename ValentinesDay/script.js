const languages = [
    "Я люблю тебя (Russian)",
    "I love you (English)",
    "Te amo (Spanish)",
    "Je t'aime (French)",
    "Ich liebe dich (German)",
    "Ti amo (Italian)",
    "愛してる (Japanese)",
    "사랑해요 (Korean)",
    "我愛你 (Chinese)",
    "Αγαπώ σε (Greek)"
  ];
  
  const button = document.getElementById("createHearts");
  button.addEventListener("click", changeMessage);
  
  function changeMessage() {
    const message = document.getElementById("love-message");
    const randomIndex = Math.floor(Math.random() * languages.length);
    message.textContent = languages[randomIndex];
  }

    const heartsContainer = document.querySelector(".hearts-container");
    
    
    function createHearts() {
         const heartsContainer = document.querySelector('.hearts-container');
          for (let i = 0; i < 30; i++) { 
        const heart = document.createElement('div'); 
        heart.classList.add('heart');
         // Рандомное положение и размер сердечка 
         heart.style.left = `${Math.random() * 100}vw`;
          heart.style.width = `${Math.random() * 20 + 10}px`;
           heart.style.height = heart.style.width;
            heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
            
            heartsContainer.appendChild(heart); 
            // Удаление сердечек после завершения анимации
             heart.addEventListener('animationend', () => { heart.remove(); 
            });
           }
         }
