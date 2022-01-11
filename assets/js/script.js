// ATTENTION : 1 > Pierre, 2 > Feuille, 3 > Ciseaux

//================================== Var definitions. ======================================
let user     = "";
let computer = "";
let lastPlay = "";
let lostTo   = "";
let reverse  = "";
let nb;
let asWon = false, asLost = false;
let won = 0, lost = 0, equal = 0;

function counter(string)
{
    if (string=="Pierre") reverse = "Feuille";
    else if (string=="Feuille") reverse = "Ciseaux";
    else reverse = "Pierre";
    return reverse;
}

function compute()
{
    nb = Math.floor(Math.random()*3) + 1;
    if (asWon && nb>1) {
        computer = counter(lastPlay);
        alert("Che!");
    }
    if (asLost && nb>1) {
        computer = counter(lostTo);
        alert("Che!");
    }
    else {
        if (nb==1)      computer = "Pierre";
        else if (nb==2) computer = "Feuille";
        else            computer = "Ciseaux";
    }
    asWon  = false;
    asLost = false;
}
//=================================== Get user input. ======================================
function res(form,val)
{
	if (user != "")
		return;
	form.texte.value = val;
	user = val;
}
//================================= Test for validity. =====================================
function testing(form)
{
	if (user == "" || computer == "")
		return;
	if (user == computer)
	{
		alert("égalité !");
		equal += 1;
		calcScore(form);
	}
    else if ((user=="Pierre" && computer=="Ciseaux")||(user=="Feuille" && computer=="Pierre")||(user=="Ciseaux" && computer=="Feuille"))
	{
		alert("Gagné !");
		won += 1;
        asWon = true;
		calcScore(form);
	}
	else
	{
		alert(`Perdu ! L'ordi a utilisé ${computer}.`);
		lost += 1;
        lostTo = computer;
        asLost = true;
		calcScore(form);
	}
}
//=================================== Sum up score. ========================================
function calcScore(form)
{
	document.getElementById("score").innerHTML = `Gagné : ${won} | Perdu : ${lost} | Egalité : ${equal}   |   ${computer}`
}
//====================================== Reset. ============================================
function raz(form)
{
	form.texte.value = "";
    lastPlay = user;
	user = "";
	computer = "";
}