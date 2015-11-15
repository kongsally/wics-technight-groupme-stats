message_counts = [];

window.onload = initialize;
function initialize() {
	//we will initialize stuff here later
	$.getJSON("counts.json", function(json) {
		message_counts = json;
	});
}