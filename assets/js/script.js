  // Drag and Drop
function draggAndDrop() {
	// Attribution de draggable
	$( "#feuille" ).draggable();
	$( "#pierre" ).draggable();
	$( "#ciseaux" ).draggable();
	// Attribution de droppable
	$( ".droppable" ).droppable({
		drop: function( event, ui ) {
			// Change le texte du block
			$( this ).find( "p" ).text(choice);
			$( this ).css({'background':'green'});
		}
	});
};

$(function(){
	draggAndDrop();
})