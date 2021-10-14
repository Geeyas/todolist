$(function(){

	$('#todoList ul').sortable({
		items:"li:not('.listTitle, .addItem')",
		connectWith:"ul",
		dropOnEmpty:true,
		placeholder:"emptySpace"
	});

	$('input').keydown(function(e){
		if(e.keyCode == 13) {
			var item = $(this).val();

	$(this).parent().parent().append('<li>' + item + '</li>');
	$(this).val('');
		}
	});


	$('#trash').hover(function(){
		$(this).text('You can Drop your Item Now');
	}, function(){
		$(this).text('Bring your Item here to remove!!');
	});

	$('#trash').droppable({

		drop:function(event, ui){
			ui.draggable.remove();
			$(this).text('Your Item has Been removed!!');
		}
	});






});