/* Initialization */
$("input:not([value]),input[value='']").addClass('empty');

/* Input event handling */
$('input').on('input keyup', function() {
  
      $(this).toggleClass('empty', !Boolean($(this).val()));
});

$(function() {
	var rangePercent = $('[type="range"]').val();
	$('[type="range"]').on('change input', function() {
		rangePercent = $('[type="range"]').val();
		$('h4').html(rangePercent+'<span></span>');
		$('[type="range"], h4>span').css('filter', 'hue-rotate(-' + ((rangePercent-50)*2)+ 'deg)');
		$('h4').css({'transform': 'translateX(-50%) scale(' + (1+(rangePercent/100)) + ')', 'left': ((rangePercent-50)*2)+'%'});
	});
});