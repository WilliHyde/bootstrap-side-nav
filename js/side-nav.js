var side_target;

$(function() {
	//If one or more of the sidenavs is open
	if( !$('.sidenav-content').hasClass('closed') )
		cover_body();
		
	$('.sidenav-toggle').on('click', function() {
		
		//Finds the target
		side_target = $(this).data('target');
		
		if( $(side_target).hasClass('closed') ){
			//Opens the side nav
			$(side_target).removeClass('closed')
				.addClass('opening')
				.one('transitionend webkitTransitionEnd MSTransitionEnd', function(){
					$(this).removeClass('opening');
			});

			//Adds teh body lock
			cover_body();
		} else {
			clear_lock();
		}
	});
	
});

//Cover the body
var cover_body = function() {
	$('body').append('<div class="sidenav-body-cover"></div>').addClass('sidenav-body-locked');
	$('.sidenav-body-cover').on('click', clear_lock);
};

//Function to clear the body lock
var clear_lock = function() {
	$('.sidenav-body-cover').remove();
	$(side_target).addClass('closing')
		.one('transitionend webkitTransitionEnd MSTransitionEnd', function(){
			$(this).removeClass('closing').addClass('closed');
	});
	$('body').removeClass('sidenav-body-locked');
};
