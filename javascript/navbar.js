(function ($) {
  $(document).ready(function(){

    // hide .navbar-scroll and arrow first
    $(".navbar-scroll").hide();
    $(".navarrow").hide();

    // make navbar fixed and show arrow when scrolling past the logo
    $(function () {
        $(window).scroll(function () {

          var element = document.getElementById("navStatic");
          var elementHeight = element.offsetTop;
          var elementScroll = document.getElementById("navScroll").offsetTop;

          //console.log(elementHeight);
          //console.log("this.ScrollTop = " + $(this).scrollTop());
          //console.log("ScrollTop2 = " + elementScroll);

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > elementHeight) {
              $(".navbar-scroll").show();
              $(".navarrow").fadeIn();
              element.classList.add("sticky");

            }
            if ($(this).scrollTop() < elementScroll){
              element.classList.remove("sticky");
              $(".navbar-scroll").hide();
              $(".navarrow").fadeOut();
            }
        });
    });

});
  }(jQuery));
