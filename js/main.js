$(document).ready(function () {

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn(500);
		} else {
			$('.scrollToTop').fadeOut(600);
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},1400);
		return false;

});
	//Check to see if the window is top if not then display button
		$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.goback').fadeIn(500);
		} else {
			$('.goback').fadeOut(600);
		}
	});
	
	//Click event to scroll to top
	$('.goback').click(function(){
		history.back();
		return false;

		});


        $("a#educatewp").click(function(){
            $('html,body').animate({
                scrollTop: $('.container2').offset().top
            }, 1200);

            return false;

            });

        $("a#budgetwp").click(function(){
            $('html,body').animate({
                scrollTop: $('.container3').offset().top
            }, 1200);

            return false;

            });
            
        $("a#executewp").click(function(){
            $('html,body').animate({
                scrollTop: $('.container4').offset().top
            }, 1200);

            return false;        
       
	});

        });


		




