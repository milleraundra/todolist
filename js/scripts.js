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
		$("ul#todos").children("li").click(function() {
			$("ul#completed").append(this);
				});
			});
		});




		// $("ul#completed").children("li").click(function() {
		// 	$("ul#todos").append(this);
		//
		//
		// 	});
		});


	});
