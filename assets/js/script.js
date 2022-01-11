
  // Drag and Drop
function dragCard() {
  const card = $(".card");
  card.draggable();
  $(".game-area").droppable({
    drop: function (event, ui) {
      // Change le texte du block
      $(this).hide();
	  // ui.draggable correspond à l'objet que l'on bouge
    //   $(this).css({ background: "green" });
    },
  });
}


// on execute les fonctions quand le DOM est chargé

$(function () {
  dragCard();
});
