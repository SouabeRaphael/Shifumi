// --------------------------------------------------------------------------------------------
// ---------------------------Fonction Drag and Drop ------------------------------------------
// --------------------------------------------------------------------------------------------
let yourChoice;
let aiChoice;
function dragNdrop() {
  item = $(".item");
  item.mouseenter(function () {
    $(this).css({
      transform: "translateY(-20px)",
      transition: "transform 200ms ease-in-out",
    });
  });
  item.mouseleave(function () {
    $(this).css({
      transform: "translateY(0px)",
      transition: "transform 200ms ease-in-out",
    });
  });
  item.on("dragstart", dragStart);
  item.on("dragend", dragEnd);

  // dragStart: lorsque qu'on "prend" la carte
  function dragStart() {
    $(this).addClass("active");
  }
  //  dragEnd: lorsque qu'on "relache" la carte
  function dragEnd() {
    $(this).removeClass("active");
  }
  $(".first-card").each(function () {
    $(this).on("dragover", dragOver);
    $(this).on("drop", drop);
  });
  function dragOver(e) {
    e.preventDefault();
  }
  // Génère une valeur aléatoire pour l'ia et compare les choix pour déterminer le gagnant
  function compareChoices() {
    aiChoice = parseInt(Math.random() * 3);
    console.log(aiChoice);
    console.log(yourChoice);
    if (aiChoice == yourChoice) {
      console.log("égalité");
    } else if (
      (aiChoice == 0 && yourChoice == 2) ||
      (aiChoice == 1 && yourChoice == 0) ||
      (aiChoice == 2 && yourChoice == 1)
    ) {
      console.log("gagné");
    } else {
      console.log("perdu");
    }
    $(".second-card").html(
      `<img class="img-card item" src="./assets/img/` + aiChoice + `.svg">`
    );
  }
  // au moment du relachement
  function drop() {
    let item = $(".active");
    let itemValue = item.attr("value");
    // console.log('drop');
    $(this).append(item);
    $(this).attr("value", itemValue);
    $(".item").off("mouseenter");
    $(".item").off("mouseleave");
    item.mouseleave(function () {
      $(this).css({
        transform: "translateY(0px)",
        transition: "transform 200ms ease-in-out",
      });
    });
    yourChoice = $(this).attr("value");
    compareChoices();
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
