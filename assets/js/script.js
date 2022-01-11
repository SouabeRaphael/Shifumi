function dragCard() {
  let card = $(".card");
  card.draggable();
  $(".game-area").droppable({
    drop: function (event, ui) {
      // Change le texte du block
      $(this).hide();
    //   $(this).css({ background: "green" });
    },
  });
}

$(function () {
  dragCard();
});

