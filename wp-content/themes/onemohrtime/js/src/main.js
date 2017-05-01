$(document).ready(function() {
	
	// click to smoothscroll
	$('a[href^="#"]').on('click',function(e) {
		e.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1500);
	});
    
    // add scrolling class to contact
    $('#desktop_menu li:nth-child(4) > a, a[href^="#contact"], .contact-toggle').on('click', function() {
        $('#contact').addClass('said-hi');
    });
	
	// toggle About sections
    $('.toggle-hidden').hide();
    $('.toggle-show').click(function(){
        $(this).parent().not('.toggle-active').toggleClass('toggle-active');
        $('.toggle-hidden:visible').slideToggle().parent().removeClass('toggle-active');
		$(this).next('.toggle-hidden:hidden').slideToggle();
    });
    
    // Remove inline anchor styles from certain elements
    $('#content a > img:not(.strip)').parent().addClass('no-style');
    $('.sharedaddy a').addClass('btn');
    $('.gallery-pagination-span a').addClass('btn');
    
    // Sticky-kit
    //if (window.matchMedia('(max-width: 1279px)').matches) {
		$('.entry-featured-image-frame').stick_in_parent();
	//};
    
    // Dribbble gallery
    $.jribbble.setToken('8511e98bc154687719eb09e014c965b169369470f618d3bb478221accfa5b078');
    $.jribbble.users('onemohrtime').shots({
        per_page: 12
    }).then(function(shots) {
        var html = [];
        shots.forEach(function(shot) {
            html.push('<div class="dribbble">');
            html.push('<div class="dribbble-shot">');
            html.push('<figure class="dribbble-img">');
            html.push('<a class="dribbble-link" href="' + shot.html_url + '" target="_blank" title="' + shot.title + '">');
            html.push('<img src="' + shot.images.normal + '" alt="' + shot.title + ' />');
            html.push('</a>');
            html.push('<a class="dribbble-over" href="' + shot.html_url + '" target="_blank">');
            html.push('<h6>' + shot.title + '</h6>');
            html.push('<p class="views"><span class="fa fa-eye"></span> ' + shot.views_count + '</p>');
            html.push('</a>');
            html.push('</figure>');
            html.push('</div>');
            html.push('</div>');
        });
        $('#dribbble_gallery').html(html.join(''));
    });
    
    // Dribbble swiper
	$.jribbble.setToken('8511e98bc154687719eb09e014c965b169369470f618d3bb478221accfa5b078');
    $.jribbble.users('onemohrtime').shots({
        per_page: 20
    }).then(function(shots) {
        var html = [];
        shots.forEach(function(shot) {
            html.push('<figure id="shot_' + shot.id + '" class="swiper-slide">');
            html.push('<img src="' + shot.images.normal + '" alt="' + shot.title + '" />');
            html.push('<a href="' + shot.html_url + '" target="_blank" class="dribbble__link">');
            html.push('<span class="fa fa-link"></span>');
            html.push('<span>' + shot.title + '</span>');
            html.push('</a>');
            html.push('</figure>');
        });
        $('#dribbble_swiper').html(html.join(''));
    });
    
});

// menu visible when scrolling up
var headerHeight = $('#site-navigation').height();
$(window).on('scroll', {previousTop : 0}, function() {
    var currentTop = $(window).scrollTop();
    //check if user is scrolling up
    if (currentTop < this.previousTop ) {
        //if scrolling up...
        if (currentTop > 0 && $('#site-navigation').hasClass('nav-fixed')) {
            $('#site-navigation').addClass('nav-visible');
        } else {
            $('#site-navigation').removeClass('nav-visible nav-fixed');
        }
    } else {
        //if scrolling down...
        $('#site-navigation').removeClass('nav-visible');
        if( currentTop > headerHeight && !$('#site-navigation').hasClass('nav-fixed')) $('#site-navigation').addClass('nav-fixed');
    }
    this.previousTop = currentTop;
});

// homepage parallax
$(window).scroll(function() {
    homepageParallax();
});
function homepageParallax() {
    var logo = $('#homepage_logo')
    // Get scroll position of window
    windowScroll = $(this).scrollTop();
    // Slow scroll of logo
    logo.css({
        'margin-top' : (windowScroll/1)+"px",
    })
    // Fade logo
    var percent = $(document).scrollTop() / ($(document).height() - $(window).height());
    logo.css('opacity', 1 - percent*7.5);
}

// Swiper on home page
var homeSwiper = new Swiper ('.homepage__slideshow', {
    loop : true,
    effect : 'coverflow',
    coverflow : {
        rotate : 50,
        stretch : 0,
        depth : 100,
        modifier : 1,
        slideShadows : true
    },
    autoplay : 6000,
    pagination : '.swiper-pagination',
    paginationType : 'progress',
    nextButton : '.swiper-button-next',
    prevButton : '.swiper-button-prev',
    slidesPerView: 1,
    keyboardControl : true,
    grabCursor : true,
    preloadImages : false,
    lazyLoading : true
});

// Swiper on work page
 var workSwiper = new Swiper ('.project-all-dribbble .swiper-container', {
//var workSwiper = new Swiper ('#dribbble_swiper', {
    loop : true,
    spaceBetween : null,
    slidesPerView : 3,
    slidesPerColumn : 2,
//    breakpoints : {
//        1440 : {
//            slidesPerView : 2
//        },
//        600 : {
//            slidesPerView : 1
//        }
//    },
    autoplay : 5000,
    pagination : '.swiper-pagination',
    paginationClickable : true,
    keyboardControl : true
});

$(window).on('load', function() {
    
	// loading screen won't fade until entire page has loaded
	$('#loading').fadeOut('slow');
    
    // typed.js
    $('#typed').typed({
        stringsElement : $('#typed-strings'),
        typeSpeed : 100,
        startDelay: 300,
        showCursor : true,
        // cursorChar : "&nbsp;&#9608;",
        cursorChar : " |",
        contentType : 'text'
    });
    setTimeout(function() {
        $('.typed-cursor').hide();
    }, 8000);
    
});