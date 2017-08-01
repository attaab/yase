window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("navbar").style.display = "block";
        document.getElementById("navbar").style.backgroundColor = " #ffffff";
         document.getElementById("navbar").style.position = "fixed";
          document.getElementById("navbar").style.color = "black";
          document.getElementById("navbar").style.transition = "all 0.6s ease";
           document.getElementById("navbar").style.width = "100%";
           document.getElementById("navbar").style.boxShadow = "0 2px 15px rgba(0,0,0,0.43)";
           $('a#read-article').css("color", "black");
           $('#navbar').addClass('animated bounceInUp');
    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
         document.getElementById("navbar").style.boxShadow = "none";
          $('a#read-article').css("color", "white");
           $('#navbar').removeClass('animated bounceInUp');

    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

// end if


