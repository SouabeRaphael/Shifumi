
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
      // Change le texte du block
      $(this).css('background', 'red');
	  console.log(choice);
    //   $(this).css({ background: "green" });
    },
  });
}

$(function () {
  dragCard();
});
