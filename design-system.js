function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Function to handle link clicks and highlight the active link
  function handleLinkClick(event) {
      // Prevent the default behavior of the link
      event.preventDefault();

      // Remove 'active' class from all links
      document.querySelectorAll('.topnav__link, .sidebar-nav__link').forEach(function (link) {
          link.classList.remove('active');
      });

      // Add 'active' class to the clicked link
      event.target.classList.add('active');
  }

  // Add click event listeners to the links
  document.querySelectorAll('.topnav__link, .sidebar-nav__link').forEach(function (link) {
      link.addEventListener('click', function (event) {
          handleLinkClick(event);
      });
  });

  // Highlight the active link on initial page load
  highlightActiveLink();

  // Function to highlight the active link
  function highlightActiveLink() {
      // Get the current page URL
      var currentPagePath = window.location.pathname;

      // Get the link corresponding to the current page URL
      var activeLink = document.querySelector(`.topnav__link[href$="${currentPagePath}"], .sidebar-nav__link[href$="${currentPagePath}"]`);

      // Add 'active' class to the link
      if (activeLink) {
          activeLink.classList.add('active');
      }
  }
});
