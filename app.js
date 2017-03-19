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

          $('#timer').html(days);
          //, ' + hours + ' hours, ' + minutes + ' minutes and ' + seconds + ' seconds'
        });

        // Full Screen Hero
        checkSize();
        $(window).resize(checkSize);
        function checkSize() {
          var height = $('#hero').height();
          $('.fullscreen').css('height', height);
        }

        // Smooth Scroll Down Arrow
        $('#down-arrow').on('click', function() {
          $('html,body').animate({
            scrollTop: $("#social").offset().top},
            'slow');
        });

        // Smooth Scroll
        // $('a[href*="#"]:not([href="#"])').click(function() {
        //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        //     var target = $(this.hash);
        //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        //     if (target.length) {
        //       var menuHeight = $('.nav').height();
        //       $('html, body').animate({
        //         scrollTop: target.offset().top - menuHeight
        //       }, 1000);
        //       return false;
        //     }
        //   }
        // });

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

        // Display content from bands object
        var count = Object.keys(this.bands).length;
        for (i = 0; i < count; i++) {
          console.log(count);
          $('#lineup').append("<div data-id='" + i + "' class='band'>"
          + "<div class='logo'><img class='img' src='../img/" + this.bands[i].img + "' /></div>"
          + "<div class='band-info'>"
          + "<h1 class='band-name'>" + this.bands[i].name + "</h1>"
          + "<span class='divider'></span>"
          + "<p class='band-genre'>" + this.bands[i].genre + "</p>"
          + "</div>"
          + "</div>");
        }

        // Modal

        var $modal = $('#modal');
        var $btn = $('.band');
        var $close = $('.close')

        $btn.on('click', function() {
          var id = $(this).attr('data-id');
          $('#modal-photo img').attr('src', '../img/' + App.bands[id].photo);
          //console.log('ID = ' + id);
          $('#modal-name').text(App.bands[id].name);
          $('#modal-genre').text(App.bands[id].genre);
          $('#modal-fb').attr('href', App.bands[id].fb);
          $('#modal-music').attr('href', App.bands[id].music);
          $('.modal-bio').html(App.bands[id].bio);
          $modal.slideToggle();
          $modal.css('display', 'flex');
        });

        $close.on('click', function() {
          $modal.slideToggle();
        });


        // $(window).on('click', function(e) {
        //   if ($(e.target) == $modal) {
        //
        //   }
        // });
      },
      bands: {
        "0": {
          "name": "Countless Skies",
          "genre": "melodic death metal",
          "img": "cs-logo.png",
          "bio": "Test Bio",
          "music": "//countlessskies.com",
          "fb": "//facebook.com/countlessskies",
          "photo": "cs-promo.jpg"
        },
        "1": {
          "name": "King Leviathan",
          "genre": "blackened thrash metal",
          "img": "kl-logo.png",
          "bio": ["<p>King Leviathan are a four piece Blackened Thrash band from Brighton.</p><br>",
                  "<p>Devout worshipers of Speed, Violence and The Occult, King Leviathan have spread their psalms from their inception, and in only a few years of existence the cult has spread across the country.</p><br>",
                  "<p>Since the cults formation 2014, their Black Masses in dedication to the Old Gods have been performed at Mammothfest 2014, 2015 and 2016, the New Blood Stage at Bloodstock 2015, Thrashersaurus Norwich 2016, Frankfest 2016 and The Night Before Uprising 2016 supporting Venom Inc., Onslaught, Savage Messiah, Mask Of Judas, Ingested, One Machine, Reign Of Fury, Martyr Defiled and Cambion as well as tours across the UK supporting Spartan, Abhorrent Decimation, Wretched Soul, Oakhaart, Meta-Stasis, Vulgate and Stone Circle.</p><br>",
                  "<p>As the cult begins to enter their third year, the hands of the Old Gods weave the final preparations for King Leviathan's debut album release in 2017 - the follow up to 'The Shrine' and their Self-Titled EP – and the stars begin to wither, as the darkness begins to grow.</p><br>",
                  "<p>Will you join us in worship?</p><br>",
                  "<p>Worship The Old Gods.</p>"].join(''),
          "music": "//youtube.com/watch?v=d362QGl7zcc",
          "fb": "//facebook.com/KingLeviathanMetal",
          "photo": "kl-promo.jpg"
        },
        "2": {
          "name": "Isarnos",
          "genre": "folk metal",
          "img": "is-logo.png",
          "bio": "Isarnos Bio",
          "music": "#",
          "fb": "//facebook.com/Isarnos",
          "photo": "is-promo.jpg"
        },
        "3": {
          "name": "Dorylus",
          "genre": "melodic death metal",
          "img": "do-logo.png",
          "bio": "Dorylus Bio",
          "music": "#",
          "fb": "//facebook.com/dorylusband",
          "photo": "do-promo.jpg"
        },
        "4": {
          "name": "Cerberus Unchained",
          "genre": "melodic death metal",
          "img": "cu-logo.png",
          "bio": "Cerberus Unchained Bio",
          "music": "#",
          "fb": "//facebook.com/cerberusunchained",
          "photo": "cu-promo.jpg"
        },
        "5": {
          "name": "Atorc",
          "genre": "folk metal",
          "img": "at-logo.png",
          "bio": "Atorc Bio",
          "music": "#",
          "fb": "//facebook.com/atorcofficial",
          "photo": "at-promo.jpg"
        },
        "6": {
          "name": "With A Vengeance",
          "genre": "melodic metalcore",
          "img": "wav-logo.png",
          "bio": "WaV Bio",
          "music": "#",
          "fb": "//facebook.com/withavengeance",
          "photo": "wav-promo.jpg"
        },
        "7": {
          "name": "Draugr",
          "genre": "melodic death metal",
          "img": "dr-logo.png",
          "bio": "Draugr Bio",
          "music": "#",
          "fb": "//facebook.com/draugrband",
          "photo": "dr-promo.jpg"
        },
        "8": {
          "name": "Conform To Serve",
          "genre": "death metal",
          "img": "cts-logo.png",
          "bio": "Confirm To Serve Bio",
          "music": "#",
          "fb": "//facebook.com/conformtoserve",
          "photo": "cts-promo.jpg"
        }
      }
    };

App.Init();

})();
});
