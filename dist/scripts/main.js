!function(e){var t={common:{init:function(){function t(t){var n=e(".toggle__menu span.m"),a=e(".toggle__menu span.e"),o=e(".toggle__menu span.n"),i=e(".toggle__menu span.u");a.toggleClass("toggle__close"),t.hasClass("open")?(n.text("E"),o.text("I"),i.text("T")):(n.text("M"),o.text("N"),i.text("U"))}function n(){console.log("home")}function a(){l.remove("slide--down"),l.add("slide--up")}function o(){l.remove("slide--up"),l.add("slide--down")}e("html.no-js").removeClass("no-js"),e("#menu_toggle").on("click touchstart",function(n){n.preventDefault(),e("#primary_nav").toggleClass("is-visible"),e("#masthead").toggleClass("nav-is-open"),e(this).toggleClass("open"),t(e(this)),e("#logo").toggleClass("inverted"),e("#page").toggleClass("padded"),window.matchMedia("(min-width: 600px)").matches&&"function"==typeof mixitup&&e(".gallery__filter").toggleClass("with-sticky")});var i=document.querySelector(".entry__content .gallery");e(i).addClass("get-faded");var s=0,l=document.getElementById("masthead").classList,r=function(){return window.scrollY},c=function(e,t,n){var a=r();0===r()?e():a>s?t():n(),s=r()};window.addEventListener("scroll",function(){c(n,a,o)}),e(window).scroll(function(){e(document).scrollTop()>50?e("nav").addClass("transparent"):e("nav").removeClass("transparent")}),e('a[href^="#"]').on("click",function(t){t.preventDefault(),e("html,body").animate({scrollTop:e(this.hash).offset().top},1500)}),e('a[href^="#contact"]').on("click",function(){e("#contact").addClass("said-hi"),e("#mobile_menu").removeClass("is-visible")}),e("[data-fancybox], .fancybox, .gallery-item a").fancybox({loop:!0,buttons:["zoom","share","fullScreen","thumbs","close"],animationEffect:"zoom",animationDuration:200,transitionEffect:"slide",transitionDuration:400,media:{},thumbs:{autoStart:!0}});var d=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:.8}}),f=window.innerWidth,g=window.innerHeight;console.log("Current viewport: "+f+"w × "+g+"h"),e(".parallax").each(function(){var t=this,n=e(this).children(".parallax__image");if(f>=840){var a=(new TimelineMax).to(n,1,{y:"80%",ease:Linear.easeNone});new ScrollMagic.Scene({triggerElement:t,duration:"200%"}).setTween(a).setClassToggle(this,"parallax--scrolling").addTo(d)}}),e(".get-faded").each(function(){var t=this,n=e(this).children(),a=(new TimelineMax).staggerTo(n,.3,{y:0,autoAlpha:1},.3);new ScrollMagic.Scene({triggerElement:t,triggerHook:1,reverse:!1}).setTween(a).setClassToggle(n,"got-faded").addTo(d)}),WebFontConfig={google:{families:["Barlow Semi Condensed:400,700","Barlow:400,700","Abril Fatface"]}},function(e){var t=e.createElement("script"),n=e.scripts[0];t.src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js",t.async=!0,n.parentNode.insertBefore(t,n)}(document)},finalize:function(){}},home:{init:function(){if(e("#home_banner").length){var t=new Swiper("#home_parallax",{slidesPerView:"auto",parallax:!0,speed:750}),n=new Swiper("#home_frame_2",{slidesPerView:"auto",centeredSlides:!0,grabCursor:!0,effect:"flip",speed:750,direction:"vertical",flipEffect:{slideShadows:!1}}),a=new Swiper("#home_frame_1",{slidesPerView:"auto",centeredSlides:!0,spaceBetween:500,effect:"coverflow",speed:750,coverflowEffect:{slideShadows:!1}}),o=[];e("#home_banner .swiper-slide").each(function(t){o.push(e(this).attr("data-title"))});new Swiper("#home_banner",{initialSlide:1,slidesPerView:"auto",centeredSlides:!0,effect:"coverflow",speed:750,coverflowEffect:{slideShadows:!1},keyboard:{enabled:!0},pagination:{el:"#home_banner .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+' swiper-pagination-bullet--long"><span class="swiper-pagination-bullet__title">'+o[e]+'</span><span class="screen-reader-text">Slide '+(e+1)+"</span></span>"}},navigation:{nextEl:"#home_banner .swiper-button-next",prevEl:"#home_banner .swiper-button-prev"},controller:{control:[t,a,n],by:"container"},parallax:!0,a11y:!0})}e.ajax({url:"https://api.dribbble.com/v2/user/shots?per_page=6&access_token=49a19ad15272251972056008d1f46e1be28cca04264a5ddf535cb735a2bf2ac6",dataType:"json",type:"GET",success:function(t){t.length>0?e.each(t.reverse(),function(t,n){e("#dribbbles").prepend('<figure id="shot_'+n.id+'" class="shot"><img src="'+n.images.teaser+'" alt="'+n.title+'" srcset="'+n.images.normal+" 400w, "+n.images.hidpi+' 800w" class="shot__image" /><figcaption class="shot--hover">'+n.title+'<span class="shot__description">'+n.description+'</span><a class="shot__link" href="'+n.html_url+'" target="_blank" title="'+n.title+'"></a></figcaption></figure>')}):e("#dribbbles").append('<code>Error loading shots. Try <a href="javascript:history.go(0);">reloading</a> the page?</code>')}})},finalize:function(){}},design:{init:function(){var e=document.querySelector("#gallery");mixitup(e,{controls:{toggleLogic:"and"}})}}},n={fire:function(e,n,a){var o,i=t;n=void 0===n?"init":n,o=""!==e,o=o&&i[e],(o=o&&"function"==typeof i[e][n])&&i[e][n](a)},loadEvents:function(){n.fire("common"),e.each(document.body.className.replace(/-/g,"_").split(/\s+/),function(e,t){n.fire(t),n.fire(t,"finalize")}),n.fire("common","finalize")}};e(document).ready(n.loadEvents)}(jQuery);
//# sourceMappingURL=main.js.map
