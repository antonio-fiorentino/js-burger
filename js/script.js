var minIngredienti = 2;
var burgerBaseCosto = 50;

var nomeBurger = document.getElementById('nome');
var containerIngredienti = document.getElementsByClassName('ingredienti')[0];
var checkboxList = containerIngredienti.getElementsByTagName('input');

var counterValidIngredienti = 0;
var costo;

document.getElementById('button-submit').addEventListener("click", function(){
  console.log('Il nome del Burger è: ' + nomeBurger)
  for (var i = 0; i < containerIngredienti.length; i++) {
    counterValidIngredienti++;
  }
})
