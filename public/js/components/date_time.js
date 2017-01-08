/* DATE TIME
------------------------------------------------------- */
var thisDate = new Date();
var greetingText = document.getElementById('greetText');
var greetingDate = document.getElementById('greetDate');

/* DECLARATION OF MONTH AND DAY NAMES
------------------------------------------------------- */
var days = new Array('zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag');
var months = new Array('januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december');
var dayParts = new Array('Goedemorgen', 'Goedemiddag', 'Goedenavond', 'Goedenacht');
var monthDay = ((thisDate.getDate() < 10) ? "0" : "") + thisDate.getDate();

var today = {
	day: days[thisDate.getDay()],
	month: months[thisDate.getMonth()],
	number: monthDay,
	year: calculateYear(thisDate.getYear()),
	dayPart: calculateDayPart(thisDate.getHours())
};

/* FUNCTIONS
------------------------------------------------------- */
function calculateYear(year) {
	return (year < 1000) ? year + 1900 : year;
}

function calculateDayPart(hours) {
	var returnDayPart;
	if(hours >= 6 && hours < 12) {
		returnDayPart = dayParts[0];
	} else if(hours >= 12 && hours < 18) {
		returnDayPart = dayParts[1];
	} else if(hours >= 18) {
		returnDayPart = dayParts[2];
	} else if(hours >= 0 && hours < 6) {
		returnDayPart = dayParts[3];
	} else {
		returnDayPart = "Hi";
	}
	return returnDayPart;
}

function greetVisitor() {
	if(greetingText) {
		greetingText.innerHTML = today.dayPart;
	}
	if(greetingDate) {
		greetingDate.innerHTML = "Het is vandaag " + today.day + " " + parseInt(today.number) + " " + today.month;
	}
}

document.addEventListener("DOMContentLoaded", function() {
  greetVisitor();
});
