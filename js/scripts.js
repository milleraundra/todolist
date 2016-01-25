function ToDo(task, dueDate) {
	this.task = task;
	this.dueDate = dueDate;
}

$(document).ready(function() {
	$("form#new-todo").submit(function(event) {
		event.preventDefault();

		var inputtedTask = $("input#new-task").val();
		var inputtedDueDate = $("input#new-due-date").val();
		var toDoList = new ToDo(inputtedTask, inputtedDueDate);

		$("ul#todos").append("<li><span class='task'>" + toDoList.task + " - " + toDoList.dueDate + "</span></li>");

		//this code clears input fields
		$("input#new-task").val("");
	 	$("input#new-due-date").val("");

// $( "#target" ).toggle(function() {
//   alert( "First handler for .toggle() called." );
// }, function() {
//   alert( "Second handler for .toggle() called." );
// });

		$("ul#todos").children("li").click(function() {
			$("ul#completed").append(this);


		$("ul#completed").children("li").click(function() {
			$("ul#todos").append(this);

			
			});
		});



	});



});




// function Place(location1, landmark, timeOfYear, note) {
// 	this.location1 = location1;
// 	this.landmark = landmark;
// 	this.timeOfYear = timeOfYear;
// 	this.note = note;
// }
//
// $(document).ready(function() {
// 	$("form#new-place").submit(function(event) {
// 		event.preventDefault();
//
// 		var inputtedLocation = $("input#new-location1").val();
// 		var inputtedLandmark = $("input#new-landmark").val();
// 		var inputtedTimeOfYear = $("input#new-time-of-year").val();
// 		var inputtedNote = $("input#new-note").val();
// 		var newPlace = new Place(inputtedLocation, inputtedLandmark, inputtedTimeOfYear, inputtedNote);
//
// 		$("ul#places").append("<li><span class='place'>" + newPlace.location1 + "</span></li>");
//
// 		//this code clears input fields
// 		$("input#new-location1").val("");
// 	 	$("input#new-landmark").val("");
// 		$("input#new-time-of-year").val("");
// 		$("input#new-note").val("");
//
//
// 		$(".place").last().click(function() {
//   	$("#show-place").show();
//   	// $("#show-contact h2").text(newContact.fullName());
//   	$(".location1").text(newPlace.location1);
// 		$(".landmark").text(newPlace.landmark);
// 		$(".time-of-year").text(newPlace.timeOfYear);
// 		$(".note").text(newPlace.note);
//
//   	// $(".last-name").text(newContact.lastName);
// });
//
// 	});
// });



// function Contact(firstName, lastName) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.addresses = [];
// }
//
// Contact.prototype.fullName = function() {
// 	return this.firstName + " " + this.lastName;
// }
//
//
// $(document).ready(function() {
// 	$("form#new-contact").submit(function(event) {
// 		event.preventDefault();
//
// 		var inputtedFirstName = $("input#new-first-name").val();
// 		var inputtedLastName = $("input#new-last-name").val();
// 		var newContact = new Contact(inputtedFirstName, inputtedLastName);
//
// 		$("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
//
// 		$("input#new-first-name").val("");
// 		$("input#new-last-name").val("");
//
//
// 		$(".contact").last().click(function() {
// 		$("#show-contact").show();
// 		$("#show-contact h2").text(newContact.fullName());
// 		$(".first-name").text(newContact.firstName);
// 		$(".last-name").text(newContact.lastName);
// 	});
//
// 	});
//
// });
