$(function(){
  (function(){
    var App = {
      Init: function() {
        App.UI();
      },
      UI: function(){

        // Countdown Timer
        var countdownDate = new Date("Apr 1, 2017 15:30:00").getTime();
        var x = setInterval(function(){
          var now = new Date().getTime();
          var timeLeft = countdownDate - now;

          var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

          $('#countdown').html(days + ' days, ' + hours + ' hours, ' + minutes + ' minutes and ' + seconds + ' seconds');
        });

        // Full Screen Hero
        checkSize();
        $(window).resize(checkSize);
        function checkSize() {
          var height = $('#hero').height();
          $('.fullscreen').css('height', height);
        }

        // Smooth Scroll
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              var menuHeight = $('.nav').height();
              $('html, body').animate({
                scrollTop: target.offset().top - menuHeight
              }, 1000);
              return false;
            }
          }
        });

        // Apply Header Style After Hero
        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          var height = $('#hero').height();
          var menuHeight = $('.nav').height();

          if (scroll >= height - menuHeight) {
            $(".nav").addClass("dark-header");
          } else {
            $(".nav").removeClass("dark-header");
          }
        });

        // Modal

        var $modal = $('#modal');
        var $btn = $('.band');
        var $close = $('.close')

        $btn.on('click', function() {
          $modal.slideToggle();
        });

        $close.on('click', function() {
          $modal.slideToggle();
        });

        // $(window).on('click', function(e) {
        //   if ($(e.target) == $modal) {
        //
        //   }
        // });
      }
    };

App.Init();

})();
});
