$(".hero").fadeIn(3000);

$(document).ready(function () {
    $(window).scroll(function () {
        $('.scroll').each(function () {
            var top_of_element = $(this).offset().top;
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();

            if (bottom_of_screen > top_of_element) {
                $(this).css('opacity', '1');
            }
        });
    });
});


$("#gear").click(function(){
    $("#popUp").toggleClass("show");
  });

    

   