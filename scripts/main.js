$(document).foundation();
	

/*-----------------------------------------
-- PARTNERS CAROUSEL
-------------------------------------------*/
$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    autoplaySpeed: 2000,
	    autoplayTimeout: 3000,
	    margin:10,
	    responsiveClass:true,
	    autoplay:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:2,
	        },
	        1000:{
	            items:4,
	        }
	    }
	})

});
/*------------------------------------
-- PARTNERS CAROUSEL
-------------------------------------*/








/*-------------------------
-- SYNC BURGER BTN
--------------------------*/
$("#modal-menu").on('closed.zf.reveal', function(e) {
	$("#burger-btn").removeClass("is-active");
});
/*-------------------------
-- SYNC BURGER BTN
--------------------------*/







/*--------------------------------------
-- SCROLL REVEAL
---------------------------------------*/
window.sr = ScrollReveal();
sr.reveal('.onscroll-left', {
	reset:true,
	viewOffset: { top: 160, right: 0, bottom: 140, left: 0 },	
	rotate: { x: 0, y: 30, z: 0 },
	distance: '80px',
	duration: 1000,
	origin: "left"
});
/*-------------------------------------
-- SCROLL REVEAL
-----------------------------------*/










/*----------------------------------------
-- BACK TO TOP
--------------------------------------------*/
$(window).scroll(function(){
	console.log($(document).scrollTop());

	if($(document).scrollTop() > 1000){
		$("#back-to-top-btn").fadeIn(500);
	}else{
		$("#back-to-top-btn").fadeOut(500);
	}
})

$("#back-to-top-btn").click(function(){
	$("html, body").animate({ scrollTop: 0 }, 1000);
	return false;
})
/*------------------------------------------
-- BACK TO TOP
---------------------------------------------*/














// NOTE FOR STICKY SET POSITION RELATIVE AND THAN JUST CHANGE IT TO FIXED;
/*-----------------------------------------------------
-- STICKY
----------------------------------------------------*/
var waypoint = new Waypoint({
  element: document.getElementById('homepage-news'),
  handler: function(direction) {
    if(direction == "down"){
    	$("#archive-container").addClass("stuck");
    }else if(direction == "up"){
    	$("#archive-container").removeClass("stuck");
    }
  },
})


var waypoint = new Waypoint({
  element: document.getElementById('homepage-contact'),
  handler: function(direction) {
    if(direction == "down"){
		$("#archive-container").fadeOut(400);
    }else if(direction == "up"){
		$("#archive-container").fadeIn(400);
    }  	
  },
  offset: '100%'
})

/*-----------------------------------------------------
-- STICKY
----------------------------------------------------*/











/*------------------------------------------------------
-- SCROLL PERCENTAGE FROM BOTTOM
-------------------------------------------------------*/
function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 80;
}

var depthIndicator = $("#depth-indicator");
$(window).scroll(function(){
	depthIndicator.css("top", getScrollPercent()+"vh");
})
/*------------------------------------------------------
-- SCROLL PERCENTAGE FROM BOTTOM
-------------------------------------------------------*/










/*---------------------------------------------------------------------------
-- SLICK GET ATTR FROM CURRENT SLIDE
---------------------------------------------------------------------------*/
//SET NEWS SLIDER THUMBNAIL
$(document).ready(function(){
    var thumbnail = $("#latest-news-slider .slick-slide[data-slick-index=0]").attr("data-thumbnail");
    setNewsThumbnail(thumbnail);
});

$('#latest-news-slider').on('beforeChange', function(event, slick, currentSlide, prevtSlide){
	$(".thumb").fadeOut(1000);
});

$('#latest-news-slider').on('afterChange', function(event, slick, currentSlide, prevtSlide){
    var thumbnail = $("#latest-news-slider .slick-slide[data-slick-index="+currentSlide+"]").attr("data-thumbnail");
    setNewsThumbnail(thumbnail);
	$(".thumb").fadeIn(1000);
});

function setNewsThumbnail(thumbnail){
	$(".thumb").css("background-image", "url("+thumbnail+")");
}
/*---------------------------------------------------------------------------
-- SLICK GET ATTR FROM CURRENT SLIDE
---------------------------------------------------------------------------*/