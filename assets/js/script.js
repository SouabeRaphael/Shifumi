$( function() {
	// Drag and Drop
	$( function() {
		// nom de la carte
		let choice = $( "#draggable" ).text();
		// Attribution de draggable
		$( ".feuille" ).draggable();
		$( ".pierre" ).draggable();
		$( ".ciseaux" ).draggable();
		// Attribution de droppable
		$( "#droppable" ).droppable({
		  	drop: function( event, ui ) {
				// Change le texte du block
				$( this ).find( "p" ).text(choice);
				$( this ).css({'background':'green'});
		  	}
		});
	});
});
