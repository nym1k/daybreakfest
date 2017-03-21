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
          + "<div class='logo'><img class='img' src='img/" + this.bands[i].img + "' /></div>"
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
          // $('#modal-photo img').attr('src', 'img/' + App.bands[id].photo);
          $('#modal-photo').css({
            'background' : 'url(img/' + App.bands[id].photo + ') no-repeat center',
            'background-size' : 'cover'
          });
          $('#modal-name').text(App.bands[id].name);
          $('#modal-genre').text(App.bands[id].genre);
          $('#modal-fb').attr('href', App.bands[id].fb);
          $('#modal-music').attr('href', App.bands[id].music);
          $('.modal-bio').html(App.bands[id].bio);
          $modal.slideDown();
          $modal.css('display', 'flex');
          $("body").css('overflow', 'hidden');
        });

        $close.on('click', function() {
          $modal.slideUp();
          $("body").css('overflow', 'auto');
        });

        $modal.on('click', function(e) {
          if (e.target === this) $modal.slideUp();
          $("body").css('overflow', 'auto');
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
          "bio": ["<p>COUNTLESS SKIES burst onto the modern metal scene with their debut self-titled EP in late 2014. Blending progressive and darkly intense music influenced by their Scandinavian melodeth heroes, the EP began a flood of shows up and down the UK.</p><br>",
          "<p>After winning the Bedfordshire 'Metal to the Masses' competition, they secured a slot on the New Blood stage at the UK’s No1 independent metal festival, Bloodstock Open Air 2015. Building upon their rapid momentum, they continue their conquest of the UK to support their debut full-length released last June through Kolony Records.</p><br>",
          "<p>With a tremendous start, the future looks bright for Countless Skies.</p>"].join(''),
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
          "bio": ["<p><em>\"Blown away would be an understatement… If you like your Folk Metal to be something out of this world then please check out Isarnos.\" - Metal-rules.com</em></p><br>",
                  "<p>Listed in Reverb Nation's \"top 10\" of ALL London metal bands, Isarnos have received worldwide exposure, having been featured on radio stations in the UK, Europe and South America, while their Soundcloud Demos have been heard in over 110 countries.</p><br>",
                  "<p>Having made notable appearances at Warhorns, Bloodstock and Luton's own Castlefest, Isarnos hold their own in even the heavier side of the genre, having performed alongside international Black/Death metal bands including HATE and Noctem in 2016.</p><br>",
                  "<p><em>\"Never have you seen such crazy instruments put together to create a folk metal bombastic brilliance as we got with with Isarnos… there is always one that goes above and beyond in the weird and wonderful and this year it belonged to Isarnos\" - fakegeeks.co.uk</em></p><br>",
                  "<p>Isarnos will be making a huge appearance in 2017 in support of Memoriam and Grand Magus, and will host their inaugural invitational show \"The Metal Alliance\" in London in June.</p><br>",
                  "<p><em>\"These guys have a different sound to most bands even in the folk metal genre... If you get the chance to see these guys live at a venue near you – do it! Consider my eyes well and truly opened.\" - Overdrive.ie</em></p><br>",
                  "<p>Continuing to re-define the genre - Isarnos stand out in the UK Folk Metal scene by showcasing sheer technical brilliance of all the instrumentalists in the band, demonstrating that Folk Metal is not just a gimmick of painted faces and twee drinking songs, but a credible sub-genre of Metal.<p><br>",
                  "<p>Make no mistake, Isarnos will hit you hard and heavy.</p>"].join(''),
          "music": "//soundlcoud.com/isarnos",
          "fb": "//facebook.com/Isarnos",
          "photo": "is-promo.jpg"
        },
        "3": {
          "name": "Dorylus",
          "genre": "death/thrash metal",
          "img": "do-logo.png",
          "bio": ["<p>4 piece Death/Thrash metal band from Hertfordshire.</p><br>",
          "<p>Heavily influenced by Slayer, Machine Head, Death, Amon Amarth and lots more.</p><br>",
          "<p>Since their inception in January 2015 they've released an EP entitled ‘The Rapture’, were finalists in the London M2TM competition 2016, and have also had the honour of playing the Underworld in Camden Town.</p>"].join(''),
          "music": "//youtube.com/watch?v=59f9jsm9njE",
          "fb": "//facebook.com/dorylusband",
          "photo": "do-promo.jpg"
        },
        "4": {
          "name": "Cerberus Unchained",
          "genre": "melodic death metal",
          "img": "cu-logo.png",
          "bio": ["<p>Cerberus Unchained was born out of a joint love for heavy music in all of its guises in 2016.</p><br>",
          "<p>The band consists of Richard Stevenson torturing a microphone to within an inch of its life, Sam Clarke and Andy Croughan shredding like mad bastards and Simon Marston fingering the bass.</p>"].join(''),
          "music": "//cerberusunchained.bandcamp.com",
          "fb": "//facebook.com/cerberusunchained",
          "photo": "cu-promo.jpg"
        },
        "5": {
          "name": "Atorc",
          "genre": "folk metal",
          "img": "at-logo.png",
          "bio": ["<p>From the darkest depths of Suffolk, The six Folk Metal Warriors of East Anglia are always ready for raiding and a drinking session. From head-bangin' to toe-tappin' in twenty seconds, they'll be sure to give you a night to remember.</p><br>",
          "<p>Influenced not only by the folk metal bands of Scandinavia and Mainland Europe, we also are influenced by a lot of Power metal, Thrash metal as well as melodic metal bands too.</p><br>",
          "<p>Our overall sound' has clean and harsh vocals, roaring guitar riffs, booming bass lines, harmonic keyboards, leg slapping violins, and fist-pounding drum beats.</p><br>",
          "<p>Put them together and you get the Battle-Hardened Folk Metal Warriors of East Anglia, ready for war!</p>"].join(''),
          "music": "//youtube.com/channel/UCIxfkWy2qmZ1mpfj2cDHpdg",
          "fb": "//facebook.com/atorcofficial",
          "photo": "at-promo.jpg"
        },
        "6": {
          "name": "With A Vengeance",
          "genre": "melodic metalcore",
          "img": "wav-logo.png",
          "bio": ["<p>With A Vengeance are a groove/melodic metal-core band based in and around south London.</p><br>",
          "<p>Delivering epic thrashy riffs that are rich with an old school vibe, along with an extreme but melodic in your face sound, guaranteed to get your feet tapping or head banging!</p><br>",
          "<p>The band consists of Harrison Rickelsford on vocals, Max Din on 1st guitar, Samuel Fowler on bass, Jay Clark on 2nd guitar and finally Samuel Walton on drums.</p><br>",
          "Check out their latest E.P 'Ouroboros' to get a taste of what's to come!</p>"].join(''),
          "music": "//youtu.be/5fYOJIR5PHQ",
          "fb": "//facebook.com/withavengeance",
          "photo": "wav-promo.jpg"
        },
        "7": {
          "name": "Draugr",
          "genre": "melodic death metal",
          "img": "dr-logo.png",
          "bio": ["<p>Draugr are a melodic blackened death metal band from Hertfordshire with a sound similar to that of the Scandinavian metal scene. There is a variety of styles incorporated within the music making it fast, epic, and powerful with a dark theatrical element and English and Finnish lyrics.</p><br>",
          "<p>A five piece band with many different influences, Draugr’s sound is best compared to Children of Bodom, Kalmah, Omnium gatherum, Wintersun, and Eternal Tears of Sorrow.</p>"].join(''),
          "music": "//draugr.bandcamp.com",
          "fb": "//facebook.com/draugrband",
          "photo": "dr-promo.jpg"
        },
        "8": {
          "name": "Conform To Serve",
          "genre": "blackened death metal",
          "img": "cts-logo.png",
          "bio": ["<p>Formed in 2015, Conform to Serve have made their mark on the local metal scene with crushing riffs and blistering solos.</p><br>",
          "<p>Their debut EP 'Industrialised Worship', self written/recorded/produced by Pete Harris, was released on September 5th 2016.</p><br>",
          "<p>The band are working on a new album, crafting thier extreme blend of death/black metal in time for a 2017 release!</p>"].join(''),
          "music": "//conformtoserve.bandcamp.com",
          "fb": "//facebook.com/conformtoserve",
          "photo": "cts-promo.jpg"
        }
      }
    };

App.Init();

})();
});
