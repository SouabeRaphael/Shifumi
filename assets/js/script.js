
  // Drag and Drop
function dragCard() {
  const card = $(".img-card");
  var choice;
  card.mousedown(function(){
	choice = $(this).html();
  })
  card.draggable();
  $(".game-area").droppable({
    drop: function (event, ui) {
      $(this).css('background', 'red');
	  console.log(choice);
    //   $(this).css({ background: "green" });
    },
  });
}


// on execute les fonctions quand le DOM est chargé

$(function () {
  dragCard();
});
