$(document).ready(function() {


    'use strict';

    window.requestAnimFrame = (function(){
        return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
    })();

    /*===========================
    =            WOW            =
    ===========================*/
    new WOW().init();




    /*=================================
    =            Particles            =
    =================================*/

    var canvasID = 'particles',
        canvas = document.getElementById(canvasID);

    function initHeader() {
        width = $headerSizer.width();
        height = $headerSizer.height();

        canvas = document.getElementById('particles');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        circles = [];
        for(var x = 0; x < width * 0.3; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }

    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if (document.body.scrollTop > height) {
            animateHeader = false;
        } else {
            animateHeader = true;
        }
    }

    function resize() {
        width = $headerSizer.width();
        height = $headerSizer.height();
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0, 0, width, height);
            for(var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    function Circle() {
        var self = this;

        (function() {
            self.pos = {};
            init();
        })();

        function init() {
            self.pos.x = Math.random() * width;
            self.pos.y = height + Math.random() * 100;
            self.alpha = 0.1 + Math.random() * 0.3;
            self.scale = 0.1 + Math.random() * 0.3;
            self.velocity = Math.random();
        }

        this.draw = function() {
            if(self.alpha <= 0) {
                init();
            }
            self.pos.x += self.velocity;
            self.pos.y -= self.velocity;
            self.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(self.pos.x, self.pos.y, self.scale * 10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,' + self.alpha + ')';
            ctx.fill();
        };
    }

    if (canvas) {

        var $headerSizer, width, height, ctx, circles, animateHeader = true;

        if ($('#intro .bg').length > 0) {
            $headerSizer = $('#intro .bg');
        } else {
            $headerSizer = $('#intro');
        }

        initHeader();
        addListeners();

    }


    /*========================================
    =            Animated Letters            =
    ========================================*/
    var animationDelay = 3000,
        lettersDelay = 100;

    function singleLetters($words) {
        $words.each(function(){
            var word = $(this),
            letters = word.text().split(''),
            selected = word.hasClass('is-visible');
            for (var i in letters) {
                letters[i] = '<em>' + letters[i] + '</em>';
                letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
            }
            var newLetters = letters.join('');
            word.html(newLetters).css('opacity', 1);
        });
    }

    function takeNext($word) {
        return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
    }

    function switchWord($oldWord, $newWord) {
        $oldWord.removeClass('is-visible').addClass('is-hidden');
        $newWord.removeClass('is-hidden').addClass('is-visible');
    }

    function hideLetter($letter, $word, $bool, $duration) {
        $letter.removeClass('in').addClass('out');
        if(!$letter.is(':last-child')) {
            setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
        } else if($bool) {
            setTimeout(function(){ hideWord(takeNext($word)); }, animationDelay);
        }
        if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
            var nextWord = takeNext($word);
            switchWord($word, nextWord);
        }
    }

    function showLetter($letter, $word, $bool, $duration) {
        $letter.addClass('in').removeClass('out');
        if(!$letter.is(':last-child')) {
            setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration);
        } else {
            if(!$bool) { setTimeout(function(){ hideWord($word); }, animationDelay); }
        }
    }

    function hideWord($word) {
        var nextWord = takeNext($word);
        var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
        hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
        showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);
    }

    function animateHeadline($headlines) {
        var duration = animationDelay;
        $headlines.each(function(){
            var headline = $(this);
            setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ); }, duration);
        });
    }

    function initHeadline() {
        singleLetters($('.animated-letters').find('b'));
        animateHeadline($('.animated-letters'));
    }

    initHeadline();

    /*===========================
    =            Nav            =
    ===========================*/
    $('.btn-nav').click(function() {
        $('.main-nav').toggleClass('main-nav--visible');
    });

    $('.main-nav nav').onePageNav({
        easing: 'swing',
        scrollSpeed: 500,
        filter: ':not(.external)'
    });

    /*=====================================
    =            Button scroll            =
    =====================================*/
    $(document).on('click', '.btn-go', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetOffset = $(target).offset();
        $('html,body').animate({scrollTop: (targetOffset.top)}, 500);
    });

    /*=====================================
    =            Progress bars            =
    =====================================*/
    $('.skills .skills-item, .bars .bars-item').each(function() {
        var progress = $(this).data('progress');
        $(this).css('width', progress + '%');
    });

});
