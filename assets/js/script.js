// --------------------------------------------------------------------------------------------
// ---------------------------Fonction Drag and Drop ------------------------------------------
// --------------------------------------------------------------------------------------------
function dragNdrop() {
  item = $(".item");
  item.on("dragstart", dragStart);
  item.on("dragend", dragEnd);

  // dragStart: lorsque qu'on "prend" la carte
  function dragStart() {
    $(this).addClass('active');
    // console.log("start");
  }

  //  dragEnd: lorsque qu'on "relache" la carte
  function dragEnd() {
    $(this).removeClass('active');
    // console.log("end");
  }

  // boucle qui nique ta grosse daronne
  $('.first-card').each(function(){
    $(this).on('dragover', dragOver);
    // $(this).on('dragenter', dragEnter);
    // $(this).on('dragleave', dragLeave);
    $(this).on('drop', drop);
})
  function dragOver(e) {
    e.preventDefault();
  }

  // function dragEnter(e) {
  // }

  // function dragLeave(){
  // }

  // au moment du relachement 
  function drop(){
    let item = $('.active')
    let itemValue = item.attr('value')
    // console.log('drop');
    $(this).append(item)
    $(this).attr('value', itemValue)
    console.log($(this).attr('value'));
  }
}

// function play() {
//   let card = $(".item");
//   console.log(card);
//   card.click(function () {
//     let value = $(this).attr("value");
//     console.log(value);
//   });
// }

// on execute les fonctions quand le DOM est chargé

$(function () {
  dragNdrop();
  // play()
});
