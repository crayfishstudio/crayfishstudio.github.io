$(document).ready(function(){

	var year0 = [3500, 7000, 0];
	var year1 = [8000, 9000, 4000];
	var year2 = [8000, 9000, 4000];
	var year3 = [8000, 9000, 4800];
	var year4 = [8000, 9000, 5000];
	var year5 = [8000, 9000, 6000];
	var year6 = [8000, 9000, 6000];
	var year7 = [8000, 9000, 7200];
	var year8 = [8000, 9000, 7200];
	var year9 = [8000, 9000, 8800];

	$('.select-item').click(function() {
		var text_for_p = "";

	  	if ($(this).find('input').prop("checked") == true) {
	  		$(this).find('input').prop("checked", false);
	  	} else {
	  		$(this).find('input').prop("checked", true);
	  	}

	  	var n = 0;

	  	$(this).parent().find('.select-item').each(function() {
	  		if ($(this).find('.select-item__input').prop("checked") == true) {
	  			if (n == 0) {
	  				text_for_p += ": ";
	  				n = 1;
	  			} else {
	  				text_for_p += ", ";
	  			}
                text_for_p += $(this).find('.select-item__text').text();
                  
                console.log(text_for_p);
	  		}
		  });
		  
		  $(this).parent().parent().find('.select-header').find('p').find('span').text(text_for_p);
	});
	
	$('.select-item__year').click(function() {
		var text_for_out = "";

	  	$(this).parent().find('.select-item__year').each(function() {
	  		if ($(this).find('.select-item__input').prop("checked") == true) {
				text_for_out += ": ";

                text_for_out += $(this).find('.select-item__text').text();
                  
                console.log(text_for_out);
	  		}
		  });
		  
		  $(this).parent().parent().find('.select-header').find('p').find('span').text(text_for_out);
	});

	$('.calc-main__food, #schoolbus, .calc-main-pay__title, .select-item__input, .select-item__year').change(function () {
		
		var sumOutput = 0;
		var otherOutput = 0;

		var sumFull = 0;
			
		$('.calc-food__radio:checked').each(function(){
			sumOutput += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
		});

		$('#schoolbus:checked').each(function(){
			sumOutput += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
		});
			
		$('.select-item__input:checked').each(function(){
			sumOutput += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
		});

		if($('#school-year-0').is(':checked')) {
			console.log("year-0");
			$("#school-year-output-1").text("₴" + year0[0]);

			$("#school-year-output-2").text("₴" + year0[1]);
	
			$("#school-year-output-3").text("₴" + year0[2]);

			sumOutput += year0[0];

			otherOutput += year0[1] + year0[2];

		} else if($('#school-year-1').is(':checked')) {
			console.log("year-1");
			$("#school-year-output-1").text("₴" + year1[0]);

			$("#school-year-output-2").text("₴" + year1[1]);
	
			$("#school-year-output-3").text("₴" + year1[2]);

			sumOutput += year1[0];

			otherOutput += year1[1] + year1[2];

		} else if($('#school-year-2').is(':checked')) {
			console.log("year-2");
			$("#school-year-output-1").text("₴" + year2[0]);

			$("#school-year-output-2").text("₴" + year2[1]);
	
			$("#school-year-output-3").text("₴" + year2[2]);

			sumOutput += year2[0];

			otherOutput += year2[1] + year2[2];

		} else if($('#school-year-3').is(':checked')) {
			console.log("year-3");
			$("#school-year-output-1").text("₴" + year3[0]);

			$("#school-year-output-2").text("₴" + year3[1]);
	
			$("#school-year-output-3").text("₴" + year3[2]);

			sumOutput += year3[0];

			otherOutput += year3[1] + year3[2];

		} else if($('#school-year-4').is(':checked')) {
			console.log("year-4");
			$("#school-year-output-1").text("₴" + year4[0]);

			$("#school-year-output-2").text("₴" + year4[1]);
	
			$("#school-year-output-3").text("₴" + year4[2]);

			sumOutput += year4[0];

			otherOutput += year4[1] + year4[2];

		} else if($('#school-year-5').is(':checked')) {
			console.log("year-5");
			$("#school-year-output-1").text("₴" + year5[0]);

			$("#school-year-output-2").text("₴" + year5[1]);
	
			$("#school-year-output-3").text("₴" + year5[2]);

			sumOutput += year5[0];

			otherOutput += year5[1] + year5[2];

		} else if($('#school-year-6').is(':checked')) {
			console.log("year-6");
			$("#school-year-output-1").text("₴" + year6[0]);

			$("#school-year-output-2").text("₴" + year6[1]);
	
			$("#school-year-output-3").text("₴" + year6[2]);

			sumOutput += year6[0];

			otherOutput += year6[1] + year6[2];

		} else if($('#school-year-7').is(':checked')) {
			console.log("year-7");
			$("#school-year-output-1").text("₴" + year7[0]);

			$("#school-year-output-2").text("₴" + year7[1]);
	
			$("#school-year-output-3").text("₴" + year7[2]);

			sumOutput += year7[0];

			otherOutput += year7[1] + year7[2];

		} else if($('#school-year-8').is(':checked')) {
			console.log("year-8");
			$("#school-year-output-1").text("₴" + year8[0]);

			$("#school-year-output-2").text("₴" + year8[1]);
	
			$("#school-year-output-3").text("₴" + year8[2]);

			sumOutput += year8[0];

			otherOutput += year8[1] + year8[2];

		} else if($('#school-year-9').is(':checked')) {
			console.log("year-9");
			$("#school-year-output-1").text("₴" + year9[0]);

			$("#school-year-output-2").text("₴" + year9[1]);
	
			$("#school-year-output-3").text("₴" + year9[2]);

			sumOutput += year9[0];

			otherOutput += year9[1] + year9[2];

		} else {
			console.log("false");
		}

		
		$('#calc-time-month:checked').each(function(){
			sumOutput *= 1;
		});
		
		$('#calc-time-year:checked').each(function(){
			sumOutput *= 10;
		});

		$('#calc-time-quarter:checked').each(function(){
			sumOutput *= 3;
		});

		$('#calc-time-halfyear:checked').each(function(){
			sumOutput *= 6;
		});

		sumFull = sumOutput + otherOutput;

		$(".calc__output").text("₴" + sumFull);
			
	});

	$('.select-header').click(function(event) {
		if (event.target.className == "select-arrow") {
            if($(this).hasClass('select-open')) {
                $(this).removeClass('select-open');
            
            } else {
                $(this).addClass('select-open');
            }

		  	$(this).parent().find('.select-content').fadeToggle(300);

		} else {
			$('.select-header').not($(this)).each(function() {
				if ($(this).hasClass('select-open')) {
			  		$(this).removeClass('select-open');
			  		$(this).parent().find('.select-content').fadeToggle(300);
			  	}
			});

			if ($(this).hasClass('select-open')) {
		  		$(this).removeClass('select-open');
		  	} else {
		  		$(this).addClass('select-open');
		  	}

		  	$(this).parent().find('.select-content').fadeToggle(300);
		}
	});
});

$('body').on('click', function(e) {
	if($(e.target).closest('.select').length == 0) {
		$('.select-content').fadeOut(300);
		$('.select-header').removeClass('select-open');
	}
});

var deg = 0;

/*.home-circle_36
.home-circle_72
.home-circle_108
.home-circle_144
.home-circle_180
.home-circle_240
.home-circle_300
.home-circle_360*/



$('.home-slider').on('afterChange', function (event, slick, currentSlide) {
	console.log("now this is current");

	var elt = slick.$slides.get(currentSlide);

	var circleBlock = $('#circleBlock');

	var slickIndex = $(this).find('.slick-current').data('slick-index');

	console.log(slickIndex);
	
	var homeCircleArray = ['home-circle_36', 'home-circle_72', 'home-circle_108', 'home-circle_144', 'home-circle_180', 'home-circle_240', 'home-circle_300', 'home-circle_360'];

	if(slickIndex == 0) {
		circleBlock.addClass(homeCircleArray[0]);
		
		circleBlock.removeClass(homeCircleArray[1]);
		circleBlock.removeClass(homeCircleArray[2]);
		circleBlock.removeClass(homeCircleArray[3]);
		circleBlock.removeClass(homeCircleArray[4]);
		circleBlock.removeClass(homeCircleArray[5]);
		circleBlock.removeClass(homeCircleArray[6]);
		circleBlock.removeClass(homeCircleArray[7]);
		
	} else if(slickIndex == 1) {
		circleBlock.addClass(homeCircleArray[1]);
		
		circleBlock.removeClass(homeCircleArray[0]);
		circleBlock.removeClass(homeCircleArray[2]);
		circleBlock.removeClass(homeCircleArray[3]);
		circleBlock.removeClass(homeCircleArray[4]);
		circleBlock.removeClass(homeCircleArray[5]);
		circleBlock.removeClass(homeCircleArray[6]);
		circleBlock.removeClass(homeCircleArray[7]);

	} else if(slickIndex == 2) {
		circleBlock.addClass(homeCircleArray[2]);
		
		circleBlock.removeClass(homeCircleArray[0]);
		circleBlock.removeClass(homeCircleArray[1]);
		circleBlock.removeClass(homeCircleArray[3]);
		circleBlock.removeClass(homeCircleArray[4]);
		circleBlock.removeClass(homeCircleArray[5]);
		circleBlock.removeClass(homeCircleArray[6]);
		circleBlock.removeClass(homeCircleArray[7]);

	} else if(slickIndex == 3) {
		circleBlock.addClass(homeCircleArray[3]);
				
		circleBlock.removeClass(homeCircleArray[0]);
		circleBlock.removeClass(homeCircleArray[1]);
		circleBlock.removeClass(homeCircleArray[2]);
		circleBlock.removeClass(homeCircleArray[4]);
		circleBlock.removeClass(homeCircleArray[5]);
		circleBlock.removeClass(homeCircleArray[6]);
		circleBlock.removeClass(homeCircleArray[7]);

	} else if(slickIndex == 4) {
		circleBlock.addClass(homeCircleArray[4]);
		
		circleBlock.removeClass(homeCircleArray[0]);
		circleBlock.removeClass(homeCircleArray[1]);
		circleBlock.removeClass(homeCircleArray[2]);
		circleBlock.removeClass(homeCircleArray[3]);
		circleBlock.removeClass(homeCircleArray[5]);
		circleBlock.removeClass(homeCircleArray[6]);
		circleBlock.removeClass(homeCircleArray[7]);

	} else if(slickIndex == 5) {
		circleBlock.addClass(homeCircleArray[5]);
		
		circleBlock.removeClass(homeCircleArray[0]);
		circleBlock.removeClass(homeCircleArray[1]);
		circleBlock.removeClass(homeCircleArray[2]);
		circleBlock.removeClass(homeCircleArray[3]);
		circleBlock.removeClass(homeCircleArray[4]);
		circleBlock.removeClass(homeCircleArray[6]);
		circleBlock.removeClass(homeCircleArray[7]);
		
	} else if(slickIndex == 6) {
		circleBlock.addClass(homeCircleArray[6]);
		
		circleBlock.removeClass(homeCircleArray[0]);
		circleBlock.removeClass(homeCircleArray[1]);
		circleBlock.removeClass(homeCircleArray[2]);
		circleBlock.removeClass(homeCircleArray[3]);
		circleBlock.removeClass(homeCircleArray[4]);
		circleBlock.removeClass(homeCircleArray[5]);
		circleBlock.removeClass(homeCircleArray[7]);

	} else if(slickIndex == 7) {
		circleBlock.addClass(homeCircleArray[7]);
				
		circleBlock.removeClass(homeCircleArray[0]);
		circleBlock.removeClass(homeCircleArray[1]);
		circleBlock.removeClass(homeCircleArray[2]);
		circleBlock.removeClass(homeCircleArray[3]);
		circleBlock.removeClass(homeCircleArray[4]);
		circleBlock.removeClass(homeCircleArray[5]);
		circleBlock.removeClass(homeCircleArray[6]);

	}

	/*div.style.webkitTransform = 'rotate('+deg+'deg)'; 
    div.style.mozTransform    = 'rotate('+deg+'deg)'; 
    div.style.msTransform     = 'rotate('+deg+'deg)'; 
    div.style.oTransform      = 'rotate('+deg+'deg)'; 
	div.style.transform       = 'rotate('+deg+'deg)'; */

	/*var tabContent = $(this).find('.slick-current').find('.tab-content');

	deg+= 45;

	circleBlock.css('transform','rotate('+deg+'deg)');

	if($(this).find('.slick-current').find('.tab-content')) {
		console.log($(this).find('.slick-current').find('.tab-content'));
		console.log("true");

		deg += 45;
		console.log(deg);

		circleBlock.css('transform','rotate('+deg+'deg)');

		console.log(circleBlock);
	} else {
		console.log("false");
	}

	

	$('.tab').change(function() {
		  $(this).parent().parent().find('.select-header').find('p').find('span').text(text_for_p);

		  alert("tab");
	});*/
});