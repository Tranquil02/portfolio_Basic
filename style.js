// alert("welcome");
window.addEventListener('scroll',reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for (var i=0; i < reveals.length;i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
///////////////////////////////////////////Active in navbar /////////////////////////////////
/// Get all the container reveal sections
var sections = document.querySelectorAll('.container.reveal');

// Get the navbar element and all the links inside it
var navbar = document.querySelector('.content');
var links = navbar.querySelectorAll('a');
document.getElementById('home').classList.add('acttive');

// Listen for the scroll event
window.addEventListener('scroll', function() {
  // Get the vertical position of the top of the viewport
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Loop through all the sections and check which one is in view
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];

    // Get the vertical position of the top and bottom of the section
    var sectionTop = section.offsetTop - 100;
    var sectionBottom = sectionTop + section.offsetHeight + 150;

    // If the section is in view, add the "active" class to its corresponding link
    if (sectionTop <= scrollTop && sectionBottom >= scrollTop) {
      var currentSectionId = section.id;
      for (var j = 0; j < links.length; j++) {
        var link = links[j];
        if (link.getAttribute('href') === '#' + currentSectionId) {
          link.classList.add('acttive');
        } else {
          link.classList.remove('acttive');
        }
      }
    }
  }
});





