$(document).ready(function() {
    // Initialize all sliders
    $('.slider').each(function() {
      // Initialize the slider using the Slick library
      $(this).slick({
        dots: true, // Add navigation dots
        arrows: false // Remove navigation arrows
      });
    });
  });
  