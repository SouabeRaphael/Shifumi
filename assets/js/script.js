
  // Drag and Drop
function dragCard() {
  const card = $(".card");
  var choice;
  card.mousedown(function(){
	choice = $(this).html();
  })
  card.draggable();
  $(".game-area").droppable({
    drop: function (event, ui) {
      // Change le texte du block
      $(this).hide();
	  console.log(choice);
    //   $(this).css({ background: "green" });
    },
  });
}

$(function () {
  dragCard();
});
