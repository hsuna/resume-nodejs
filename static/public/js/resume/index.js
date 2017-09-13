$(function(){
	var ua = navigator.userAgent;
	var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    isAndroid = ua.match(/(Android)\s+([\d.]+)/),
    isMobile = isIphone || isAndroid;
	
	var anchors=[], navigationTooltips=[];
	$('#pagepiling>.section').each(function(){
		var id = $(this).data('page');
		anchors.push(id);
		navigationTooltips.push($(this).html());
		
		$(this).load('./'+id+'.html');
	});
	
	//$('header').load('./header.html');
	//$('footer').load('./footer.html');
	$('header, footer').remove();
	
	if(isMobile) {
        $('html').addClass('mobile');
        $(window).on("resize", function() {
            setTimeout(function() {
                $("html").css({
                    "font-size": ($("html").width() / 240 * 62.5) + "%"
                });
            },
            100)
        }).resize();
    }else{
		$('#pagepiling').pagepiling({
	        loopBottom: !0,
	        anchors: anchors,
	        navigation: {
	            'textColor': '#999',
	            'bulletsColor': '#999',
	            'position': 'right',
	            'tooltips': navigationTooltips
	        }
		});
    }
	
})