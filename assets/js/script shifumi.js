$(document).ready(function () {
    let shifumi_values = ['pierre', 'feuille', 'ciseau'];
    let enemy_score = 0;
    var my_score = 0;

    $('#you button').click(function(){
        let my_value = $(this).val();
        let enemy_value = shifumi_values[Math.floor(Math.random() * shifumi_values.length)];;
        let message = "";

        $('#opponent_choice .choice').hide();
        $('#your_choice .choice').hide();
        $('.choice .fa').hide();

        if (my_value == enemy_value) {
            message = "Égalité !";
        }
        else if (
            (my_value == "pierre" && enemy_value == "ciseau")
            || (my_value == "feuille" && enemy_value == "pierre")
            || (my_value == "ciseau" && enemy_value == "feuille")
        ) {
            message = "Gagné !";
            my_score++;
        }
        else {
            message = "Perdu !";
            enemy_score++;
        }
    })
})