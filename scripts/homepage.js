

$(document).ready(function(){
	$('#latest-news-slider').slick({
		autoplay: true,
		dots:true,
		appendDots: $(".news-dots-container"),
		arrows: false,
		pauseOnHover: false,
		autoplaySpeed: 8000,
		speed:1000,
		pauseOnFocus: false
	});



	$('#main-banner-slider').slick({
		autoplay: true,
		dots:false,
		arrows: false,
		pauseOnHover: false,
		autoplaySpeed: 7000,
		speed:1000,
		pauseOnFocus: false
	});

});


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