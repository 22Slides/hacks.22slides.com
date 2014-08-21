/* Detect image orientation */
	$(document).ready(function() {
		$('.images img').not('.blocker').one('load', function() {
			if (this.width >= this.height) {
				$(this).addClass('landscape');
			} else {
				$(this).addClass('portrait');
			}
		}).each(function() { if (this.complete) { $(this).load(); } });
	});