//Shawn Window

/* Reload Position */
window.onbeforeunload = function () {
    window.scrollTo(0,0);
}; 
/* Reload Position */

window.addEventListener("scroll", function () {
    const navigation = document.querySelector("nav ul");
    const scrollPosition = window.scrollY; // Current scroll position

    if (scrollPosition > 1) {
        navigation.style.backgroundColor = "rgb(142, 202, 230)"; // Background after scroll
    } else {
        navigation.style.backgroundColor = ""; // Reset background (original)
    }
}); 

window.addEventListener('load', function() {
    setTimeout(function() {
      document.body.style.overflow = 'visible'; // Change overflow to visible
      document.body.style.overflowX = 'hidden' 
    }, 3000); // 3000 milliseconds = 3 seconds
});

window.onload = function() {
    // Show "Hi" immediately
    const hiText = document.getElementById('hi');
    hiText.style.opacity = 1;
    hiText.style.transform = 'translateY(0)'; // Move to original position

    // Show "I'm Shawn" after 0.5 seconds
    setTimeout(() => {
        const shawnText = document.getElementById('shawn');
        shawnText.style.opacity = 1;
        shawnText.style.transform = 'translateY(0)'; // Move to original position
    }, 750); // Delay for "I'm Shawn"

    // Slide out the text after 2 seconds
    setTimeout(() => {
        const hiText = document.getElementById('hi');
        const shawnText = document.getElementById('shawn');
        
        // Apply the text slide out animation
        hiText.style.animation = 'textSlideOut 0.5s forwards';
        shawnText.style.animation = 'textSlideOut 0.5s forwards';

        // Slide out the container after a short delay
        setTimeout(() => {
            const slideContainer = document.getElementById('slideContainer');
            slideContainer.style.animation = 'slideOut 1s forwards'; // Slide out animation
        }, 250); // Wait for the text animation to complete
    }, 2500); // Wait for 2 seconds total (0s for "Hi," 0.5s for "I'm Shawn")

    
    const triangleContainer = document.getElementById('triangleContainer');

    function createTriangle() {
        const triangle = document.createElement('div');
        triangle.classList.add('triangle');

        // Random size
        const sizes = ['small', 'medium', 'large'];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        triangle.classList.add(randomSize);

        // Random horizontal position
        triangle.style.left = Math.random() * window.innerWidth + 'px';

        // Append triangle to container
        triangleContainer.appendChild(triangle);

        // Remove triangle after animation ends (5 seconds duration)
        setTimeout(() => {
            if (triangle) triangle.remove();
        }, 10000); // Match fall animation duration
    }

    // Triangle generation using requestAnimationFrame
    function generateTriangles() {
        createTriangle(); // Create a triangle
        setTimeout(() => {
            requestAnimationFrame(generateTriangles); // Schedule the next triangle
        }, 500); // Wait 1 second between triangles
    }

    // Start generating triangles
    generateTriangles();
};

/* Hidden */
document.addEventListener('DOMContentLoaded', function () {
    const hiddenElementsY = document.querySelectorAll('.hidden-elementY');
    const hiddenElementsLeft = document.querySelectorAll('.hidden-elementLeft');
    const hiddenElementsRight = document.querySelectorAll('.hidden-elementRight');   
    const hiddenElementFade = document.querySelectorAll('.hidden-elementFade');
    //Circle Exclusive
    const hiddenElementsYC = document.querySelectorAll('.hidden-elementYC'); 
    const hiddenElementsLeftC = document.querySelectorAll('.hidden-elementLeftC');
    const hiddenElementsRightC = document.querySelectorAll('.hidden-elementRightC');
    
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else{
            entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });
  
    hiddenElementsY.forEach(el => observer.observe(el));
    hiddenElementsLeft.forEach(el => observer.observe(el));
    hiddenElementsRight.forEach(el => observer.observe(el));  
    hiddenElementFade.forEach(el => observer.observe(el));  
    hiddenElementsYC.forEach(el => observer.observe(el));
    hiddenElementsLeftC.forEach(el => observer.observe(el));
    hiddenElementsRightC.forEach(el => observer.observe(el));
});
/* Hidden */


// Add slide out animation to the stylesheet
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes slideOut {
    0% {
        bottom: 0; /* Start position */
    }
    100% {
        bottom: 100vh; /* End position */
    }
}`, styleSheet.cssRules.length);
//Shawn Window