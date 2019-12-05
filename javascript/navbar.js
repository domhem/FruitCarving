(function ($) {
  $(document).ready(function(){

    // hide .navbar-scroll first
    $(".navbar-scroll").hide();
    // make navbar fixed
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
              element.classList.add("sticky");

            }
            if ($(this).scrollTop() < elementScroll){
              element.classList.remove("sticky");
              $(".navbar-scroll").hide();
            }
        });
    });

});
  }(jQuery));
