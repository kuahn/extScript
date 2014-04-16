(function($) {
	$( document ).ready(function() {
		$('.leftbrand').hover(
			function() {
				var title = $(this).attr('title')
				,	hoverTitle;

				switch (title) {
					case "PRINCE TOP" :
						hoverTitle = "남자 상의"
						break;			
					case "PRINCE BOTTOM" :
						hoverTitle = "남자 하의"
						break;			
					case "PRINCESS TOP" :
						hoverTitle = "여자 상의"
						break;			
					case "PRINCESS BOTTOM" :
						hoverTitle = "여자 하의"
						break;			
					case "PRINCESS OPS" :
						hoverTitle = "여자 원피스"
						break;			
					case "SET" :
						hoverTitle = "상하의"
						break;			
					case "CAP" :
						hoverTitle = "모자"
						break;			
					case "SHOES" :
						hoverTitle = "신발"
						break;
				}

				$(this).text(hoverTitle);
			}, 
			function() {
				$(this).text($(this).attr('title'));
			}
		);		
	});	
}(jQuery));
