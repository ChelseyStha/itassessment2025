let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
   
    Array.from(slides).forEach(slide => slide.style.display = "none");
    
  
        slideIndex = (slideIndex + 1) % slides.length;
    
   
    slides[slideIndex].style.display = "block";

    setTimeout(showSlides, 5000);
}


function plusSlides(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length; 
    showCurrentSlide();
}

function showCurrentSlide() {
    Array.from(slides).forEach(slide => slide.style.display = "none");
    slides[slideIndex].style.display = "block"; 
}


function validateForm() {
     const email = document.getElementById("email").value;
    if (!email.includes("@")) {
                alert("Please enter a valid email address!");


        return false;
    }
    return true;
}

// Start the slideshow
showSlides();