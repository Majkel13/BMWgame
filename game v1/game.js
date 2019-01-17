
let cards = document.querySelectorAll(".kafelek");
cards = [...cards];
let activeCard = "";
let punkty = cards.length;
let suma = 0;
let position = 1;
let ile_rund = 0;

const auta = ["BMWX1", "BMWX2", "BMWX3", "BMWX4", "BMWX5", "BMWX6"];

const click = function () {
    punkty--;
    activeCard = this;

    activeCard.classList.remove("ukryj");
    activeCard.classList.add("kafelek");
    activeCard.removeEventListener("click", click);
    document.getElementById("punkty").innerHTML = punkty;
};

const init = function () {

    document.getElementById("punkty").innerHTML = "18";
    position = Math.floor(Math.random() * auta.length) + 1;
    text = '<img src="BMWX' + position + '.png" alt="obrazek" >';
    document.getElementById("zdj").innerHTML = text;

        cards.forEach(function (card) {
            card.classList.remove("kafelek");
            card.classList.add("ukryj");
            card.addEventListener("click", click);

        });
   
};

const check = function () {

    var x = document.getElementById("auta");
    if (x.selectedIndex + 1 === position) {

        suma = suma + punkty;
        document.getElementById("suma").innerHTML = suma;
        punkty = cards.length;
        var o = document.getElementById("odp");
        o.style.color = "green";
        o.innerHTML = "dobra odpwiedź :) ";
        ile_rund=ile_rund+1;

        if (suma >= 50) {
         var w = document.getElementById("container");
            w.style.color = "green";
            w.style.margin = "10px";
            w.style.textAlign="center";
                
            w.innerHTML ='BRAWO WYGRAŁEŚ <br> Potrzebowałeś '+ ile_rund+' rund <br> Spróbuj jeszcze raz  <button type="button" onclick="refresh()">Zagraj ponownie</button>';
            console.log("wygrałes");
              
        } 
            init();
        
    } else {
        suma = suma - punkty;
        document.getElementById("suma").innerHTML = suma;
        punkty = cards.length;
        var q = document.getElementById("odp");
        q.style.color = "red";
        q.innerHTML = "zła odpowiedź :( ";
        ile_rund=ile_rund+1;
        
        init();
    }

};
const refresh = function (){
    location.reload();

};

init();
