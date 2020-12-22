var minIngredienti = 2;
var burgerBaseCosto = 50;

var nomeBurger = document.getElementById('nome');
var containerIngredienti = document.getElementsByClassName('ingredienti')[0];
var checkboxList = containerIngredienti.getElementsByTagName('input');

var counterValidIngredienti = 0;
var costo;

document.getElementById('button-submit').addEventListener("click", function(){
  console.log('Il nome del Burger è: ' + nomeBurger);
  costo = burgerBaseCosto;
  for (var i = 0; i < containerIngredienti.length; i++) {
  if (checkboxList[i].checked) {
    counterValidIngredienti++;
    costo += parseInt(checkboxList[i].value);
  }
  }
  console.log('Il prezzo è: ' + costo);

})
