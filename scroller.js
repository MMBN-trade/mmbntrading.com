window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    $("#mmbnLogo").animate({width: "4vw"}, 100, "swing");
    // console.log("shrinking...");
  } else {
    $("#mmbnLogo").animate({width: "8vw"}, 100, "swing");
    // console.log("reverting...");  
    }
}
