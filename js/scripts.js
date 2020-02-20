// UI
$(document).ready(function() {
	$("form#selector").submit(function(event) {
		event.preventDefault();
		var counter = parseInt($("#climate").val()) + parseInt($("#gun").val()) + parseInt($("#repro").val());;
		console.log(counter);

		if (counter <= 6) {
			$("#center").hide();
			$("#right").hide();
			$("#left").show();
		} else if (counter >=7 && counter <= 8) {
			$("#right").hide();
			$("#left").hide();
			$("#center").show();
		} else if (counter >= 9) {
			$("#left").hide();
			$("#center").hide();
			$("#right").show();
		} 
	});
});