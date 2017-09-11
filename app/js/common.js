$(function() {

	// Custom JS
	
	$(".main-menu").after("<div id='my-menu'>");
	$(".main-menu").clone().appendTo("#my-menu");
	$("#my-menu").mmenu({
		extensions: [ 'effect-menu-slide', 'pagedim-black' ],
		// offCanvas: {
		// 	position: 'right'
		// }
				
		
	});
	
	var api = $("#my-menu").data("mmenu");
	api.bind("closed", function(){
		$(".toggle-mnu").removeClass("on");
	});


	$(".mobile-menu").click(function() {
			var mmAPI = $("#my-menu").data("mmenu");
			mmAPI.open();
			var thiss = $(this).find(".toggle-mnu");	
			thiss.toggleClass("on");
			$(".main-mnu").slideToggle();
		  return false;
		});

	/*OwlCarousel*/
	$('.owl-carousel').owlCarousel({
	    loop:true,
		margin:10,
		nav:true,
		dots: true,
		responsive:{
		0:{
			items:2
		},
		600:{
			items:3
		},
		1000:{
			items:5
		}
		},
		navText: '',
		navClass: ['arrow-left', 'arrow-right']
	});
	


	/* If you use any of this, it'd be nice to mention my name.

Andrew Tunnecliffe - 2014

JS is only for the circles, not for the loading or hover animations.
*/

// Basic queue / FILO implementation. 

var element, circle, d, x, y;
var i = 1;
var queue = [];

$(".internal").click(function(e){
  element = $(this);
  
  // remove old items from queue and DOM
  // allow max 5 to be loaded
  if (queue.length > 5) {
    $("._" + queue.shift()).remove();
  }
  
  // Assume user can't click more than 1000 times / second
  //terrible overflow protection.
  if (i > 1000) {
    i = 0;
  }
  
  // add next item to queue
  i++;
  queue.push(i);
  
  // Build element
  element.append("<span class='circle _" + i + "'></span>");
  circle = element.find("._" + i);
	
  // Make it big enough to cover whole parent
  if(!circle.height() && !circle.width()) {
    d = Math.max(element.outerWidth(), element.outerHeight());
    circle.css({height: d, width: d});
  }
	
  // Get origin
  x = e.pageX - element.offset().left - circle.width() / 2;
  y = e.pageY - element.offset().top - circle.height() / 2 ;
	
  // Set location and animate
  circle.css({top: y+'px', left: x+'px'}).addClass("animate");
})
});
