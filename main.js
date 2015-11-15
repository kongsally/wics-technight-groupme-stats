message_counts = [];

window.onload = initialize;
function initialize() {
	//we will initialize stuff here later
	$.getJSON("counts.json", function(json) {
		message_counts = json;
		drawGraph();
	});
	
}

function drawGraph() {
	for(var i = 0; i < message_counts.length; i++) {
		message_counts[i].color = getRandomColor();
	}
	var canvas = document.getElementById("myChart");
	var ctx = canvas.getContext("2d");
	canvas.width = window.innerWidth * 0.7;
	canvas.height = window.innerHeight * 0.7;
	var myDoughnutChart = new Chart(ctx).Doughnut(message_counts);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}