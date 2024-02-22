function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



  document.addEventListener('DOMContentLoaded', function () {
    // Function to handle link clicks
    function handleLinkClick(event) {
      // Remove 'active' class from all links
      document.querySelectorAll('.topnav__link, .sidebar-nav__link').forEach(function (link) {
        link.classList.remove('active');
      });

      // Add 'active' class to the clicked link
      event.target.classList.add('active');

      // Delay the removal of the 'active' class
      setTimeout(function () {
        event.target.classList.remove('active');
      }, 500); // Adjust the delay time (in milliseconds) as needed
    }

    // Get the links by their IDs
    var designSystemLink = document.getElementById('designSystemLink');
    var colorsLink = document.getElementById('colorsLink');
    var typographyLink = document.getElementById('typographyLink');

    // Add click event listeners to the links
    designSystemLink.addEventListener('click', handleLinkClick);
    colorsLink.addEventListener('click', handleLinkClick);
    typographyLink.addEventListener('click', handleLinkClick);

    // Check the current page URL and highlight the corresponding link
    var currentPage = window.location.href;
    if (currentPage.includes('index.html') || currentPage === '/') {
      designSystemLink.classList.add('active');
    }
    if (currentPage.includes('colours.html')) {
      colorsLink.classList.add('active');
    }
    if (currentPage.includes('typography.html')) {
      typographyLink.classList.add('active');
    }
  });

