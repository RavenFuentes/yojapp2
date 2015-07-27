	//Add to cart extraction button
	$('.add-to-cart .more').click(function(){
		var newVal = parseInt($(this).closest('form').find('input[type="text"]').val()) + 1;
		$(this).closest('form').find('input[type="text"]').val(newVal);
	});
// add comment lng
