function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  // carousel code
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("carousel-item");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  }
  function currentSlide(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-item");
    var dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { n = 1 }
    if (n < 1) { n = slides.length }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove('active');
    }
    
    // Remove the active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show the current slide and set the dot as active
    slides[n-1].style.display = "block";
    slides[n-1].classList.add('active');
    dots[n-1].className += " active";
}

// Initialize first slide
currentSlide(1);

  
  //forms
  
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission action
    alert('Our team will contact you within two business days.'); // Shows popup message
    this.reset(); // Resets the form fields
  });
  
  /*Accordian*/
  
  document.addEventListener('DOMContentLoaded', function () {
    var accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(function (accordion) {
      accordion.addEventListener('click', function () {
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    });
  });
  