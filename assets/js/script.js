
function dragAndDrop(){
    item = $('.item');
    item.on("dragstart", function(){
        console.log('dragstart');
        $(this).addClass('active');
      });
    item.on("dragend", function(){
        // console.log('dragend');
        $(this).removeClass('active');
      });
    $('.first-card').each(function(){
        $(this).on('dragover', dragOver);
        // $(this).on('dragenter', dragEnter);
        // $(this).on('dragleave', dragLeave);
        $(this).on('drop', drop);
    })
    function dragOver(e) {
        // console.log("dragover")
        e.preventDefault()
    }
    
    // function dragEnter(e) {
    //     console.log("dragenter")
    //     e.preventDefault();
    // }
    
    // function dragLeave() {
    //     console.log("dragleave")
    //     // this.className = 'case';
    // }
    
    function drop() {
        // console.log("drop");
        let item = $('.active');
        $(this).append(item);
        let value = item.attr("value");
        $(this).attr('value', value);
        console.log($(this).attr("value"));
    }
}
  // on execute les fonctions quand le DOM est chargé
  

  $(function () {
    dragAndDrop();
  });


