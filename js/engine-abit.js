/*
		im@andreystarkov.ru
		webscapes.ru
*/

function slider_change(selector, position){

	
	$(".t-bg").fadeTo(200, 0);
	$(".t-block").animate({"margin-top": "0px"}, 300);
	
/*	bgX = bgX + 100;
												
	$('#line-bg').animate({
		backgroundPosition:"("+bgX+"px 100%)"
	}, 1000, 'linear'); */
	
	selector.find(".t-bg").fadeTo(300, 1);					
	selector.find(".t-block").animate({"margin-top": "5px"}, 200);
}

$(document).ready(function() {
	
	var api = $("#ochenkruto").mSlideSlider({api:true});

	$("#t-link-0").click( function(){ api.resume()} );	
	$("#t-link-1").click( function(){ api.pause()} );				
	$("#t-link-2").click( function(){ api.pause()} );
	$("#t-link-3").click( function(){ api.pause()} );					
	$("#t-link-4").click( function(){ api.pause()} );	
	
	$('#coda-slider-1').codaSlider({autoHeight: false, dynamicArrows: false, dynamicTabs: 0, captionOpacity: 0.1});
	
	$("#phone").hover(			
				function(){	
					$(this).css({"z-index": "300"});
					$(this).fadeTo(300, 1); 
				},
				function(){
					$(this).css({"z-index": "10"});
					$(this).fadeTo(300, 0.8); 
					}
				
			);
			
	$(".t-block").hover(			
				function(){	
					$(".t-bg", this).fadeTo(300, 0.5); 
				},
				function(){
					if($(".t-bg", this).css("opacity") != "1"){
					$(".t-bg", this).fadeTo(300, 0);
					}
					}
				
			);
								
	$('div.photo a').fancyZoom({directory: 'images/zoom', scaleImg: true, closeOnClick: true});
	$("#logo").animate({"top": "0px", "opacity": "1"}, 1000, function(){
	}); 
	
});
	