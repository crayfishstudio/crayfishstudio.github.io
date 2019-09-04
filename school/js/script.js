$(document).ready(function(){

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
	

	$('.calc-main__food, #schoolbus, .calc-main-pay__title, .select-item__input').change(function () {
		
		var sumOutput = 0;

		console.log("Our sum 0: " + sumOutput);
			
		$('.calc-food__radio:checked').each(function(){
			sumOutput += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
		});

		console.log("Our sum 1: " + sumOutput);

		$('#schoolbus:checked').each(function(){
			sumOutput += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
		});
			
		$('.select-item__input:checked').each(function(){
			sumOutput += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
		});

		console.log("Our sum 2: " + sumOutput);

		$('#calc-time-month:checked').each(function(){
			sumOutput *= 1;
		});

		console.log("Our sum 3: " + sumOutput);
		
		$('#calc-time-year:checked').each(function(){
			sumOutput *= 12;
		});

		$('#calc-time-quarter:checked').each(function(){
			sumOutput *= 3;
		});

		$('#calc-time-halfyear:checked').each(function(){
			sumOutput *= 6;
		});

		console.log("Our sum 4: " + sumOutput);

		$(".calc__output").text("₴" + sumOutput);
			
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
    
    /*$('.select-content__year').click(function() {
        var radio = "";
        
		radio += $(this).attr("to");
        $(radio).prop('checked', true);
        
        
        $('.select-item__year').click(function() {
            $(this).prop("checked", true);
        });
	});*/

	$('.select-item__year').click(function() {
		var text_for_p = "";

	  	if ($(this).find('input').prop("checked") == true) {
	  		$(this).find('input').prop("checked", false);
	  	} else {
	  		$(this).find('input').prop("checked", true);
	  	}

	  	var n = 0;

	  	$(this).parent().find('.select-item__year').each(function() {
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
});