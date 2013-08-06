function logo_hide() {
	$('#logo-box').animate({'left':'-500px'}, 1000);
}

function resolution_switch(sc_width) {
	var p1920 = [
	{image : 'photos/1.jpg', thumb : 'photos/thumb/1.jpg', url : ''},{image : 'photos/2.jpg', thumb : 'photos/thumb/2.jpg', url : ''},
	{image : 'photos/3.jpg', thumb : 'photos/thumb/3.jpg', url : ''},{image : 'photos/4.jpg', thumb : 'photos/thumb/4.jpg', url : ''},
	{image : 'photos/5.jpg', thumb : 'photos/thumb/5.jpg', url : ''},{image : 'photos/6.jpg', thumb : 'photos/thumb/6.jpg', url : ''},
	{image : 'photos/9.jpg', thumb : 'photos/thumb/9.jpg', url : ''},{image : 'photos/10.jpg', thumb : 'photos/thumb/10.jpg', url : ''},
	{image : 'photos/11.jpg', thumb : 'photos/thumb/11.jpg', url : ''},{image : 'photos/12.jpg', thumb : 'photos/thumb/12.jpg', url : ''},
	{image : 'photos/13.jpg', thumb : 'photos/thumb/13.jpg', url : ''} ]

	var p1200 = [
	{image : 'photos/1200/1.jpg', thumb : 'photos/thumb/1.jpg', url : ''},{image : 'photos/1200/2.jpg', thumb : 'photos/thumb/2.jpg', url : ''},
	{image : 'photos/1200/3.jpg', thumb : 'photos/thumb/3.jpg', url : ''},{image : 'photos/1200/4.jpg', thumb : 'photos/thumb/4.jpg', url : ''},
	{image : 'photos/1200/5.jpg', thumb : 'photos/thumb/5.jpg', url : ''},{image : 'photos/1200/6.jpg', thumb : 'photos/thumb/6.jpg', url : ''},
	{image : 'photos/1200/9.jpg', thumb : 'photos/thumb/9.jpg', url : ''},{image : 'photos/1200/10.jpg', thumb : 'photos/thumb/10.jpg', url : ''},
	{image : 'photos/1200/11.jpg', thumb : 'photos/thumb/11.jpg', url : ''},{image : 'photos/1200/12.jpg', thumb : 'photos/thumb/12.jpg', url : ''},
	{image : 'photos/1200/13.jpg', thumb : 'photos/thumb/13.jpg', url : ''} ]

	var p960 = [
	{image : 'photos/960/1.jpg', thumb : 'photos/thumb/1.jpg', url : ''},{image : 'photos/960/2.jpg', thumb : 'photos/thumb/2.jpg', url : ''},
	{image : 'photos/960/3.jpg', thumb : 'photos/thumb/3.jpg', url : ''},{image : 'photos/960/4.jpg', thumb : 'photos/thumb/4.jpg', url : ''},
	{image : 'photos/960/5.jpg', thumb : 'photos/thumb/5.jpg', url : ''},{image : 'photos/960/6.jpg', thumb : 'photos/thumb/6.jpg', url : ''},
	{image : 'photos/960/9.jpg', thumb : 'photos/thumb/9.jpg', url : ''},{image : 'photos/960/10.jpg', thumb : 'photos/thumb/10.jpg', url : ''},
	{image : 'photos/960/11.jpg', thumb : 'photos/thumb/11.jpg', url : ''},{image : 'photos/960/12.jpg', thumb : 'photos/thumb/12.jpg', url : ''},
	{image : 'photos/960/13.jpg', thumb : 'photos/thumb/13.jpg', url : ''} ]
	
	if(sc_width==1920) { return p1920 } 
	if((sc_width>1200) && (sc_width<1920)) { return p1200 } 
	if(sc_width<=1024) { return p960 } 
}



function load_start(){
	$('#logo-box').animate({'top': '40%'}, 2000);
	$('#logo').fadeTo(2000,"1", 
	function() {
		$('#slogan').animate({'margin-top': '10px'}, 2000);
		$('#slogan').fadeTo(2000,"1", 
		function() {
			$('#logo-box').delay(2000).animate({'left': '45%', 'opacity': '0'}, 1000, 
			function(){
				$('#logo-box').css({'width': '270', 'top': '20px', 'left': '50px', 'padding-left': '20px'}).animate({'opacity': '0.7', 'left': '0px'}, 1000, 
				function(){
					if(screen.width==1920) { $('#logo-box').animate({backgroundColor: "#000"}, 4000); }
					$('#overlay').animate({'opacity': '0'}, 2000, 
					function(){
						$('#overlay').css({'display': 'none', 'width': '0px', 'height': '0px'});
						api.playToggle();
					});
				});
			});				
		});
	});
}

$(document).ready(function () {

	var is_toggled;
	$flash = $( '#flash' ),
	$volume = $( '#volume' );

// preloading resources
 
	$("body").queryLoader2({ barColor: "#525252", backgroundColor: "#000", percentage: true, barHeight: 0, completeAnimation: "fade",
	onComplete: function () { load_start() } });
 
/*	
	$('.quality-toggle').click( function(){
		if( $('#quality').css('opacity')==0 ){ 
			$('#quality').animate({'opacity': '0.6'}, 1000); 
		} else {  
			$('#quality').animate({'opacity': '0'}, 1000); 
			}
	 });
*/
 
// hiding logo box

/*
	$('#logo-box').hover(function() { $('#logo-box').fadeTo(500, 0); }, function() { $('#logo-box').fadeTo(500, 0.7); });
	$('#logo-box').dblclick(function() { logo_hide(); });	
*/

// loading sound

	var song1 = new buzz.sound( "sound/music1", {formats: [ "ogg", "mp3", "acc" ]});
	if ( !buzz.isSupported() ) { $volume.hide(); } else { song1.play().loop(); }

// mute button

	$volume.click( function() {
		if ($(this).hasClass( 'all' )){ song1.mute(); $( this ).removeClass( 'all' ).addClass( 'none' ); } 
		else if ($(this).hasClass('none')){ song1.unmute(); $(this).removeClass( 'none' ).addClass('all'); } 
	});

// images engine init

	$.supersized({				
		autoplay: 0, slide_interval: 10000, transition: 1, transition_speed: 2000, fit_landscape: 1,
		slide_links: 'blank', slides: resolution_switch(screen.width)					
	}); 

});






